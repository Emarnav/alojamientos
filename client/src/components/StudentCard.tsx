"use client";

import {
  Bath,
  Bed,
  Wifi,
  WashingMachine,
  Snowflake,
  Star,
  MapPin
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { getAbsoluteImageUrls } from "@/lib/utils";

interface StudentCardProps {
  alojamiento: any;
}

const StudentCard = ({
  alojamiento,
}: StudentCardProps) => {
  const [imgSrc, setImgSrc] = useState(
    getAbsoluteImageUrls(alojamiento.photoUrls)[0]
  );

  // Función para obtener servicios principales
  const getMainServices = () => {
    const services = [];
    if (alojamiento.hayInternet) services.push({ icon: Wifi, label: "WiFi" });
    if (alojamiento.hayLavadora) services.push({ icon: WashingMachine, label: "Lavadora" });
    if (alojamiento.hayAireAcondicionado) services.push({ icon: Snowflake, label: "A/C" });
    return services.slice(0, 3); // Solo mostramos máximo 3
  };

  const mainServices = getMainServices();

  return (
    <Link 
      href={`/alojamientos/${alojamiento.slug}`}
      className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 w-full cursor-pointer border border-gray-100 group hover:-translate-y-1"
    >
      {/* Imagen con overlay y efectos hover */}
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={imgSrc}
          alt={alojamiento.nombre}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          onError={() => setImgSrc("/placeholder.jpg")}
        />
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Precio flotante */}
        <div className="absolute top-4 left-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-full px-3 py-2 shadow-lg border border-white/20">
            <span className="text-lg font-bold text-primary-700">€{alojamiento.precio}</span>
            <span className="text-xs text-gray-600 ml-1">/mes</span>
          </div>
        </div>

        {/* Badge destacado */}
        {alojamiento.esDestacado && (
          <div className="absolute top-4 right-4">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold px-3 py-2 rounded-full flex items-center gap-1 shadow-lg">
              <Star className="w-3 h-3" />
              DESTACADO
            </div>
          </div>
        )}

        {/* Plazas disponibles */}
        {alojamiento.plazasLibres > 0 && (
          <div className="absolute bottom-4 left-4">
            <div className="bg-green-500/90 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
              {alojamiento.plazasLibres} plazas libres
            </div>
          </div>
        )}
      </div>

      {/* Contenido con mejor spacing */}
      <div className="p-5">
        {/* Título */}
        <h3 className="text-lg font-semibold mb-2 line-clamp-1 group-hover:text-primary-700 transition-colors">
          {alojamiento.nombre}
        </h3>
        
        {/* Ubicación */}
        <div className="flex items-center gap-2 mb-3">
          <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
          <span className="text-sm text-gray-600 line-clamp-1">
            {alojamiento.direccion && `${alojamiento.direccion}, `}
            {alojamiento.ciudad}
            {alojamiento.provincia && `, ${alojamiento.provincia}`}
          </span>
        </div>

        {/* Características principales */}
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <span className="flex items-center gap-1">
            <Bed className="w-4 h-4 text-gray-400" />
            <span className="font-medium">{alojamiento.habitaciones}</span> hab
          </span>
          <span className="flex items-center gap-1">
            <Bath className="w-4 h-4 text-gray-400" />
            <span className="font-medium">{alojamiento.banos}</span> baños
          </span>
          <span className="text-sm">
            <span className="font-medium">{alojamiento.superficie}</span>m²
          </span>
        </div>

        {/* Servicios principales */}
        {mainServices.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {mainServices.map((service, index) => (
              <div key={index} className="flex items-center gap-1 text-xs text-gray-600 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                <service.icon className="w-3 h-3 text-gray-400" />
                <span>{service.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};

export default StudentCard;
