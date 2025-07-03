"use client";

import { useGetAuthUserQuery, useGetPropertyQuery } from "@/state/api";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import ImagePreviews from "./ImagePreviews";
import PropertyOverview from "./PropertyOverview";
import PropertyDetails from "./PropertyDetails";
import PropertyLocation from "./PropertyLocation";
import ContactWidget from "./ContactWidget";
import ApplicationModal from "./ApplicationModal";
import ImageCarousel from "./ImageCarousel";


const SingleListing = () => {
  const { id } = useParams();
  const alojamientoId = Number(id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: authUser } = useGetAuthUserQuery();
  const {
    data: alojamiento,
    isError,
    isLoading,
  } = useGetPropertyQuery(alojamientoId);
console.log(alojamiento);
  if (isLoading) return <p>Cargando...</p>;
  if (isError || !alojamiento) return <p>Alojamiento no encontrado.</p>;

  return (
    <div>
      <ImagePreviews
        images={["/singlelisting-2.jpg", "/singlelisting-3.jpg"]}
      />
      <div className="flex flex-col md:flex-row justify-center gap-10 mx-10 md:w-2/3 md:mx-auto mt-16 mb-8">
        <div className="order-2 md:order-1">
          <PropertyOverview alojamiento={alojamiento} />
          <PropertyDetails alojamiento={alojamiento} />
          <PropertyLocation alojamiento={alojamiento} />
          <ImageCarousel images={alojamiento.photoUrls} />
        </div>

        <div className="order-1 md:order-2">
          <ContactWidget alojamiento={alojamiento} onOpenModal={() => setIsModalOpen(true)} />
        </div>
      </div>
      {authUser && (
        <ApplicationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          alojamiento={alojamiento}
        />
      )}
    </div>
  );
};

export default SingleListing;
