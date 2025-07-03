import { Button } from "@/components/ui/button";
import { useGetAuthUserQuery } from "@/state/api";
import { Phone } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const ContactWidget = ({ onOpenModal, alojamiento }: ContactWidgetProps) => {
  const { data: authUser } = useGetAuthUserQuery();
  const router = useRouter();
  const propietario =alojamiento?.propietario;
  const handleButtonClick = () => {
    if (authUser) {
      onOpenModal();
    } else {
      router.push("/inicio-sesion");
    }
  };

  return (
    <div className="bg-white border border-primary-200 rounded-2xl p-7 h-fit min-w-[300px]">
      {/* Contact Property */}
      <div className="flex items-center gap-5 mb-4 border border-primary-200 p-4 rounded-xl">
        <div className="flex items-center p-4 bg-primary-900 rounded-full">
          <Phone className="text-primary-50" size={15} />
        </div>
        <div>
          <p>Contactar al propietario</p>
          <div className="text-lg font-bold text-primary-800">
            {propietario.nombre}
          </div>
        </div>
      </div>
      <Button
        className="w-full bg-primary-700 text-white hover:bg-primary-600"
        onClick={handleButtonClick}
      >
        {authUser ? "Enviar solicitud" : "Regístrate para solicitar el alojamiento"}
      </Button>

      <hr className="my-4" />
      <div className="text-sm">

      {propietario.telefono && (
        <div className="text-primary-600 mb-1">
          Teléfono:{" "}
          <a href={`tel:${propietario.telefono}`} >
            {propietario.telefono}
          </a>
        </div>
      )}
      {propietario.email && (
        <div className="text-primary-600">
          Correo electrónico:{" "}
          <a href={`mailto:${propietario.email}`}>
            {propietario.email}
          </a>
        </div>
      )}
      </div>
    </div>
  );
};

export default ContactWidget;
