"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  MessageCircle, 
  Send, 
  Clock
} from "lucide-react";
import { 
  useGetAdminConversationQuery, 
  useInitAdminConversationMutation
} from "@/state/api";
import { Mensaje } from "@/types/prismaTypes";
import ChatWindow from "@/components/ChatWindow";
import { createPortal } from "react-dom";

interface AdminChatSectionProps {
  propietarioId: number;
}

const AdminChatSection: React.FC<AdminChatSectionProps> = ({ propietarioId }) => {
  const [showChat, setShowChat] = useState(false);
  const [showNewMessageForm, setShowNewMessageForm] = useState(false);
  const [messageText, setMessageText] = useState("");

  const { 
    data: adminConversation, 
    isLoading: loadingConversation,
    refetch: refetchConversation
  } = useGetAdminConversationQuery({ propietarioId });

  const [initAdminConversation, { isLoading: initiating }] = useInitAdminConversationMutation();

  const handleSendMessage = async () => {
    if (!messageText.trim()) return;

    try {
      await initAdminConversation({
        propietarioId,
        mensaje: messageText.trim()
      }).unwrap();
      
      setMessageText("");
      setShowNewMessageForm(false);
      refetchConversation();
    } catch (error) {
      console.error('Error enviando mensaje:', error);
    }
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const hasUnreadMessages = adminConversation && 
    adminConversation.mensajes?.some((mensaje: Mensaje) => 
      mensaje.emisorId !== propietarioId && 
      mensaje.createdAt > (adminConversation.propietarioVistoUltimo ? adminConversation.createdAt : '')
    );

  return (
    <>
      <Card className="border-2 border-blue-200 bg-blue-50 mb-6">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
              <Shield className="h-6 w-6 text-blue-600" />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-blue-800">
                  Chat con Administrador
                </h3>
                <div className="flex items-center space-x-2">
                  {hasUnreadMessages && (
                    <Badge variant="destructive" className="text-xs">
                      Nuevo
                    </Badge>
                  )}
                  {adminConversation && (
                    <Badge variant="outline" className="text-xs">
                      {adminConversation.mensajes?.length || 0} mensajes
                    </Badge>
                  )}
                </div>
              </div>
              
              <p className="text-sm text-blue-600 mb-4">
                Comunícate directamente con el equipo administrativo
              </p>

              {/* Último mensaje preview */}
              {adminConversation?.mensajes && adminConversation.mensajes.length > 0 && (
                <div className="mb-4 p-3 bg-white rounded-md border">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">
                      {adminConversation.mensajes[0].emisor?.tipo === "Admin" ? "Administrador" : "Tú"}:
                    </span>
                    {" "}
                    {adminConversation.mensajes[0].contenido.substring(0, 100)}
                    {adminConversation.mensajes[0].contenido.length > 100 && "..."}
                  </p>
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <Clock className="h-3 w-3 mr-1" />
                    {formatTime(adminConversation.mensajes[0].createdAt)}
                  </div>
                </div>
              )}

              {/* Botones de acción */}
              <div className="flex space-x-2">
                {adminConversation ? (
                  <Button
                    onClick={() => setShowChat(true)}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Ver conversación
                  </Button>
                ) : (
                  <Button
                    onClick={() => setShowNewMessageForm(!showNewMessageForm)}
                    variant="outline"
                    className="border-blue-300 text-blue-700 hover:bg-blue-50"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Enviar mensaje
                  </Button>
                )}
              </div>

              {/* Formulario para nuevo mensaje */}
              {showNewMessageForm && !adminConversation && (
                <div className="mt-4 p-4 bg-white rounded-md border">
                  <Textarea
                    placeholder="Escribe tu mensaje al administrador..."
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    className="min-h-[100px] border-blue-200 focus:border-blue-400 mb-3"
                    disabled={initiating}
                  />
                  <div className="flex justify-end space-x-2">
                    <Button
                      variant="outline"
                      onClick={() => {
                        setShowNewMessageForm(false);
                        setMessageText("");
                      }}
                      disabled={initiating}
                    >
                      Cancelar
                    </Button>
                    <Button
                      onClick={handleSendMessage}
                      disabled={!messageText.trim() || initiating}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      {initiating ? (
                        <>Enviando...</>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Enviar
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              )}

              {!adminConversation && !showNewMessageForm && !loadingConversation && (
                <div className="text-center py-2">
                  <p className="text-sm text-blue-600">
                    Aún no has iniciado una conversación con el administrador.
                  </p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Chat Window Portal */}
      {showChat && adminConversation && createPortal(
        <ChatWindow
          conversacionId={adminConversation.id}
          onClose={() => setShowChat(false)}
          nombreReceptor="Administrador"
          isAdmin={false}
        />,
        document.body
      )}
    </>
  );
};

export default AdminChatSection;