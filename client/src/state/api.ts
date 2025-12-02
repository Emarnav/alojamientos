import { cleanParams, createNewUserInDatabase, withToast } from "@/lib/utils";
import {
  Admin,
  Propietario,
  Estudiante,
  Conversacion,
  Alojamiento,
} from "@/types/prismaTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FiltersState } from ".";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    prepareHeaders: (headers, { endpoint }) => {
      // Rutas públicas que no necesitan token
      const publicEndpoints = [
        'login',
        'register',
        'forgotPassword',
        'resetPassword',
        'verifyEmail',
        'resendVerificationEmail'
      ];

      // Solo agregar token si no es un endpoint público
      if (!publicEndpoints.includes(endpoint)) {
        const token = localStorage.getItem("token");
        if (token) {
          headers.set("Authorization", `Bearer ${token}`);
        }
      }

      return headers;
    },
    errorHandler: (error, query, extraOptions, baseQuery) => {
      // Solo manejar errores 401 si no estamos en páginas de auth
      if (error.status === 401 && !window.location.pathname.match(/^\/(login|registro|recuperar-contrasena)$/)) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/login";
      }
      return { error };
    },
  }),
  reducerPath: "api",
  tagTypes: [
    "Propietarios",
    "Estudiantes",
    "Alojamientos",
    "Mensajes",
    "Solicitudes",
    "AdminConversation",
    "AdminConversations",
  ],
  // Dentro de tu createApi
  endpoints: (build) => ({
    getChatMessages: build.query({
      query: (conversacionId) => `/chat/mensajes/${conversacionId}`,
    }),

    sendMessage: build.mutation({
      query: (body) => ({
        url: "/chat/mensajes",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Mensajes"],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Mensaje enviado con éxito",
          error: "Error al enviar el mensaje",
        });
      },
    }),


    getUserConversations: build.query<Conversacion[], { userId: number }>({
      query: ({ userId }) => `/chat/conversaciones?usuarioId=${userId}`,
    }),

    createOrGetConversacion: build.mutation<
      { id: number },
      { alojamientoId: number; estudianteId: number; propietarioId: number }
    >({
      query: ({ alojamientoId, estudianteId, propietarioId }) => ({
        url: `/chat/conversaciones`,
        method: "POST",
        body: { alojamientoId, estudianteId, propietarioId },
      }),
      invalidatesTags: [{ type: "Mensajes", id: "LIST" }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Conversación iniciada",
          error: "Error al crear o conseguir la conversación",
        });
      },
    }),

    // Conversaciones admin-propietario
    getAdminConversation: build.query<Conversacion | null, { propietarioId: number }>({
      query: ({ propietarioId }) => `/chat/admin-conversation/${propietarioId}`,
      providesTags: (result, error, { propietarioId }) => [
        { type: "AdminConversation", id: propietarioId },
        "Mensajes"
      ],
    }),

    initAdminConversation: build.mutation<
      { mensaje: Mensaje; conversacion: number },
      { propietarioId: number; mensaje: string }
    >({
      query: ({ propietarioId, mensaje }) => ({
        url: `/chat/admin-conversation`,
        method: "POST",
        body: { propietarioId, mensaje },
      }),
      invalidatesTags: (result, error, { propietarioId }) => [
        { type: "AdminConversation", id: propietarioId },
        "Mensajes",
        "AdminConversations"
      ],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Mensaje enviado al administrador",
          error: "Error al enviar el mensaje",
        });
      },
    }),

    // Obtener todas las conversaciones admin para administradores
    getAdminConversations: build.query<Conversacion[], void>({
      query: () => `/chat/admin-conversations`,
      providesTags: ["AdminConversations", "Mensajes"],
    }),


    marcarComoLeido: build.mutation<
      { message: string },
      { conversacionId: number; usuarioId: number }
    >({
      query: ({ conversacionId, usuarioId }) => ({
        url: `/chat/conversaciones/${conversacionId}/leido`,
        method: "PATCH",
        body: { usuarioId },
      }),
      invalidatesTags: (result, error, { conversacionId }) => [
        { type: "Mensajes", id: conversacionId },
      ],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Conversación marcada como leída",
          error: "Error al marcar como leída",
        });
      },
    }),

    getAuthUser: build.query<User, void>({
      query: () => "auth/me",
      transformResponse: (response: { user: Estudiante | Propietario | Admin }) => ({
        userInfo: response.user,
        userRole: response.user.tipo,
      }),
    }),

    login: build.mutation<{ token: string; user: User }, { email: string; password: string }>({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
      transformResponse: (response: { token: string; user: Estudiante | Propietario | Admin }) => ({
        token: response.token,
        user: {
          userInfo: response.user,
          userRole: response.user.tipo,
        },
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
        } catch (error) {
          console.error("Login error:", error);
        }
      },
    }),

    register: build.mutation<{ token: string; user: User }, { nombre: string; email: string; password: string; tipo: string }>({
      query: (userData) => ({
        url: "auth/register",
        method: "POST",
        body: userData,
      }),
      transformResponse: (response: { token: string; user: Estudiante | Propietario | Admin }) => ({
        token: response.token,
        user: {
          userInfo: response.user,
          userRole: response.user.tipo,
        },
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
        } catch (error) {
          console.error("Register error:", error);
        }
      },
    }),

    forgotPassword: build.mutation<{ message: string; resetToken?: string }, { email: string }>({
      query: (body) => ({
        url: "auth/forgot-password",
        method: "POST",
        body,
      }),
    }),

    resetPassword: build.mutation<{ message: string }, { token: string; newPassword: string }>({
      query: (body) => ({
        url: "auth/reset-password",
        method: "POST",
        body,
      }),
    }),

    verifyEmail: build.mutation<{ message: string }, { token: string }>({
      query: (body) => ({
        url: "auth/verify-email",
        method: "POST",
        body,
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Email verificado exitosamente",
          error: "Error al verificar el email",
        });
      },
    }),

    resendVerificationEmail: build.mutation<{ message: string; verificationToken?: string }, { email: string }>({
      query: (body) => ({
        url: "auth/resend-verification",
        method: "POST",
        body,
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Email de verificación enviado",
          error: "Error al enviar email de verificación",
        });
      },
    }),

    // property related endpoints
    getProperties: build.query<
      {
        alojamientos: Alojamiento[];
        pagination: {
          page: number;
          limit: number;
          total: number;
          totalPages: number;
          hasNext: boolean;
          hasPrev: boolean;
        };
        filters: {
          applied: boolean;
          count: number;
        };
      },
      (Partial<FiltersState> & { 
        favoriteIds?: number[]; 
        page?: number; 
        limit?: number;
        sortBy?: string;
      }) | void
    >({
      query: (filters = {}) => {
        const params = cleanParams({
          location: filters?.location,
          priceMin: filters?.rangoPrecio?.[0],
          priceMax: filters?.rangoPrecio?.[1],
          beds: filters?.habitaciones,
          baths: filters?.banos,
          propertyType: filters?.tipoAlojamiento,
          squareFeetMin: filters?.superficie?.[0],
          squareFeetMax: filters?.superficie?.[1],
          provincia: filters?.provincia,
          page: filters?.page || 1,
          limit: filters?.limit || 24,
          sortBy: filters?.sortBy || "featured",
        });

        return { url: "alojamientos", params };
      },
      providesTags: (result) =>
        result?.alojamientos
          ? [
              ...result.alojamientos.map(({ id }) => ({ type: "Alojamientos" as const, id })),
              { type: "Alojamientos", id: "LIST" },
            ]
          : [{ type: "Alojamientos", id: "LIST" }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Error al obtener los alojamientos.",
        });
      },
    }),

    getProperty: build.query<Alojamiento, string | number>({
      query: (id) => `alojamientos/${id}`,
      providesTags: (result, error, id) => [{ type: "Alojamientos", id }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Error al cargar los detalles del alojamiento.",
        });
      },
    }),

    getPropertyBySlug: build.query<Alojamiento, string>({
      query: (slug) => `alojamientos/slug/${slug}`,
      providesTags: (result, error, slug) => [{ type: "Alojamientos", id: result?.id || slug }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Error al cargar los detalles del alojamiento.",
        });
      },
    }),

    // Admin puede obtener alojamientos en cualquier estado
    getAdminProperty: build.query<Alojamiento, number>({
      query: (id) => `admin/alojamientos/${id}`,
      providesTags: (result, error, id) => [{ type: "Alojamientos", id }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Error al cargar los detalles del alojamiento.",
        });
      },
    }),

    // tenant related endpoints
    getTenant: build.query<Estudiante, number>({
      query: (userId) => `estudiante/${userId}`,
      providesTags: (result) => [{ type: "Estudiantes", id: result?.id }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Error al cargar el perfil del estudiante.",
        });
      },
    }),

    getCurrentResidences: build.query<Alojamiento[], number>({
      query: (userId) => `estudiante/${userId}/current-residences`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Alojamientos" as const, id })),
              { type: "Alojamientos", id: "LIST" },
            ]
          : [{ type: "Alojamientos", id: "LIST" }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Error al obtener las residencias actuales.",
        });
      },
    }),

    updateProperty: build.mutation<Alojamiento, FormData>({
      query: (formData) => {
        const alojamientoId = formData.get("alojamientoId");
        return {
          url: `alojamientos/${alojamientoId}`,
          method: "PUT",
          body: formData,
        };
      },
      invalidatesTags: (result, error, formData) => {
        const id = formData.get("alojamientoId");
        return [
          { type: "Alojamientos", id: "LIST" },
          { type: "Alojamientos", id: Number(id) }, // <- este es el importante
        ];
      }, 
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Alojamiento actualizado correctamente",
          error: "Error al actualizar el alojamiento",
        });
      },
    }),

    deleteProperty: build.mutation<void, number>({
      query: (id) => ({
        url: `alojamientos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Alojamientos", id: "LIST" }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Alojamiento eliminado correctamente",
          error: "Error al eliminar el alojamiento",
        });
      },
    }),

    republishProperty: build.mutation<
      { message: string; alojamiento: any },
      { id: number; userId: number }
    >({
      query: ({ id, userId }) => ({
        url: `alojamientos/${id}/republish`,
        method: "PATCH",
        body: { userId },
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Alojamientos", id: "LIST" },
        { type: "Alojamientos", id },
      ],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Alojamiento republicado correctamente. Será revisado por el administrador.",
          error: "Error al republicar el alojamiento",
        });
      },
    }),

    updateStudentSettings: build.mutation<
      Estudiante,
      { userId: number } & Partial<Estudiante>
    >({
      query: ({ userId, ...updatedStudent }) => ({
        url: `estudiante/${userId}`,
        method: "PUT",
        body: updatedStudent,
      }),
      invalidatesTags: (result) => [{ type: "Estudiantes", id: result?.id }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Ajustes actualizados correctamente",
          error: "Error al actualizar los ajustes",
        });
      },
    }),

    addFavoriteProperty: build.mutation<
      Estudiante,
      { userId: number; propertyId: number }
    >({
      query: ({ userId, propertyId }) => ({
        url: `estudiante/${userId}/favoritos/${propertyId}`,
        method: "POST",
      }),
      invalidatesTags: (result) => [
        { type: "Estudiantes", id: result?.id },
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
      Estudiante,
      { userId: number; propertyId: number }
    >({
      query: ({ userId, propertyId }) => ({
        url: `estudiante/${userId}/favoritos/${propertyId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result) => [
        { type: "Estudiantes", id: result?.id },
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
    getManagerProperties: build.query<Alojamiento[], number>({
      query: (userId) => `propietario/${userId}/alojamientos`,
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
      { userId: number } & Partial<Propietario>
    >({
      query: ({ userId, ...updatedManager }) => ({
        url: `propietario/${userId}`,
        method: "PUT",
        body: updatedManager,
      }),
      invalidatesTags: (result) => [{ type: "Propietarios", id: result?.id }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Ajustes actualizados correctamente!",
          error: "Error al actualizar los ajustes.",
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
          success: "Alojamiento creado con éxito!",
          error: "Error al crear el alojamiento.",
        });
      },
    }),


    // 🔹 Obtener alojamientos pendientes
    getAlojamientosPendientes: build.query<Alojamiento[], void>({
      query: () => "admin/alojamientos/pendientes",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Alojamientos" as const, id })),
              { type: "Alojamientos", id: "LIST" },
            ]
          : [{ type: "Alojamientos", id: "LIST" }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Error al cargar alojamientos pendientes.",
        });
      },
    }),

    // 🔹 Aprobar alojamiento
    approveAlojamiento: build.mutation<{ success: boolean }, { id: number; esDestacado: boolean }>({
      query: ({ id, esDestacado }) => ({
        url: `admin/alojamientos/${id}/aprobar`,
        method: "PUT",
        body: { esDestacado }, // ✅ incluir en body
      }),
      invalidatesTags: [{ type: "Alojamientos", id: "LIST" }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Alojamiento aprobado.",
          error: "Error al aprobar alojamiento.",
        });
      },
    }),


    // 🔹 Rechazar alojamiento
    rejectAlojamiento: build.mutation<{ success: boolean }, { id: number; motivo: string; esDestacado: boolean }>({
      query: ({ id, motivo, esDestacado }) => ({
        url: `admin/alojamientos/${id}/rechazar`,
        method: "PUT",
        body: { motivo, esDestacado },
      }),
      invalidatesTags: [{ type: "Alojamientos", id: "LIST" }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Alojamiento rechazado.",
          error: "Error al rechazar alojamiento.",
        });
      },
    }),
    deleteApprovedProperty: build.mutation<{ message: string }, number>({
      query: (id) => ({
        url: `admin/alojamientos/${id}/eliminar`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "Alojamientos", id },
        { type: "Alojamientos", id: "APPROVED" },
        { type: "Alojamientos", id: "LIST" },
      ],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Alojamiento eliminado correctamente.",
          error: "Error al eliminar alojamiento.",
        });
      },
    }),
    // admin related endpoints
    getAdminPropietarios: build.query<
      {
        propietarios: Array<{
          id: number;
          nombre: string;
          email: string;
          telefono: string | null;
          createdAt: string;
          isEmailVerified: boolean;
          isSuspended: boolean;
          _count: {
            alojamientos: number;
            conversacionesComoPropietario: number;
          };
        }>;
        pagination: {
          currentPage: number;
          totalPages: number;
          totalCount: number;
          limit: number;
        };
      },
      {
        search?: string;
        sortBy?: 'createdAt' | 'nombre' | 'email';
        sortOrder?: 'asc' | 'desc';
        page?: number;
        limit?: number;
      } | void
    >({
      query: (params = {}) => {
        const searchParams = new URLSearchParams();
        
        if (params.search) searchParams.set('search', params.search);
        if (params.sortBy) searchParams.set('sortBy', params.sortBy);
        if (params.sortOrder) searchParams.set('sortOrder', params.sortOrder);
        if (params.page) searchParams.set('page', params.page.toString());
        if (params.limit) searchParams.set('limit', params.limit.toString());
        
        return `admin/propietarios?${searchParams.toString()}`;
      },
      providesTags: (result) =>
        result?.propietarios
          ? [
              ...result.propietarios.map(({ id }) => ({ type: "Propietarios" as const, id })),
              { type: "Propietarios", id: "LIST" },
            ]
          : [{ type: "Propietarios", id: "LIST" }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Error al cargar la lista de propietarios.",
        });
      },
    }),
    getAdminPendingProperties: build.query<Alojamiento[], void>({
      query: () => `admin/alojamientos/pendientes`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Alojamientos" as const, id })),
              { type: "Alojamientos", id: "PENDING" },
            ]
          : [{ type: "Alojamientos", id: "PENDING" }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Error al cargar los alojamientos pendientes.",
        });
      },
    }),
    getAdminApprovedProperties: build.query<
      {
        properties: Alojamiento[];
        pagination: {
          currentPage: number;
          totalPages: number;
          totalCount: number;
          limit: number;
        };
      },
      {
        search?: string;
        sortBy?: 'postedDate' | 'nombre' | 'precio';
        sortOrder?: 'asc' | 'desc';
        propietario?: string;
        page?: number;
        limit?: number;
      } | void
    >({
      query: (params = {}) => {
        const searchParams = new URLSearchParams();
        
        if (params.search) searchParams.set('search', params.search);
        if (params.sortBy) searchParams.set('sortBy', params.sortBy);
        if (params.sortOrder) searchParams.set('sortOrder', params.sortOrder);
        if (params.propietario) searchParams.set('propietario', params.propietario);
        if (params.page) searchParams.set('page', params.page.toString());
        if (params.limit) searchParams.set('limit', params.limit.toString());
        
        return `admin/alojamientos/aprobados?${searchParams.toString()}`;
      },
      providesTags: (result) =>
        result?.properties
          ? [
              ...result.properties.map(({ id }) => ({ type: "Alojamientos" as const, id })),
              { type: "Alojamientos", id: "APPROVED" },
            ]
          : [{ type: "Alojamientos", id: "APPROVED" }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Error al cargar los alojamientos aprobados.",
        });
      },
    }),


    // Admin propietarios management endpoints
    suspendPropietario: build.mutation<{ success: boolean; message: string }, { propietarioId: number; motivo: string }>({
      query: ({ propietarioId, motivo }) => ({
        url: `admin/propietarios/${propietarioId}/suspender`,
        method: "PUT",
        body: { motivo },
      }),
      invalidatesTags: ["Propietarios"],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Propietario suspendido correctamente",
          error: "Error al suspender el propietario",
        });
      },
    }),

    reactivarPropietario: build.mutation<{ success: boolean; message: string }, number>({
      query: (propietarioId) => ({
        url: `admin/propietarios/${propietarioId}/reactivar`,
        method: "PUT",
      }),
      invalidatesTags: ["Propietarios"],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Propietario reactivado correctamente",
          error: "Error al reactivar el propietario",
        });
      },
    }),

    eliminarPropietario: build.mutation<{ success: boolean; message: string }, number>({
      query: (propietarioId) => ({
        url: `admin/propietarios/${propietarioId}/eliminar`,
        method: "DELETE",
      }),
      invalidatesTags: ["Propietarios"],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Propietario eliminado correctamente",
          error: "Error al eliminar el propietario",
        });
      },
    }),

    enviarMensajePropietario: build.mutation<
      { success: boolean; conversacion: any; mensaje: any },
      { propietarioId: number; mensaje: string; alojamientoId?: number }
    >({
      query: ({ propietarioId, mensaje, alojamientoId }) => ({
        url: `admin/propietarios/${propietarioId}/mensaje`,
        method: "POST",
        body: { mensaje, alojamientoId },
      }),
      invalidatesTags: ["Conversaciones"],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Mensaje enviado correctamente",
          error: "Error al enviar el mensaje",
        });
      },
    }),

  }),
});

export const {
  useGetAuthUserQuery,
  useLoginMutation,
  useRegisterMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useVerifyEmailMutation,
  useResendVerificationEmailMutation,
  useUpdateStudentSettingsMutation,
  useUpdatePropertyMutation,
  useMarcarComoLeidoMutation,
  useDeletePropertyMutation,
  useUpdateManagerSettingsMutation,
  useGetPropertiesQuery,
  useGetPropertyQuery,
  useGetPropertyBySlugQuery,
  useGetAdminPropertyQuery,
  useGetCurrentResidencesQuery,
  useGetManagerPropertiesQuery,
  useCreatePropertyMutation,
  useGetTenantQuery,
  useAddFavoritePropertyMutation,
  useRemoveFavoritePropertyMutation,
  useSendMessageMutation,
  useGetChatMessagesQuery,
  useGetUserConversationsQuery,
  useGetAlojamientosPendientesQuery,
  useApproveAlojamientoMutation,
  useRejectAlojamientoMutation,
  useGetAdminPendingPropertiesQuery,
  useGetAdminApprovedPropertiesQuery,
  useGetAdminPropietariosQuery,
  useDeleteApprovedPropertyMutation,
  useCreateOrGetConversacionMutation,
  useSuspendPropietarioMutation,
  useReactivarPropietarioMutation,
  useEliminarPropietarioMutation,
  useEnviarMensajePropietarioMutation,
  useGetAdminConversationQuery,
  useInitAdminConversationMutation,
  useGetAdminConversationsQuery,
  useRepublishPropertyMutation
} = api;