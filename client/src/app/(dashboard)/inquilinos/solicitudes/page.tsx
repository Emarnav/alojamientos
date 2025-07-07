"use client";

import ApplicationCard from "@/components/ApplicationCard";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import { useGetApplicationsQuery, useGetAuthUserQuery } from "@/state/api";
import { CircleCheckBig, Clock, Download, XCircle } from "lucide-react";
import React from "react";

const Applications = () => {
  const { data: authUser } = useGetAuthUserQuery();
  const {
    data: solicitudes,
    isLoading,
    isError,
  } = useGetApplicationsQuery({
    userId: authUser?.cognitoInfo?.userId,
    userType: "inquilino",
  });

  if (isLoading) return <Loading />;
  if (isError || !solicitudes) return <div>Error al obtener las solicitudes</div>;

  return (
    <div className="dashboard-container">
      <Header
        title="Solicitudes"
        subtitle="Consulta y gestiona tus solicitudes de alquiler"
      />
      <div className="w-full">
        {solicitudes?.map((solicitud) => (
          <ApplicationCard
            key={solicitud.id}
            solicitud={solicitud}
            userType="inquilino"
          >
            <div className="flex justify-between gap-5 w-full pb-4 px-4">
              {solicitud.estado === "Approved" ? (
                <div className="bg-green-100 p-4 text-green-700 grow flex items-center">
                  <CircleCheckBig className="w-5 h-5 mr-2" />
                  La propiedad está alquilada por ti hasta el{" "}
                  {new Date(solicitud.lease?.endDate).toLocaleDateString()}
                </div>
              ) : solicitud.estado === "Pending" ? (
                <div className="bg-yellow-100 p-4 text-yellow-700 grow flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Tu solicitud está pendiente de aprobación
                </div>
              ) : (
                <div className="bg-red-100 p-4 text-red-700 grow flex items-center">
                  <XCircle className="w-5 h-5 mr-2" />
                  Tu solicitud ha sido rechazada
                </div>
              )}

              <button
                className={`bg-white border border-gray-300 text-gray-700 py-2 px-4
                          rounded-md flex items-center justify-center hover:bg-primary-700 hover:text-primary-50`}
              >
                <Download className="w-5 h-5 mr-2" />
                Descargar contrato
              </button>
            </div>
          </ApplicationCard>
        ))}
      </div>
    </div>
  );
};

export default Applications;
