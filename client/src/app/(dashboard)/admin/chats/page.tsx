import { Metadata } from "next";
import AdminChats from "./AdminChats";

export const metadata: Metadata = {
  title: "Chats con Propietarios | UCH-CEU Admin",
  description: "Gestiona las conversaciones con propietarios",
};

export default function Page() {
  return <AdminChats />;
}