"use client";

import Card from "@/components/Card";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import {
  useGetAuthUserQuery,
  useGetCurrentResidencesQuery,
  useGetTenantQuery,
} from "@/state/api";
import React from "react";

const Residences = () => {
  const { data: authUser } = useGetAuthUserQuery();
  const { data: estudiante } = useGetTenantQuery(
    authUser?.cognitoInfo?.userId || "",
    {
      skip: !authUser?.cognitoInfo?.userId,
    }
  );

  const {
    data: currentResidences,
    isLoading,
    error,
  } = useGetCurrentResidencesQuery(authUser?.cognitoInfo?.userId || "", {
    skip: !authUser?.cognitoInfo?.userId,
  });

  if (isLoading) return <Loading />;
  if (error) return <div>Error al cargar los alojamientos</div>;

  return (
    <div className="dashboard-container">
      <Header
        title="Current Residences"
        subtitle="View and manage your current living spaces"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentResidences?.map((alojamiento) => (
          <Card
            key={alojamiento.id}
            alojamiento={alojamiento}
            isFavorite={estudiante?.favoritos.includes(alojamiento.id) || false}
            onFavoriteToggle={() => {}}
            showFavoriteButton={false}
            alojamientoLink={`/estudiante/alojamientos/${alojamiento.id}`}
          />
        ))}
      </div>
      {(!currentResidences || currentResidences.length === 0) && (
        <p>You don&lsquo;t have any current residences</p>
      )}
    </div>
  );
};

export default Residences;
