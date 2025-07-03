import { Bath, Bed, Heart, House, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { getAbsoluteImageUrl } from "@/lib/utils";


const Card = ({
  alojamiento,
  isFavorite,
  onFavoriteToggle,
  showFavoriteButton = true,
  alojamientoLink,
}: CardProps) => {
  const [imgSrc, setImgSrc] = useState(
    getAbsoluteImageUrl(alojamiento.photoUrls?.[0])
  );
  
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg w-full mb-5">
      <div className="relative">
        <div className="w-full h-48 relative">
          <Image
            src={imgSrc}
            alt={alojamiento.nombre}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImgSrc("/placeholder.jpg")}
          />
        </div>
        <div className="absolute bottom-4 left-4 flex gap-2">
          {alojamiento.isPetsAllowed && (
            <span className="bg-white/80 text-black text-xs font-semibold px-2 py-1 rounded-full">
              Animales permitidos
            </span>
          )}
          {alojamiento.isParkingIncluded && (
            <span className="bg-white/80 text-black text-xs font-semibold px-2 py-1 rounded-full">
              Parking incluido
            </span>
          )}
        </div>
        {showFavoriteButton && (
          <button
            className="absolute bottom-4 right-4 bg-white hover:bg-white/90 rounded-full p-2 cursor-pointer"
            onClick={onFavoriteToggle}
          >
            <Heart
              className={`w-5 h-5 ${
                isFavorite ? "text-red-500 fill-red-500" : "text-gray-600"
              }`}
            />
          </button>
        )}
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-1">
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
        <p className="text-gray-600 mb-2">
          {alojamiento?.location?.address}, {alojamiento?.location?.city}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center mb-2">
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            <span className="font-semibold">
              {alojamiento.averageRating.toFixed(1)}
            </span>
            <span className="text-gray-600 ml-1">
              ({alojamiento.numberOfReviews} Valoraciones)
            </span>
          </div>
          <p className="text-lg font-bold mb-3">
            ${alojamiento.precio.toFixed(0)}{" "}
            <span className="text-gray-600 text-base font-normal"> /mes</span>
          </p>
        </div>
        <hr />
        <div className="flex justify-between items-center gap-4 text-gray-600 mt-5">
          <span className="flex items-center">
            <Bed className="w-5 h-5 mr-2" />
            {alojamiento.habitaciones} Dormitorios
          </span>
          <span className="flex items-center">
            <Bath className="w-5 h-5 mr-2" />
            {alojamiento.banos} Baños
          </span>
          <span className="flex items-center">
            <House className="w-5 h-5 mr-2" />
            {alojamiento.superficie} m2
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
