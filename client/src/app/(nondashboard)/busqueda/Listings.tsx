import {
  useAddFavoritePropertyMutation,
  useGetAuthUserQuery,
  useGetTenantQuery,
  useRemoveFavoritePropertyMutation,
} from "@/state/api";
import { useAppSelector } from "@/state/redux";
import Card from "@/components/Card";
import CardCompact from "@/components/CardCompact";
import React, { useEffect, useRef } from "react";


const Listings = ({ alojamientos, isLoading, isError }: ListingsProps) => {
  const { data: authUser } = useGetAuthUserQuery();
  const isEstudiante = authUser?.userRole === "Estudiante";

  const { data: estudiante } = useGetTenantQuery(
    authUser?.userInfo?.id || "",
    {
      skip: !authUser?.userInfo?.id || !isEstudiante,
    }
  );

  const viewMode = useAppSelector((state) => state.global.viewMode);
  const filters = useAppSelector((state) => state.global.filters);
  const selectedPropertyFromMap = useAppSelector((state) => state.global.selectedPropertyFromMap);
  const propertyRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  // Scroll a la propiedad seleccionada desde el mapa
  useEffect(() => {
    if (selectedPropertyFromMap && propertyRefs.current[selectedPropertyFromMap]) {
      propertyRefs.current[selectedPropertyFromMap]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }, [selectedPropertyFromMap]);


  if (isLoading) return <>Cargando...</>;
  if (isError || !alojamientos) return <div>Error al cargar los alojamientos</div>;

  return (
    <div className="w-full">
      <h3 className="text-sm px-4 font-bold mb-4">
        {alojamientos.length}{" "}
        <span className="text-gray-700 font-normal">
          {filters.location ? `Ubicado en ${filters.location}` : "alojamientos encontrados"}
        </span>
      </h3>
      
      {/* Grid responsivo optimizado para 150+ alojamientos */}
      <div className="px-4">
        {viewMode === "grid" ? (
          // Grid de cards más compactas - más columnas en desktop
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {alojamientos.map((alojamiento) => (
              <div
                key={alojamiento.id}
                ref={(el) => (propertyRefs.current[alojamiento.id] = el)}
              >
                <Card
                  alojamiento={alojamiento}
                  alojamientoLink={`/alojamientos/${alojamiento.slug}`}
                  context="busqueda"
                />
              </div>
            ))}
          </div>
        ) : (
          // Vista lista compacta
          <div className="space-y-2">
            {alojamientos.map((alojamiento) => (
              <div
                key={alojamiento.id}
                ref={(el) => (propertyRefs.current[alojamiento.id] = el)}
              >
                <CardCompact
                  alojamiento={alojamiento}
                  alojamientoLink={`/alojamientos/${alojamiento.slug}`}
                  context="busqueda"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Listings;
