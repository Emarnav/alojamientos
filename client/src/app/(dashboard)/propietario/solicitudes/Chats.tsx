"use client";

import Header from "@/components/Header";
import Loading from "@/components/Loading";
import {
  useGetAuthUserQuery,
  useGetUserConversationsQuery,
} from "@/state/api";
import StudentCard from "@/components/StudentCard";
import AdminChatSection from "@/components/AdminChatSection";

const Chats = () => {
  const { data: authUser } = useGetAuthUserQuery();
  const userId = authUser?.userInfo?.id;

  const {
    data: conversaciones,
    isLoading,
    isError,
  } = useGetUserConversationsQuery({ userId }, { skip: !userId });

  if (isLoading) return <Loading />;
  if (isError || !conversaciones) return <div>Error al obtener las conversaciones</div>;

  // Filtrar conversaciones normales (no admin)
  const conversacionesNormales = conversaciones?.filter(conv => !conv.esConversacionAdmin) || [];

  return (
    <div className="dashboard-container">
      <Header
        title="Chats"
        subtitle="Gestiona tus conversaciones con estudiantes y administradores"
      />
      
      {/* Sección de chat con administrador */}
      <AdminChatSection propietarioId={userId!} />
      
      {/* Sección de chats con estudiantes */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Conversaciones con estudiantes
        </h3>
        {conversacionesNormales.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {conversacionesNormales.map((conv) => (
              <StudentCard
                key={conv.id}
                alojamiento={conv.alojamiento}
                conversacionId={conv.id}
                remitenteId={authUser?.userInfo?.id}
                nombreReceptor={
                  conv.propietario?.nombre || conv.estudiante?.nombre || "Usuario"
                }
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">No tienes conversaciones con estudiantes aún</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chats;
