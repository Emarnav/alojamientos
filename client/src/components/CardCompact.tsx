import { Bath, Bed, Heart, House, Star, MapPin, Wifi, WashingMachine, Snowflake, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/state/redux";
import { toast } from "sonner";

const CardCompact = ({
  alojamiento,
  alojamientoLink,
  context,
}: CardCompactProps) => {
  const [imgSrc, setImgSrc] = useState(
    alojamiento.photoUrls?.[0] || "/placeholder.jpg"
  );
  const dispatch = useAppDispatch();
  const selectedPropertyFromMap = useAppSelector((state) => state.global.selectedPropertyFromMap);
  
  const isSelected = selectedPropertyFromMap === alojamiento.id;

  // Función para obtener servicios principales
  const getMainServices = () => {
    const services = [];
    if (alojamiento.hayInternet) services.push({ icon: Wifi, label: "WiFi" });
    if (alojamiento.hayLavadora) services.push({ icon: WashingMachine, label: "Lavadora" });
    if (alojamiento.hayAireAcondicionado) services.push({ icon: Snowflake, label: "A/C" });
    return services.slice(0, 2); // Solo mostramos máximo 2 en modo compacto
  };

  const mainServices = getMainServices();

  return (
    <div className={`bg-white rounded-xl overflow-hidden shadow-lg w-full flex h-40 mb-5 transition-all duration-300 ${
      isSelected ? 'ring-2 ring-blue-500 shadow-xl scale-[1.02]' : ''
    }`}>
      <div className="relative w-1/3">
        <Image
          src={imgSrc}
          alt={alojamiento.nombre}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={() => setImgSrc("/placeholder.jpg")}
        />
        {/* Badges en la imagen */}
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          {alojamiento.esDestacado && (
            <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
              <Star className="w-3 h-3" />
              DESTACADO
            </span>
          )}
        </div>
        
        <div className="absolute bottom-2 left-2 flex gap-1 flex-col">
          {alojamiento.isPetsAllowed && (
            <span className="bg-white/90 text-black text-xs font-semibold px-2 py-1 rounded-full w-fit">
              Mascotas OK
            </span>
          )}
          {alojamiento.isParkingIncluded && (
            <span className="bg-white/90 text-black text-xs font-semibold px-2 py-1 rounded-full">
              Parking
            </span>
          )}
        </div>
      </div>
      <div className="w-2/3 p-4 flex flex-col justify-between">
        <div className="flex-1">
          {/* Título y precio */}
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-lg font-bold line-clamp-1 flex-1 mr-3">
              {alojamientoLink ? (
                <Link
                  href={alojamientoLink}
                  className="hover:underline hover:text-blue-600"
                  scroll={false}
                >
                  {alojamiento.nombre}
                </Link>
              ) : (
                alojamiento.nombre
              )}
            </h2>
            <div className="text-right">
              <p className="text-xl font-bold text-primary-700">
                €{alojamiento.precio}
                <span className="text-sm text-gray-500 font-normal">/mes</span>
              </p>
            </div>
          </div>

          {/* Ubicación */}
          <p className="text-gray-600 mb-2 text-sm flex items-center gap-1">
            <MapPin className="w-3 h-3 flex-shrink-0" />
            <span className="line-clamp-1">
              {alojamiento.direccion && `${alojamiento.direccion}, `}
              {alojamiento.ciudad}
              {alojamiento.provincia && `, ${alojamiento.provincia}`}
            </span>
          </p>

          {/* Tipo de alojamiento y plazas */}
          <div className="flex items-center gap-3 mb-2 text-sm">
            {alojamiento.tipoAlojamiento && (
              <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                {alojamiento.tipoAlojamiento}
              </span>
            )}
            {alojamiento.plazasLibres > 0 && (
              <span className="flex items-center gap-1 text-green-600 font-medium text-xs">
                <Users className="w-3 h-3" />
                {alojamiento.plazasLibres} plazas libres
              </span>
            )}
          </div>

          {/* Características principales */}
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
            <span className="flex items-center gap-1">
              <Bed className="w-4 h-4" />
              {alojamiento.habitaciones} hab.
            </span>
            <span className="flex items-center gap-1">
              <Bath className="w-4 h-4" />
              {alojamiento.banos} baños
            </span>
            <span className="flex items-center gap-1">
              <House className="w-4 h-4" />
              {alojamiento.superficie}m²
            </span>
          </div>

          {/* Servicios principales */}
          {mainServices.length > 0 && (
            <div className="flex items-center gap-2 mb-2">
              {mainServices.map((service, index) => (
                <span key={index} className="flex items-center gap-1 text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded-full">
                  <service.icon className="w-3 h-3" />
                  {service.label}
                </span>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default CardCompact;
