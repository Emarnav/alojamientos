import { cleanParams, createNewUserInDatabase, withToast } from "@/lib/utils";
import {
  Solicitud,
  Lease,
  Propietario,
  Payment,
  Alojamiento,
  Inquilino,
} from "@/types/prismaTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";
import { FiltersState } from ".";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    prepareHeaders: async (headers) => {
      try {
        const session = await fetchAuthSession();
        const { idToken } = session.tokens ?? {};

        if (idToken) {
          headers.set("Authorization", `Bearer ${idToken}`);
        }
      } catch (error) {
        console.error("Error obteniendo la sesión:", error);
      }
      return headers;
    },
  }),
  reducerPath: "api",
  tagTypes: [
    "Propietarios",
    "Inquilinos",
    "Alojamientos",
    "AlojamientoDetalles",
    "Leases",
    "Payments",
    "Solicitudes",
  ],
  endpoints: (build) => ({
    getAuthUser: build.query<User, void>({
      queryFn: async (_, _queryApi, _extraoptions, fetchWithBQ) => {
        try {
          const session = await fetchAuthSession();
          const { idToken } = session.tokens ?? {};
          const user = await getCurrentUser();

          const userRole = idToken?.payload["custom:role"] as string;

          if (!userRole) {
            return { error: "Rol de usuario no encontrado" };
          }

          const endpoint =
            userRole === "propietario"
              ? `/propietarios/${user.userId}`
              : `/inquilinos/${user.userId}`;

          let userDetailsResponse = await fetchWithBQ(endpoint);
          // Si el usuario no existe, intentar crearlo
          if (
            userDetailsResponse.error &&
            userDetailsResponse.error.status === 404
          ) {
            userDetailsResponse = await createNewUserInDatabase(
              user,
              idToken,
              userRole,
              fetchWithBQ
            );
          }

          return {
            data: {
              cognitoInfo: { ...user },
              userInfo: userDetailsResponse.data as Inquilino | Propietario,
              userRole,
            },
          };
        } catch (error: any) {
          return { error: error.message || "Error al obtener la info del usuario" };
        }
      },
    }),

    // property related endpoints
    getProperties: build.query<
      Alojamiento[],
      Partial<FiltersState> & { favoriteIds?: number[] }
    >({
      query: (filters) => {
        const params = cleanParams({
          location: filters.location,
          precioMin: filters.rangoPrecio?.[0],
          precioMax: filters.rangoPrecio?.[1],
          habitaciones: filters.habitaciones,
          banos: filters.banos,
          tipoAlojamiento: filters.tipoAlojamiento,
          superficieMin: filters.superficie?.[0],
          SuperficieMax: filters.superficie?.[1],
          amenities: filters.amenities?.join(","),
          disponibleDesde: filters.disponibleDesde,
          favoriteIds: filters.favoriteIds?.join(","),
          latitude: filters.coordinates?.[1],
          longitude: filters.coordinates?.[0],
        });

        return { url: "alojamientos", params };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Alojamientos" as const, id })),
              { type: "Alojamientos", id: "LIST" },
            ]
          : [{ type: "Alojamientos", id: "LIST" }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Error al obtener los alojamientos.",
        });
      },
    }),

    getProperty: build.query<Alojamiento, number>({
      query: (id) => `alojamientos/${id}`,
      providesTags: (result, error, id) => [{ type: "AlojamientoDetalles", id }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Error al cargar los detalles del alojamietnto.",
        });
      },
    }),

    // tenant related endpoints
    getTenant: build.query<Inquilino, string>({
      query: (cognitoId) => `inquilinos/${cognitoId}`,
      providesTags: (result) => [{ type: "Inquilinos", id: result?.id }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to load tenant profile.",
        });
      },
    }),

    getCurrentResidences: build.query<Alojamiento[], string>({
      query: (cognitoId) => `inquilinos/${cognitoId}/current-residences`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Alojamientos" as const, id })),
              { type: "Alojamientos", id: "LIST" },
            ]
          : [{ type: "Alojamientos", id: "LIST" }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to fetch current residences.",
        });
      },
    }),

    updateProperty: build.mutation<
      Alojamiento,
      { alojamientoId: string } & Partial<Alojamiento>
    >({
      query: ({ alojamientoId, ...updatedProperty }) => ({
        url: `alojamientos/${alojamientoId}`,
        method: "PUT",
        body: updatedProperty,
      }),
      invalidatesTags: (result) => [{ type: "Inquilinos", id: result?.id }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Ajustes actualizados correctamente",
          error: "Error al actualizar los ajustes",
        });
      },
    }),

    updateTenantSettings: build.mutation<
      Inquilino,
      { cognitoId: string } & Partial<Inquilino>
    >({
      query: ({ cognitoId, ...updatedTenant }) => ({
        url: `inquilinos/${cognitoId}`,
        method: "PUT",
        body: updatedTenant,
      }),
      invalidatesTags: (result) => [{ type: "Inquilinos", id: result?.id }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Ajustes actualizados correctamente",
          error: "Error al actualizar los ajustes",
        });
      },
    }),

    addFavoriteProperty: build.mutation<
      Inquilino,
      { cognitoId: string; propertyId: number }
    >({
      query: ({ cognitoId, propertyId }) => ({
        url: `inquilinos/${cognitoId}/favoritos/${propertyId}`,
        method: "POST",
      }),
      invalidatesTags: (result) => [
        { type: "Inquilinos", id: result?.id },
        { type: "Alojamientos", id: "LIST" },
      ],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Alojamiento agregado a favoritos.",
          error: "Error al marcar el alojamiento como favorito.",
        });
      },
    }),

    removeFavoriteProperty: build.mutation<
      Inquilino,
      { cognitoId: string; propertyId: number }
    >({
      query: ({ cognitoId, propertyId }) => ({
        url: `inquilinos/${cognitoId}/favoritos/${propertyId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result) => [
        { type: "Inquilinos", id: result?.id },
        { type: "Alojamientos", id: "LIST" },
      ],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Alojamiento eliminado de favoritos.",
          error: "Error al eliminar el alojamiento de favoritos.",
        });
      },
    }),

    // manager related endpoints
    getManagerProperties: build.query<Alojamiento[], string>({
      query: (cognitoId) => `propietarios/${cognitoId}/alojamientos`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Alojamientos" as const, id })),
              { type: "Alojamientos", id: "LIST" },
            ]
          : [{ type: "Alojamientos", id: "LIST" }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Error al cargar los alojamientos del propietario.",
        });
      },
    }),

    updateManagerSettings: build.mutation<
      Propietario,
      { cognitoId: string } & Partial<Propietario>
    >({
      query: ({ cognitoId, ...updatedManager }) => ({
        url: `propietarios/${cognitoId}`,
        method: "PUT",
        body: updatedManager,
      }),
      invalidatesTags: (result) => [{ type: "Propietarios", id: result?.id }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Settings updated successfully!",
          error: "Failed to update settings.",
        });
      },
    }),

    createProperty: build.mutation<Alojamiento, FormData>({
      query: (newProperty) => ({
        url: `alojamientos`,
        method: "POST",
        body: newProperty,
      }),
      invalidatesTags: (result) => [
        { type: "Alojamientos", id: "LIST" },
        { type: "Propietarios", id: result?.propietario?.id },
      ],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Property created successfully!",
          error: "Failed to create property.",
        });
      },
    }),

    // lease related enpoints
    getLeases: build.query<Lease[], number>({
      query: () => "leases",
      providesTags: ["Leases"],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to fetch leases.",
        });
      },
    }),

    getPropertyLeases: build.query<Lease[], number>({
      query: (propertyId) => `alojamientos/${propertyId}/leases`,
      providesTags: ["Leases"],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to fetch property leases.",
        });
      },
    }),

    getPayments: build.query<Payment[], number>({
      query: (leaseId) => `leases/${leaseId}/payments`,
      providesTags: ["Payments"],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to fetch payment info.",
        });
      },
    }),

    // application related endpoints
    getApplications: build.query<
      Solicitud[],
      { userId?: string; userType?: string }
    >({
      query: (params) => {
        const queryParams = new URLSearchParams();
        if (params.userId) {
          queryParams.append("userId", params.userId.toString());
        }
        if (params.userType) {
          queryParams.append("userType", params.userType);
        }

        return `solicitudes?${queryParams.toString()}`;
      },
      providesTags: ["Solicitudes"],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Error al cargar las solicitudes.",
        });
      },
    }),

    updateApplicationStatus: build.mutation<
      Solicitud & { lease?: Lease },
      { id: number; status: string }
    >({
      query: ({ id, status }) => ({
        url: `solicitudes/${id}/estado`,
        method: "PUT",
        body: { status },
      }),
      invalidatesTags: ["Solicitudes", "Leases"],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Application status updated successfully!",
          error: "Failed to update application settings.",
        });
      },
    }),

    createApplication: build.mutation<Solicitud, Partial<Solicitud>>({
      query: (body) => ({
        url: `solicitudes`,
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["Solicitudes"],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Solicitud creada con éxito!",
          error: "Error al crear la solicitud.",
        });
      },
    }),
  }),
});

export const {
  useGetAuthUserQuery,
  useUpdateTenantSettingsMutation,
  useUpdatePropertyMutation,
  useUpdateManagerSettingsMutation,
  useGetPropertiesQuery,
  useGetPropertyQuery,
  useGetCurrentResidencesQuery,
  useGetManagerPropertiesQuery,
  useCreatePropertyMutation,
  useGetTenantQuery,
  useAddFavoritePropertyMutation,
  useRemoveFavoritePropertyMutation,
  useGetLeasesQuery,
  useGetPropertyLeasesQuery,
  useGetPaymentsQuery,
  useGetApplicationsQuery,
  useUpdateApplicationStatusMutation,
  useCreateApplicationMutation,
} = api;