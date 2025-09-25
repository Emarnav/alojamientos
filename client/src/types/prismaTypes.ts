// client/src/types/prismaTypes.ts

export type TipoUsuario = "Propietario" | "Estudiante" | "Admin";

export interface Usuario {
  id: number;
  cognitoId: string;
  nombre: string;
  email: string;
  telefono: string | null;
  tipo: TipoUsuario;
  isEmailVerified: boolean;
  isSuspended?: boolean;
  motivoSuspension?: string | null;
}

export interface Alojamiento {
  id: number;
  slug: string;
  estado: string;
  motivoRechazo?: string | null;
  photoUrls: string[];
  postedDate: string;
  aguaIncluido: boolean;
  descripcion: string;
  electricidadIncluido: boolean;
  gasIncluido: boolean;
  habitaciones: number;
  hayAireAcondicionado: boolean;
  hayAscensor: boolean;
  hayCalefaccion: boolean;
  hayGaraje: boolean;
  hayGas: boolean;
  hayGimnasio: boolean;
  hayHorno: boolean;
  hayInternet: boolean;
  hayLavadora: boolean;
  hayLavavajillas: boolean;
  hayMicroondas: boolean;
  hayMuebles: boolean;
  hayNevera: boolean;
  hayPiscina: boolean;
  hayPortero: boolean;
  haySecadora: boolean;
  hayTelefono: boolean;
  hayTelevision: boolean;
  hayTerraza: boolean;
  hayZonaComunitaria: boolean;
  internetIncluido: boolean;
  nombre: string;
  precio: number;
  superficie: number;
  plazasLibres: number;
  banos: number;
  dirigidoA: string;
  infoExtra: string;
  esDestacado: boolean;
  // Address fields (replacing ubicacion)
  direccion: string;
  ciudad: string;
  provincia: string;
  pais: string;
  codigoPostal: string;
  portal?: string | null;
  piso?: string | null;
  puerta?: string | null;
  tipoAlojamiento: string;
  managerUsuarioId: number;
  propietario?: Usuario;
}

export interface Conversacion {
  id: number;
  alojamientoId?: number | null; // Opcional para conversaciones admin-propietario
  estudianteId: number;
  propietarioId: number;
  createdAt: string;
  ultimoMensajeId?: number | null;
  estudianteVistoUltimo: boolean;
  propietarioVistoUltimo: boolean;
  esConversacionAdmin: boolean; // Identifica conversaciones con admin
  alojamiento?: Alojamiento;
  estudiante?: Usuario;
  propietario?: Usuario;
}

export interface Mensaje {
  id: number;
  contenido: string;
  conversacionId: number;
  emisorId: number;
  createdAt: string;
  emisor?: Usuario;
}

export type Estudiante = Usuario & {
  tipo: "Estudiante";
  alojamientosFavoritos?: Alojamiento[];
};

export type Propietario = Usuario & {
  tipo: "Propietario";
  alojamientos?: Alojamiento[];
};

export type Admin = Usuario & {
  tipo: "Admin";
};

export type TipoNotificacion = "NUEVO_MENSAJE" | "NUEVA_CONVERSACION" | "PROPIEDAD_APROBADA" | "PROPIEDAD_RECHAZADA" | "NUEVA_SOLICITUD";

export interface Notificacion {
  id: number;
  tipo: TipoNotificacion;
  titulo: string;
  descripcion: string;
  isRead: boolean;
  createdAt: string;
  usuarioId: number;
  conversacionId?: number | null;
  mensajeId?: number | null;
  alojamientoId?: number | null;
  conversacion?: Conversacion;
  mensaje?: Mensaje;
  alojamiento?: Alojamiento;
}
