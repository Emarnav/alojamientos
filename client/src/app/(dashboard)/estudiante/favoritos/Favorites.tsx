"use client";

import Card from "@/components/Card";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import {
  useGetAuthUserQuery,
  useGetPropertiesQuery,
  useGetTenantQuery,
} from "@/state/api";
import React from "react";

const Favorites = () => {
  const { data: authUser } = useGetAuthUserQuery();
  const { data: estudiante } = useGetTenantQuery(
    authUser?.cognitoInfo?.userId || "",
    {
      skip: !authUser?.cognitoInfo?.userId,
    }
  );

  const {
    data: favoriteProperties,
    isLoading,
    error,
  } = useGetPropertiesQuery(
    { favoriteIds: estudiante?.favoritos?.map((fav: { id: number }) => fav.id) },
    { skip: !estudiante?.favoritos || estudiante?.favoritos.length === 0 }
  );

  if (isLoading) return <Loading />;
  if (error) return <div>Error cargando los alojamientos favoritos</div>;

  return (
    <div className="dashboard-container">
      <Header
        title="Mis alojamientos favoritos"
        subtitle="Browse and manage your saved property listings"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {favoriteProperties?.map((alojamiento) => (
          <Card
            key={alojamiento.id}
            alojamiento={alojamiento}
            isFavorite={true}
            onFavoriteToggle={() => {}}
            showFavoriteButton={false}
            alojamientoLink={`/estudiante/alojamientos/${alojamiento.id}`}
          />
        ))}
      </div>
      {(!favoriteProperties || favoriteProperties.length === 0) && (
        <p>No tienes ningún alojamiento marcado como favorito.</p>
      )}
    </div>
  );
};

export default Favorites;
