"use client";

import React, { useEffect, useState } from "react";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Avatar,
} from "@chatscope/chat-ui-kit-react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

import {
  useSendMessageMutation,
  useGetChatMessagesQuery,
  useMarcarComoLeidoMutation,
  useGetAuthUserQuery,
} from "@/state/api";

interface ChatWindowProps {
  conversacionId: number;
  remitenteId?: number;
  nombreReceptor: string;
  onClose?: () => void;
  isAdmin?: boolean;
}

const ChatWindow = ({
  conversacionId,
  remitenteId,
  nombreReceptor,
  onClose,
  isAdmin = false,
}: ChatWindowProps) => {
  const { data: authUser } = useGetAuthUserQuery();
  const currentUserId = remitenteId || authUser?.userInfo?.id;
  const [message, setMessage] = useState("");
  const [sendMessage] = useSendMessageMutation();
  const [marcarComoLeido] = useMarcarComoLeidoMutation();
  const { data: mensajes, refetch } = useGetChatMessagesQuery(conversacionId);

  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 5000);

    if (currentUserId) {
      marcarComoLeido({ conversacionId, usuarioId: currentUserId });
    }

    return () => clearInterval(interval);
  }, [refetch, conversacionId, currentUserId, marcarComoLeido]);

  const handleSend = async () => {
    if (!message.trim() || !currentUserId) return;

    try {
      await sendMessage({
        contenido: message,
        emisorId: currentUserId,
        conversacionId,
      }).unwrap();

      setMessage("");
      await refetch();
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
    }
  };

  const ChatContent = () => (
    <div className="w-full h-[500px] bg-white rounded-xl shadow-xl overflow-hidden flex flex-col">
      {/* Encabezado superior */}
      <div className="px-4 py-3 bg-primary-700 text-white font-semibold text-sm flex justify-between items-center">
        <span>Chateando con {nombreReceptor}</span>
        {onClose && (
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 text-lg font-bold ml-4"
          >
            ×
          </button>
        )}
      </div>

      {/* Chat UI que ocupa el resto del espacio */}
      <div className="flex-1 min-h-0">
        <MainContainer>
          <ChatContainer>
            <MessageList>
              {mensajes?.map((msg: any) => {
                const isMe = msg.emisorId === currentUserId;
                const hora = new Date(msg.createdAt).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                });
                
                // Mostrar nombre del emisor apropiado
                const senderName = isMe 
                  ? "Tú" 
                  : isAdmin 
                    ? (msg.emisor?.tipo === "Admin" ? "Administrador" : nombreReceptor)
                    : nombreReceptor;

                return (
                  <Message
                    key={msg.id}
                    model={{
                      message: msg.contenido,
                      direction: isMe ? "outgoing" : "incoming",
                      position: "single",
                      sentTime: hora,
                      sender: senderName,
                    }}
                  >
                    <Avatar size="sm">
                      <div
                        className={`rounded-full px-2 h-7 flex items-center justify-center text-xs font-semibold bg-gray-200${
                          isMe ? " bg-gray-300" : ""
                        }`}
                      >
                        {senderName.charAt(0).toUpperCase()}
                      </div>
                    </Avatar>
                  </Message>
                );
              })}
            </MessageList>

            <MessageInput
              placeholder="Escribe un mensaje..."
              value={message}
              onChange={(val) => setMessage(val)}
              onSend={handleSend}
              attachButton={false}
            />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );

  // Si tiene onClose, renderizar como modal
  if (onClose) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="max-w-xl w-full mx-4">
          <ChatContent />
        </div>
      </div>
    );
  }

  // Si no tiene onClose, renderizar como componente normal
  return (
    <div className="my-6 mx-auto w-full max-w-xl">
      <ChatContent />
    </div>
  );
};

export default ChatWindow;