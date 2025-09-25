"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  MessageCircle, 
  Clock, 
  User,
  Mail
} from "lucide-react";
import ChatWindow from "@/components/ChatWindow";
import { createPortal } from "react-dom";
import { Conversacion } from "@/types/prismaTypes";

interface AdminChatCardProps {
  conversacion: Conversacion & {
    ultimoMensaje?: any;
    tieneNuevosmensajes?: boolean;
  };
}

const AdminChatCard: React.FC<AdminChatCardProps> = ({ conversacion }) => {
  const [showChat, setShowChat] = useState(false);

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <>
      <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 border-blue-100">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            {/* Avatar del propietario */}
            <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
              <User className="h-5 w-5 text-blue-600" />
            </div>
            
            {/* Información del propietario */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-gray-900 truncate">
                  {conversacion.propietario?.nombre || 'Propietario'}
                </h3>
                {conversacion.tieneNuevosmensajes && (
                  <Badge variant="destructive" className="text-xs">
                    Nuevo
                  </Badge>
                )}
              </div>
              
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <Mail className="h-4 w-4 mr-1" />
                {conversacion.propietario?.email}
              </div>

              {/* Último mensaje preview */}
              {conversacion.ultimoMensaje && (
                <div className="mb-3">
                  <p className="text-sm text-gray-700 line-clamp-2">
                    <span className="font-medium">
                      {conversacion.ultimoMensaje.emisor?.tipo === "Admin" ? "Tú" : conversacion.propietario?.nombre}:
                    </span>
                    {" "}
                    {conversacion.ultimoMensaje.contenido}
                  </p>
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <Clock className="h-3 w-3 mr-1" />
                    {formatTime(conversacion.ultimoMensaje.createdAt)}
                  </div>
                </div>
              )}

              {/* Botón de chat */}
              <Button
                onClick={() => setShowChat(true)}
                size="sm"
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Ver conversación
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Chat Window Portal */}
      {showChat && createPortal(
        <ChatWindow
          conversacionId={conversacion.id}
          onClose={() => setShowChat(false)}
          nombreReceptor={conversacion.propietario?.nombre || 'Propietario'}
          isAdmin={true}
        />,
        document.body
      )}
    </>
  );
};

export default AdminChatCard;