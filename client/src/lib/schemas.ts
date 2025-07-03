import * as z from "zod";
import { PropertyTypeEnum } from "@/lib/constants";

export const propertySchema = z.object({
  nombre: z.string().min(1, "El nombre es necesario"),
  descripcion: z.string().min(1, "La descripción es necesaria"),
  precio: z.coerce.number().positive().min(0).int(),
  hayTelevision: z.boolean(),
  hayTelefono: z.boolean(),
  hayInternet: z.boolean(),
  hayTerraza: z.boolean(),
  hayAscensor: z.boolean(),
  hayGaraje: z.boolean(),
  hayLavavajillas: z.boolean(),
  hayHorno: z.boolean(),
  hayMicroondas: z.boolean(),
  hayNevera: z.boolean(),
  hayLavadora: z.boolean(),
  haySecadora: z.boolean(),
  hayPortero: z.boolean(),
  hayMuebles: z.boolean(),
  hayCalefaccion: z.boolean(),
  hayAireAcondicionado: z.boolean(),
  hayGas: z.boolean(),
  hayPiscina: z.boolean(),
  hayZonaComunitaria: z.boolean(),
  hayGimnasio: z.boolean(),
  aguaIncluido: z.boolean(),
  gasIncluido: z.boolean(),
  electricidadIncluido: z.boolean(),
  internetIncluido: z.boolean(),
  photoUrls: z
    .array(z.instanceof(File))
    .min(1, "Se requiere al menos una foto"),
  habitaciones: z.coerce.number().positive().min(0).max(10).int(),
  banos: z.coerce.number().positive().min(0).max(10).int(),
  plazasLibres: z.coerce.number().positive().min(0).int(),
  superficie: z.coerce.number().int().positive(),
  tipoAlojamiento: z.nativeEnum(PropertyTypeEnum),
  direccion: z.string().min(1, "La dirección es necesaria"),
  localidad: z.string().min(1, "La localidad es necesaria"),
  provincia: z.string().min(1, "La provincia es necesaria"),
  codigoPostal: z.string().min(1, "El código postal es necesario")
});

export type PropertyFormData = z.infer<typeof propertySchema>;

export const applicationSchema = z.object({
  nombre: z.string().min(1, "El nombre es necesario"),
  email: z.string().email("Dirección email inválida"),
  telefono: z.string().min(10, "Phone number must be at least 10 digits"),
  mensaje: z.string().optional(),
});

export type ApplicationFormData = z.infer<typeof applicationSchema>;

export const settingsSchema = z.object({
  nombre: z.string().min(1, "El nombre es necesario"),
  email: z.string().email("Dirección email inválida"),
  telefono: z.string().min(9, "Phone number must be at least 9 digits"),
});

export type SettingsFormData = z.infer<typeof settingsSchema>;
