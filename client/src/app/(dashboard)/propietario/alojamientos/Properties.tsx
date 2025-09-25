"use client";

import Card from "@/components/Card";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import SuspensionWarning from "@/components/SuspensionWarning";
import { useGetAuthUserQuery, useGetManagerPropertiesQuery } from "@/state/api";
import { useUserSuspension } from "@/hooks/useUserSuspension";
import React from "react";

const Properties = () => {
  const { data: authUser } = useGetAuthUserQuery();
  const { shouldShowWarning } = useUserSuspension();
  const {
    data: propietarioAlojamientos,
    isLoading,
    error,
  } = useGetManagerPropertiesQuery(authUser?.userInfo?.id || 0, {
    skip: !authUser?.userInfo?.id,
  });

  // Count suspended properties
  const suspendedCount = propietarioAlojamientos?.filter(
    alojamiento => alojamiento.estado === "Suspendido"
  ).length || 0;

  if (isLoading) return <Loading />;
  if (error) return <div>Error cargando los alojamientos del propietario</div>;

  return (
    <div className="dashboard-container">
      <Header
        title="Mis alojamientos"
        subtitle="Gestiona tus alojamientos"
      />
      
      {shouldShowWarning && <SuspensionWarning />}
      
      {suspendedCount > 0 && !shouldShowWarning && (
        <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-6 rounded-lg">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-orange-700">
                <strong>Tienes {suspendedCount} alojamiento{suspendedCount > 1 ? 's' : ''} suspendido{suspendedCount > 1 ? 's' : ''}.</strong>
              </p>
              <p className="text-sm text-orange-600 mt-1">
                Estos alojamientos están temporalmente inactivos y no son visibles para los estudiantes. 
                <strong> Puedes republicarlos usando el botón 🔄 en cada alojamiento</strong> para enviarlos a revisión del administrador.
              </p>
            </div>
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {propietarioAlojamientos?.map((alojamiento) => (
          <Card
            key={alojamiento.id}
            alojamiento={alojamiento}
            alojamientoLink={`/propietario/alojamientos/${alojamiento.id}`}
            context="propietario"
          />
        ))}
      </div>
      {(!propietarioAlojamientos || propietarioAlojamientos.length === 0) && (
        <p>No gestionas ningún alojamiento</p>
      )}
    </div>
  );
};

export default Properties;
