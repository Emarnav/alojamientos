"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setFilters } from "@/state";

const HeroSection = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleLocationSearch = () => {
    const trimmedQuery = searchQuery.trim();
    if (!trimmedQuery) return;

    dispatch(
      setFilters({
        location: trimmedQuery,
      })
    );
    const params = new URLSearchParams({
      location: trimmedQuery,
    });
    router.push(`/busqueda?${params.toString()}`);
  };

  return (
    <div className="relative h-screen">
      <Image
        src="/landing-splash.jpg"
        alt="Plataforma de alojamientos UCHCEU"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Comience su viaje para encontrar el lugar perfecto al que llamar hogar
          </h1>
          <p className="text-lg sm:text-xl text-white mb-8 opacity-90">
            Explore nuestra amplia gama de propiedades en alquiler adaptadas a su estilo de vida y necesidades.
          </p>

          <div className="flex flex-col items-center max-w-2xl mx-auto">
            <div className="flex w-full max-w-lg">
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Búsqueda por ciudad, barrio o dirección"
                className="flex-1 rounded-none rounded-l-xl border-none bg-white h-12 text-base"
                onKeyPress={(e) => e.key === 'Enter' && handleLocationSearch()}
              />
              <Button
                onClick={handleLocationSearch}
                className="btn-uchceu rounded-none rounded-r-xl h-12 shadow-none border-l-0 px-6"
              >
                Buscar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
