import {
  useAddFavoritePropertyMutation,
  useGetAuthUserQuery,
  useGetPropertiesQuery,
  useGetTenantQuery,
  useRemoveFavoritePropertyMutation,
} from "@/state/api";
import { useAppSelector } from "@/state/redux";
import { Alojamiento } from "@/types/prismaTypes";
import Card from "@/components/Card";
import React from "react";
import CardCompact from "@/components/CardCompact";

const Listings = () => {
  const { data: authUser } = useGetAuthUserQuery();
  const { data: inquilino } = useGetTenantQuery(
    authUser?.cognitoInfo?.userId || "",
    {
      skip: !authUser?.cognitoInfo?.userId,
    }
  );
  const [addFavorite] = useAddFavoritePropertyMutation();
  const [removeFavorite] = useRemoveFavoritePropertyMutation();
  const viewMode = useAppSelector((state) => state.global.viewMode);
  const filters = useAppSelector((state) => state.global.filters);

  const {
    data: alojamientos,
    isLoading,
    isError,
  } = useGetPropertiesQuery(filters);

  const handleFavoriteToggle = async (propertyId: number) => {
    if (!authUser) return;

    const isFavorite = inquilino?.favoritos?.some(
      (fav: Alojamiento) => fav.id === propertyId
    );

    if (isFavorite) {
      await removeFavorite({
        cognitoId: authUser.cognitoInfo.userId,
        propertyId,
      });
    } else {
      await addFavorite({
        cognitoId: authUser.cognitoInfo.userId,
        propertyId,
      });
    }
  };

  if (isLoading) return <>Cargando...</>;
  if (isError || !alojamientos) return <div>Error al cargar los alojamientos</div>;

  return (
    <div className="w-full">
      <h3 className="text-sm px-4 font-bold">
        {alojamientos.length}{" "}
        <span className="text-gray-700 font-normal">
          Ubicado en {filters.location}
        </span>
      </h3>
      <div className="flex">
        <div className="p-4 w-full">
          {alojamientos?.map((alojamiento) =>
            viewMode === "grid" ? (
              <Card
                key={alojamiento.id}
                alojamiento={alojamiento}
                isFavorite={
                  inquilino?.favoritos?.some(
                    (fav: Alojamiento) => fav.id === alojamiento.id
                  ) || false
                }
                onFavoriteToggle={() => handleFavoriteToggle(alojamiento.id)}
                showFavoriteButton={!!authUser}
                alojamientoLink={`/alojamientos/${alojamiento.id}`}
              />
            ) : (
              <CardCompact
                key={alojamiento.id}
                alojamiento={alojamiento}
                isFavorite={
                  inquilino?.favoritos?.some(
                    (fav: Alojamiento) => fav.id === alojamiento.id
                  ) || false
                }
                onFavoriteToggle={() => handleFavoriteToggle(alojamiento.id)}
                showFavoriteButton={!!authUser}
                alojamientoLink={`/alojamientos/${alojamiento.id}`}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Listings;
