"use client";

import ApplicationCard from "@/components/ApplicationCard";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useGetApplicationsQuery,
  useGetAuthUserQuery,
  useUpdateApplicationStatusMutation,
} from "@/state/api";
import { CircleCheckBig, Download, File, Hospital } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Applications = () => {
  const { data: authUser } = useGetAuthUserQuery();
  const [activeTab, setActiveTab] = useState("all");

  const {
    data: solicitudes,
    isLoading,
    isError,
  } = useGetApplicationsQuery(
    {
      userId: authUser?.cognitoInfo?.userId,
      userType: "propietario",
    },
    {
      skip: !authUser?.cognitoInfo?.userId,
    }
  );
  const [updateApplicationStatus] = useUpdateApplicationStatusMutation();

  const handleStatusChange = async (id: number, status: string) => {
    await updateApplicationStatus({ id, status });
  };

  if (isLoading) return <Loading />;
  if (isError || !solicitudes) return <div>Error al cargar las solicitudes</div>;

  const filteredApplications = solicitudes?.filter((solicitud) => {
    if (activeTab === "all") return true;
    return solicitud.status.toLowerCase() === activeTab;
  });

  return (
    <div className="dashboard-container">
      <Header
        title="Solicitudes"
        subtitle="Gestiona las solicitudes de tus alojamientos"
      />
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full my-5"
      >
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">Todas</TabsTrigger>
          <TabsTrigger value="pendiente">Pendiente</TabsTrigger>
          <TabsTrigger value="aprobado">Aprobado</TabsTrigger>
          <TabsTrigger value="denegado">Denegado</TabsTrigger>
        </TabsList>
        {["all", "pendiente", "aprobado", "denegado"].map((tab) => (
          <TabsContent key={tab} value={tab} className="mt-5 w-full">
            {filteredApplications
              .filter(
                (solicitud) =>
                  tab === "all" || solicitud.status.toLowerCase() === tab
              )
              .map((solicitud) => (
                <ApplicationCard
                  key={solicitud.id}
                  solicitud={solicitud}
                  userType="propietario"
                >
                  <div className="flex justify-between gap-5 w-full pb-4 px-4">
                    {/* Colored Section Status */}
                    <div
                      className={`p-4 text-green-700 grow ${
                        solicitud.status === "Aprobado"
                          ? "bg-green-100"
                          : solicitud.status === "Denegado"
                          ? "bg-red-100"
                          : "bg-yellow-100"
                      }`}
                    >
                      <div className="flex flex-wrap items-center">
                        <File className="w-5 h-5 mr-2 flex-shrink-0" />
                        <span className="mr-2">
                          Solicitud enviada{" "}
                          {new Date(
                            solicitud.applicationDate
                          ).toLocaleDateString()}
                          .
                        </span>
                        <CircleCheckBig className="w-5 h-5 mr-2 flex-shrink-0" />
                        <span
                          className={`font-semibold ${
                            solicitud.status === "Aprobada"
                              ? "text-green-800"
                              : solicitud.status === "Denegada"
                              ? "text-red-800"
                              : "text-yellow-800"
                          }`}
                        >
                          {solicitud.status === "Aprobada" &&
                            "This application has been approved."}
                          {solicitud.status === "Denegada" &&
                            "This application has been denied."}
                          {solicitud.status === "Pendiente" &&
                            "This application is pending review."}
                        </span>
                      </div>
                    </div>

                    {/* Right Buttons */}
                    <div className="flex gap-2">
                      <Link
                        href={`/propietarios/alojamientos/${solicitud.alojamiento.id}`}
                        className={`bg-white border border-gray-300 text-gray-700 py-2 px-4 
                          rounded-md flex items-center justify-center hover:bg-primary-700 hover:text-primary-50`}
                        scroll={false}
                      >
                        <Hospital className="w-5 h-5 mr-2" />
                        Detalles del alojamiento
                      </Link>
                      {solicitud.status === "Aprobado" && (
                        <button
                          className={`bg-white border border-gray-300 text-gray-700 py-2 px-4
                          rounded-md flex items-center justify-center hover:bg-primary-700 hover:text-primary-50`}
                        >
                          <Download className="w-5 h-5 mr-2" />
                          Descargar acuerdo
                        </button>
                      )}
                      {solicitud.status === "Pendiente" && (
                        <>
                          <button
                            className="px-4 py-2 text-sm text-white bg-green-600 rounded hover:bg-green-500"
                            onClick={() =>
                              handleStatusChange(solicitud.id, "Approved")
                            }
                          >
                            Approve
                          </button>
                          <button
                            className="px-4 py-2 text-sm text-white bg-red-600 rounded hover:bg-red-500"
                            onClick={() =>
                              handleStatusChange(solicitud.id, "Denied")
                            }
                          >
                            Deny
                          </button>
                        </>
                      )}
                      {solicitud.status === "Denied" && (
                        <button
                          className={`bg-gray-800 text-white py-2 px-4 rounded-md flex items-center
                          justify-center hover:bg-secondary-500 hover:text-primary-50`}
                        >
                          Contact User
                        </button>
                      )}
                    </div>
                  </div>
                </ApplicationCard>
              ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Applications;