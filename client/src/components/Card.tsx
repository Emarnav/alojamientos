import { Bath, Bed, Pencil, Eye, Trash2, RefreshCcw, MapPin, Wifi, WashingMachine, Snowflake, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { getAbsoluteImageUrls } from "@/lib/utils";
import { useDeleteApprovedPropertyMutation, useRepublishPropertyMutation, useGetAuthUserQuery } from "@/state/api";
import { useAppDispatch, useAppSelector } from "@/state/redux";
import { toast } from "sonner";
import { Button } from "./ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";

interface CardProps {
  alojamiento: any;
  alojamientoLink?: string;
  context?: string;
}

const Card = ({
  alojamiento,
  alojamientoLink,
  context,
}: CardProps) => {
  const [imgSrc, setImgSrc] = useState(
    getAbsoluteImageUrls(alojamiento.photoUrls)[0]
  );
  const { data: authUser } = useGetAuthUserQuery();
  const [deleteProperty] = useDeleteApprovedPropertyMutation();
  const [republishProperty, { isLoading: isRepublishing }] = useRepublishPropertyMutation();
  const dispatch = useAppDispatch();
  const selectedPropertyFromMap = useAppSelector((state) => state.global.selectedPropertyFromMap);
  
  const isSelected = selectedPropertyFromMap === alojamiento.id;

  const handleDeleteProperty = async () => {
    try {
      await deleteProperty(alojamiento.id).unwrap();
      toast.success("Alojamiento eliminado correctamente");
    } catch (error) {
      toast.error("Error al eliminar el alojamiento");
      console.error("Error deleting property:", error);
    }
  };

  const handleRepublishProperty = async () => {
    if (!authUser?.userInfo?.id) {
      toast.error("Error: Usuario no autenticado");
      return;
    }

    try {
      await republishProperty({
        id: alojamiento.id,
        userId: authUser.userInfo.id,
      }).unwrap();
    } catch (error) {
      console.error("Error republishing property:", error);
    }
  };

  const isAdminApprovedContext = context === "admin" && alojamiento.estado === "Aprobado";
  const isSuspended = alojamiento.estado === "Suspendido";
  const isUserSuspended = authUser?.userInfo?.isSuspended;
  const isSearchContext = context === "busqueda";

  // Función para obtener servicios principales
  const getMainServices = () => {
    const services = [];
    if (alojamiento.hayInternet) services.push({ icon: Wifi, label: "WiFi" });
    if (alojamiento.hayLavadora) services.push({ icon: WashingMachine, label: "Lavadora" });
    if (alojamiento.hayAireAcondicionado) services.push({ icon: Snowflake, label: "A/C" });
    return services.slice(0, 3); // Solo mostramos máximo 3
  };

  const mainServices = getMainServices();

  const cardJSX = (
    <div className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 w-full mb-4 border border-gray-100 hover:-translate-y-1 ${
      isSuspended 
        ? 'opacity-70 ring-2 ring-orange-200' 
        : isSelected 
          ? 'ring-2 ring-blue-500 shadow-xl scale-[1.02]' 
          : ''
    }`}>
      <div className="relative">
        <div className="w-full h-40 relative overflow-hidden">
          <Image
            src={imgSrc}
            alt={alojamiento.nombre}
            fill
            className={`object-cover group-hover:scale-110 transition-transform duration-500 ${isSuspended ? 'grayscale' : ''}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImgSrc("/placeholder.jpg")}
          />
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        {/* Precio flotante */}
        <div className="absolute top-3 left-3">
          <div className="bg-white/95 backdrop-blur-sm rounded-full px-3 py-2 shadow-lg border border-white/20">
            <span className="text-lg font-bold text-primary-700">€{alojamiento.precio}</span>
            <span className="text-xs text-gray-600 ml-1">/mes</span>
          </div>
        </div>

        {/* Badges combinados en esquina superior derecha */}
        <div className="absolute top-3 right-3 flex flex-col gap-1">
          {alojamiento.esDestacado && (
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold px-3 py-2 rounded-full flex items-center gap-1 shadow-lg">
              <Star className="w-3 h-3" />
              DESTACADO
            </div>
          )}
          {!isSearchContext && (
            <>
              {alojamiento.estado == "Pendiente" && (
                <span className="bg-yellow-500 text-black text-xs font-semibold px-2 py-1 rounded-full">
                  Pendiente
                </span>
              )}
              {alojamiento.estado == "Aprobado" && (
                <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  Aprobado
                </span>
              )}
              {alojamiento.estado == "Rechazado" && (
                <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  Rechazado
                </span>
              )}
              {alojamiento.estado == "Suspendido" && (
                <span className="bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  Suspendido
                </span>
              )}
            </>
          )}
        </div>
      </div>
      
      {/* Contenido con mejor spacing */}
      <div className="p-4">
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
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
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
          <div className="flex flex-wrap gap-2 mb-3">
            {mainServices.map((service, index) => (
              <div key={index} className="flex items-center gap-1 text-xs text-gray-600 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                <service.icon className="w-3 h-3 text-gray-400" />
                <span>{service.label}</span>
              </div>
            ))}
            {alojamiento.plazasLibres > 0 && (
              <div className="bg-green-50 text-green-700 text-xs font-medium px-3 py-1 rounded-full border border-green-200">
                {alojamiento.plazasLibres} plazas libres
              </div>
            )}
          </div>
        )}

        {/* Acciones compactas - Solo mostrar en contextos no públicos */}
        {!isSearchContext && (
          <div className="flex justify-between items-center pt-2 border-t border-gray-100">
            {isSuspended ? (
              <span className="text-xs text-gray-400 cursor-not-allowed">
                Suspendido - No disponible
              </span>
            ) : (
              <Link
                href={`/alojamientos/${alojamiento.slug}`}
                target="_blank"
                className="text-xs text-blue-600 hover:underline flex items-center gap-1 font-medium"
              >
                <Eye className="w-3 h-3" />
                Ver detalles
              </Link>
            )}

            <div className="flex items-center gap-2">
              {isAdminApprovedContext ? (
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <button
                      className="text-red-500 hover:text-red-600 p-1"
                      title="Eliminar alojamiento"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Esta acción no se puede deshacer. Se eliminará permanentemente 
                        el alojamiento "{alojamiento.nombre}" y todos sus datos asociados.
                        El propietario será notificado de esta eliminación.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancelar</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={handleDeleteProperty}
                        className="bg-red-600 hover:bg-red-700"
                      >
                        Eliminar alojamiento
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              ) : (
                isSuspended ? (
                  <>
                    <button
                      className="text-gray-300 cursor-not-allowed p-1"
                      title="No puedes editar alojamientos suspendidos"
                      disabled
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleRepublishProperty}
                      className={`${isUserSuspended ? 'text-gray-400 cursor-not-allowed' : 'text-orange-500 hover:text-orange-700'} disabled:opacity-50 p-1`}
                      title={isUserSuspended ? "Cuenta suspendida" : "Republicar"}
                      disabled={isRepublishing || isUserSuspended}
                    >
                      <RefreshCcw className={`w-4 h-4 ${isRepublishing ? 'animate-spin' : ''}`} />
                    </button>
                  </>
                ) : (
                  <Link
                    href={alojamientoLink ?? "#"}
                    className="text-blue-500 hover:text-blue-600 p-1"
                    title="Editar alojamiento"
                  >
                    <Pencil className="w-4 h-4" />
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // Si es contexto de búsqueda, hacer toda la tarjeta clickable
  if (isSearchContext) {
    return (
      <Link
        href={`/alojamientos/${alojamiento.slug}`}
        className="block cursor-pointer"
      >
        {cardJSX}
      </Link>
    );
  }

  // Para otros contextos, devolver la tarjeta normal
  return cardJSX;
};

export default Card;