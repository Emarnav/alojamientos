"use client";

import { CustomFormField } from "@/components/FormField";
import Header from "@/components/Header";
import { Form } from "@/components/ui/form";
import { PropertyFormData, propertySchema } from "@/lib/schemas";
import {
  useUpdatePropertyMutation,
  useGetPropertyQuery,
  useGetAuthUserQuery,
} from "@/state/api";
import { PropertyTypeEnum } from "@/lib/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";

const EditProperty = () => {
  const { id } = useParams(); 
  const alojamientoId = Number(id);

  const { data: alojamiento } = useGetPropertyQuery(alojamientoId);
  const { data: authUser } = useGetAuthUserQuery();
  const [updateProperty] =   useUpdatePropertyMutation();

  const form = useForm<PropertyFormData>({
    resolver: zodResolver(propertySchema),
    defaultValues: {
      nombre: "",
      descripcion: "",
      direccion: "",
      localidad: "",
      provincia: "",
      codigoPostal: "",
      precio: 0,
      plazasLibres: 0,
      habitaciones: 1,
      banos: 1,
      superficie: 100,
      hayTelevision: false,
      hayTelefono: false,
      hayInternet: false,
      hayTerraza: false,
      hayAscensor: false,
      hayGaraje: false,
      hayLavavajillas: false,
      hayHorno: false,
      hayMicroondas: false,
      hayNevera: false,
      hayLavadora: false,
      haySecadora: false,
      hayPortero: false,
      hayMuebles: false,
      hayCalefaccion: false,
      hayAireAcondicionado: false,
      hayGas: false,
      hayPiscina: false,
      hayZonaComunitaria: false,
      hayGimnasio: false,
      aguaIncluido: false,
      gasIncluido: false,
      internetIncluido: false,
      electricidadIncluido: false,
      photoUrls: [],
    },
  });

  useEffect(() => {
    if (alojamiento) {
      form.reset(alojamiento);
    }
  }, [alojamiento, form]);

  const onSubmit = async (data: PropertyFormData) => {
    try {  
      if (!authUser?.cognitoInfo?.userId) {
        throw new Error("No se ha encontrado el ID del propietario");
      }
  
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (key === "photoUrls") {
          const files = value as File[];
          files.forEach((file: File) => {
            formData.append("photos", file);
          });
        } else if (Array.isArray(value)) {
          formData.append(key, JSON.stringify(value));
        } else {
          formData.append(key, String(value));
        }
      });
  
      formData.append("managerCognitoId", authUser.cognitoInfo.userId);
  
      if (alojamientoId) {
        // Actualizar alojamiento existente
        await updateProperty({ id: alojamientoId, formData });
      }
    } catch (error) {
      console.error("Error en onSubmit:", error);
    }
  };
  

  return (
    <div className="dashboard-container">
      <Header
        title="Añadir nuevo alojamiento"
        subtitle="Crea una nueva oferta de alojamiento con información detallada y fotos"
      />
      <div className="bg-white rounded-xl p-6">
        <Form {...form}>
          <form
            onSubmit={(event) => {
              form.handleSubmit(onSubmit)(event);
            }}
            className="p-4 space-y-10"
          >
            {/* Información básica */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Información básica</h2>
              <div className="space-y-4">
                <CustomFormField name="nombre" label="Titulo de la oferta" />
                <CustomFormField
                  name="descripcion"
                  label="Descripción"
                  type="textarea"
                />
                <div className="flex justify-between gap-4 ">
                  <CustomFormField name="localidad" label="Localidad" className="w-full" />
                  <CustomFormField
                    name="provincia"
                    label="Provincia"
                    className="w-full"
                  />
                  <CustomFormField
                    name="codigoPostal"
                    label="Código Postal"
                    className="w-full"
                  />
                </div>
                <CustomFormField name="direccion" label="Dirección" />
                <div className="flex justify-between gap-4 ">
                  <CustomFormField
                    name="tipoAlojamiento"
                    label="Tipo de alojamiento"
                    type="select"
                    className="w-full"
                    options={Object.keys(PropertyTypeEnum).map((type) => ({
                      value: type,
                      label: type,
                    }))}
                  />
                  <CustomFormField
                    name="precio"
                    label="Precio por mes"
                    type="number"
                    className="w-full"
                  />
                  <CustomFormField
                    name="plazasLibres"
                    label="Nº de de plazas libres"
                    type="number"
                    className="w-full"
                  />
                </div>
                
              </div>

            </div>

            
            
            <hr className="my-6 border-gray-200" />

            

            {/* Amenities and Highlights */}
            <div>
              <h2 className="text-lg font-semibold mb-4">
              Detalles del alojamiento
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between gap-4 ">
                  
                  <CustomFormField
                    name="habitaciones"
                    label="Nº de habitaciones"
                    type="number"
                    className="w-full"
                  />
                  <CustomFormField
                    name="banos"
                    label="Nº de baños"
                    type="number"
                    className="w-full"
                  />
                  <CustomFormField
                    name="superficie"
                    label="Superfície (m²)"
                    type="number"
                    className="w-full"
                  />
                </div>
                <h3 className="text-base font-semibold mb-4">Servicios</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  <CustomFormField
                    name="hayTelevision"
                    label="Televisión"
                    type="switch"
                  />
                  <CustomFormField
                    name="hayTelefono"
                    label="Teléfono"
                    type="switch"
                  />
                  <CustomFormField
                    name="hayInternet"
                    label="Internet"
                    type="switch"
                  />
                  <CustomFormField
                    name="hayTerraza"
                    label="Terraza"
                    type="switch"
                  />
                  <CustomFormField
                    name="hayAscensor"
                    label="Ascensor"
                    type="switch"
                  />
                  <CustomFormField
                    name="hayGaraje"
                    label="Garaje"
                    type="switch"
                  />
                  <CustomFormField
                    name="hayLavavajillas"
                    label="Lavavajillas"
                    type="switch"
                  />
                  <CustomFormField
                    name="hayHorno"
                    label="Horno"
                    type="switch"
                  />
                  <CustomFormField
                    name="hayMicroondas"
                    label="Microondas"
                    type="switch"
                  />
                  <CustomFormField
                    name="hayNevera"
                    label="Nevera"
                    type="switch"
                  />
                  <CustomFormField
                    name="hayLavadora"
                    label="Lavadora"
                    type="switch"
                  />
                  <CustomFormField
                    name="haySecadora"
                    label="Secadora"
                    type="switch"
                  />
                  <CustomFormField
                    name="hayPortero"
                    label="Portero"
                    type="switch"
                  />
                  <CustomFormField
                    name="hayMuebles"
                    label="Muebles"
                    type="switch"
                  />
                  <CustomFormField
                    name="hayCalefaccion"
                    label="Calefacción"
                    type="switch"
                  />
                  <CustomFormField
                    name="hayAireAcondicionado"
                    label="Aire acondicionado"
                    type="switch"
                  />
                  <CustomFormField
                    name="hayGas"
                    label="Gas"
                    type="switch"
                  />
                  <CustomFormField
                    name="hayPiscina"
                    label="Piscina"
                    type="switch"
                  />
                  <CustomFormField
                    name="hayZonaComunitaria"
                    label="Zona comunitaria"
                    type="switch"
                  />
                  <CustomFormField
                    name="hayGimnasio"
                    label="Gimnasio"
                    type="switch"
                  />
                </div>
                <h3 className="text-sm font-medium mb-4">Gastos incluidos en el precio</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  <CustomFormField
                    name="aguaIncluido"
                    label="Agua"
                    type="switch"
                  />
                  <CustomFormField
                    name="gasIncluido"
                    label="Gas"
                    type="switch"
                  />
                  <CustomFormField
                    name="internetIncluido"
                    label="Internet"
                    type="switch"
                  />
                  <CustomFormField
                    name="electricidadIncluido"
                    label="Electricidad"
                    type="switch"
                  />
                </div>               
                <CustomFormField name="address" label="Gastos no incluidos en el precio" />

              </div>
            </div>

            <hr className="my-6 border-gray-200" />

            {/* Photos */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Fotos</h2>
              <CustomFormField
                name="photoUrls"
                label="Fotos del alojamiento"
                type="file"
                accept="image/*"
              />

            </div>

            <hr className="my-6 border-gray-200" />

            <Button
              type="submit"
              className="bg-primary-700 text-white w-full mt-8"
            >
              Crear oferta
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default EditProperty;
