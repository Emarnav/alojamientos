"use client";

import Header from "@/components/Header";
import Loading from "@/components/Loading";
import { useGetAdminConversationsQuery } from "@/state/api";
import AdminChatCard from "@/components/AdminChatCard";

const AdminChats = () => {
  const {
    data: conversaciones,
    isLoading,
    isError,
  } = useGetAdminConversationsQuery();

  if (isLoading) return <Loading />;
  if (isError) return <div>Error al obtener las conversaciones</div>;

  return (
    <div className="dashboard-container">
      <Header
        title="Chats con Propietarios"
        subtitle="Gestiona las conversaciones con propietarios"
      />
      
      {conversaciones && conversaciones.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {conversaciones.map((conversacion) => (
            <AdminChatCard
              key={conversacion.id}
              conversacion={conversacion}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="bg-gray-50 rounded-lg p-8 max-w-md mx-auto">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No hay conversaciones activas
            </h3>
            <p className="text-gray-600">
              Los propietarios pueden iniciar conversaciones contigo desde su panel de control.
              Una vez que te envíen un mensaje, aparecerán aquí.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminChats;