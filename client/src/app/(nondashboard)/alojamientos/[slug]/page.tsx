"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { useGetPropertyBySlugQuery, useGetAuthUserQuery } from "@/state/api";
import { 
  Bath, 
  Bed, 
  Wifi, 
  WashingMachine, 
  Snowflake, 
  Star,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ArrowLeft,
  Check,
  X
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getAbsoluteImageUrls } from "@/lib/utils";

const PropertyDetails = () => {
  const params = useParams();
  const slug = params.slug as string;
  const { data: property, isLoading, error } = useGetPropertyBySlugQuery(slug);
  const { data: authUser } = useGetAuthUserQuery();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Alojamiento no encontrado</h1>
          <Link href="/busqueda">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a la búsqueda
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const images = getAbsoluteImageUrls(property.photoUrls);
  const services = [
    { key: 'hayInternet', label: 'WiFi', icon: Wifi, available: property.hayInternet },
    { key: 'hayLavadora', label: 'Lavadora', icon: WashingMachine, available: property.hayLavadora },
    { key: 'hayAireAcondicionado', label: 'Aire Acondicionado', icon: Snowflake, available: property.hayAireAcondicionado },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back button */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link href="/busqueda">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a la búsqueda
            </Button>
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-96 w-full">
                <Image
                  src={images[currentImageIndex] || "/placeholder.jpg"}
                  alt={property.nombre}
                  fill
                  className="object-cover"
                />
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                    >
                      <ArrowLeft className="w-5 h-5 transform rotate-180" />
                    </button>
                  </>
                )}
                
                {/* Image indicators */}
                {images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex ? "bg-white" : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Property badges */}
              <div className="absolute top-4 left-4 space-y-2">
                <div className="bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/20">
                  <span className="text-2xl font-bold text-primary-700">€{property.precio}</span>
                  <span className="text-sm text-gray-600 ml-1">/mes</span>
                </div>
              </div>

              <div className="absolute top-4 right-4 space-y-2">
                {property.esDestacado && (
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-sm font-bold px-3 py-2 rounded-full flex items-center gap-1 shadow-lg">
                    <Star className="w-4 h-4" />
                    DESTACADO
                  </div>
                )}
                {property.plazasLibres > 0 && (
                  <div className="bg-green-500/90 backdrop-blur-sm text-white text-sm font-medium px-3 py-2 rounded-full">
                    {property.plazasLibres} plazas libres
                  </div>
                )}
              </div>
            </div>

            {/* Property Info */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{property.nombre}</h1>
              
              {/* Location */}
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600">
                  {property.direccion && `${property.direccion}, `}
                  {property.ciudad}
                  {property.provincia && `, ${property.provincia}`}
                </span>
              </div>

              {/* Basic Info */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <Bed className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                  <span className="text-lg font-semibold text-gray-800">{property.habitaciones}</span>
                  <p className="text-sm text-gray-600">Habitaciones</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <Bath className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                  <span className="text-lg font-semibold text-gray-800">{property.banos}</span>
                  <p className="text-sm text-gray-600">Baños</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <span className="text-lg font-semibold text-gray-800">{property.superficie}m²</span>
                  <p className="text-sm text-gray-600">Superficie</p>
                </div>
              </div>

              {/* Description */}
              {property.descripcion && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Descripción</h3>
                  <p className="text-gray-600 leading-relaxed">{property.descripcion}</p>
                </div>
              )}

              {/* Services */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Servicios</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((service) => (
                    <div 
                      key={service.key}
                      className={`flex items-center gap-3 p-3 rounded-lg border ${
                        service.available 
                          ? 'bg-green-50 border-green-200 text-green-700' 
                          : 'bg-gray-50 border-gray-200 text-gray-400'
                      }`}
                    >
                      <service.icon className="w-5 h-5" />
                      <span className="font-medium">{service.label}</span>
                      {service.available ? (
                        <Check className="w-4 h-4 ml-auto" />
                      ) : (
                        <X className="w-4 h-4 ml-auto" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Contactar con el propietario</h3>
              
              {property.propietario && (
                <div className="mb-6">
                  <p className="text-gray-600 mb-2">Propietario: {property.propietario.nombre || 'No disponible'}</p>
                  {property.propietario.email && (
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">{property.propietario.email}</span>
                    </div>
                  )}
                  {property.propietario.telefono && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">{property.propietario.telefono}</span>
                    </div>
                  )}
                </div>
              )}

              {authUser?.userInfo ? (
                <Button className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Enviar mensaje
                </Button>
              ) : (
                <div className="space-y-3">
                  <p className="text-sm text-gray-600 text-center">
                    Inicia sesión para contactar con el propietario
                  </p>
                  <Link href="/login">
                    <Button className="w-full">Iniciar sesión</Button>
                  </Link>
                </div>
              )}

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center">
                  Al contactar, aceptas nuestros términos de uso y política de privacidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;