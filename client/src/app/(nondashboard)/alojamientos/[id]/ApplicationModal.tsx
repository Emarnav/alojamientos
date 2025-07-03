import { CustomFormField } from "@/components/FormField";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { ApplicationFormData, applicationSchema } from "@/lib/schemas";
import { useCreateApplicationMutation, useGetAuthUserQuery } from "@/state/api";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

const ApplicationModal = ({
  isOpen,
  onClose,
  alojamiento,
}: ApplicationModalProps) => {
  const [createApplication] = useCreateApplicationMutation();
  const { data: authUser } = useGetAuthUserQuery();

  const form = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      nombre: "",
      email: "",
      telefono: "",
      mensaje: "",
    },
  });

  const onSubmit = async (data: ApplicationFormData) => {
    if (!authUser || authUser.userRole !== "inquilino") {
      console.error(
        "Debes estar autenticado como inquilino para enviar una solicitud"
      );
      return;
    }

    await createApplication({
      ...data,
      applicationDate: new Date().toISOString(),
      estado: "Pendiente",
      alojamientoId: alojamiento.id,
      tenantCognitoId: authUser.cognitoInfo.userId,
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white">
        <DialogHeader className="mb-4">
          <DialogTitle>Envía un mensaje al propietario</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <CustomFormField
              name="nombre"
              label="Nombre"
              type="text"
              placeholder="Introduce tu nombre completo"
            />
            <CustomFormField
              name="email"
              label="Email"
              type="email"
              placeholder="Introduce tu dirección de correo electrónico"
            />
            <CustomFormField
              name="telefono"
              label="Teléfono"
              type="text"
              placeholder="Introduce tu número de teléfono"
            />
            <CustomFormField
              name="mensaje"
              label="Mensaje"
              type="textarea"
              placeholder="Introduce un mensaje para el propietario"
            />
            <Button type="submit" className="bg-primary-700 text-white w-full">
              Enviar solicitud
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationModal;