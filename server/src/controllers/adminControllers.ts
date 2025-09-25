import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Obtener datos del admin por userId
export const getAdmin = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.params;

    const usuario = await prisma.usuario.findUnique({
      where: { id: Number(userId) },
    });

    if (!usuario) {
      res.status(404).json({ message: "No se encontró al admin" });
      return;
    }

    res.json(usuario);
  } catch (error: any) {
    res.status(500).json({ message: `Error al recuperar el admin: ${error.message}` });
  }
};


export const getAlojamientosPendientes = async (req: Request, res: Response): Promise<void> => {
  try {
    const pendientes = await prisma.alojamiento.findMany({
      where: { estado: "Pendiente" },
      include: {
        propietario: true,
      },
    });

    res.json(pendientes);
  } catch (err: any) {
    console.error("Error al obtener alojamientos pendientes:", err);
    res.status(500).json({ message: "Error interno al obtener alojamientos pendientes" });
  }
};

export const getPropietarios = async (req: Request, res: Response): Promise<void> => {
  try {
    const { 
      search = '',
      sortBy = 'createdAt',
      sortOrder = 'desc',
      page = '1',
      limit = '20'
    } = req.query;

    const pageNum = parseInt(page as string);
    const limitNum = parseInt(limit as string);
    const skip = (pageNum - 1) * limitNum;

    // Construir filtros
    const where: any = { tipo: "Propietario" };

    if (search) {
      where.OR = [
        { nombre: { contains: search as string, mode: 'insensitive' } },
        { email: { contains: search as string, mode: 'insensitive' } },
      ];
    }

    // Construir ordenación
    const orderBy: any = {};
    const validSortFields = ['createdAt', 'nombre', 'email'];
    const sortField = validSortFields.includes(sortBy as string) ? sortBy as string : 'createdAt';
    const order = (sortOrder as string).toLowerCase() === 'asc' ? 'asc' : 'desc';
    orderBy[sortField] = order;

    const [propietarios, totalCount] = await Promise.all([
      prisma.usuario.findMany({
        where,
        select: {
          id: true,
          nombre: true,
          email: true,
          telefono: true,
          createdAt: true,
          isEmailVerified: true,
          isSuspended: true,
          _count: {
            select: {
              alojamientos: true,
              conversacionesComoPropietario: true,
            }
          }
        },
        orderBy,
        skip,
        take: limitNum,
      }),
      prisma.usuario.count({ where })
    ]);

    res.json({
      propietarios,
      pagination: {
        currentPage: pageNum,
        totalPages: Math.ceil(totalCount / limitNum),
        totalCount,
        limit: limitNum
      }
    });
  } catch (err: any) {
    console.error("Error al obtener propietarios:", err);
    res.status(500).json({ message: "Error interno al obtener propietarios" });
  }
};

export const getAlojamiento = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const alojamiento = await prisma.alojamiento.findUnique({
      where: { 
        id: Number(id)
        // Admin puede ver alojamientos en cualquier estado
      },
      include: {
        propietario: true,
      },
    });

    if (!alojamiento) {
      res.status(404).json({ message: "Alojamiento no encontrado" });
      return;
    }

    res.json(alojamiento);
  } catch (err: any) {
    console.error("Error al obtener alojamiento:", err);
    res.status(500).json({ message: "Error interno al obtener alojamiento" });
  }
};

export const getAlojamientosAprobados = async (req: Request, res: Response): Promise<void> => {
  try {
    const { 
      search = '',
      sortBy = 'postedDate',
      sortOrder = 'desc',
      propietario = '',
      page = '1',
      limit = '20'
    } = req.query;

    const pageNum = parseInt(page as string);
    const limitNum = parseInt(limit as string);
    const skip = (pageNum - 1) * limitNum;

    // Construir filtros
    const where: any = { estado: "Aprobado" };

    if (search) {
      where.OR = [
        { nombre: { contains: search as string, mode: 'insensitive' } },
        { descripcion: { contains: search as string, mode: 'insensitive' } },
        { direccion: { contains: search as string, mode: 'insensitive' } },
        { ciudad: { contains: search as string, mode: 'insensitive' } },
        { provincia: { contains: search as string, mode: 'insensitive' } },
      ];
    }

    if (propietario) {
      where.propietario = {
        nombre: { contains: propietario as string, mode: 'insensitive' }
      };
    }

    // Construir ordenación
    const orderBy: any = {};
    const validSortFields = ['postedDate', 'nombre', 'precio'];
    const sortField = validSortFields.includes(sortBy as string) ? sortBy as string : 'postedDate';
    const order = (sortOrder as string).toLowerCase() === 'asc' ? 'asc' : 'desc';
    
    if (sortField === 'nombre') {
      orderBy.nombre = order;
    } else {
      orderBy[sortField] = order;
    }

    const [aprobados, totalCount] = await Promise.all([
      prisma.alojamiento.findMany({
        where,
        include: {
            propietario: true,
        },
        orderBy,
        skip,
        take: limitNum,
      }),
      prisma.alojamiento.count({ where })
    ]);

    res.json({
      properties: aprobados,
      pagination: {
        currentPage: pageNum,
        totalPages: Math.ceil(totalCount / limitNum),
        totalCount,
        limit: limitNum
      }
    });
  } catch (err: any) {
    console.error("Error al obtener alojamientos aprobados:", err);
    res.status(500).json({ message: "Error interno al obtener alojamientos aprobados" });
  }
};

export const aprobarAlojamiento = async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);
  const { esDestacado } = req.body;

  try {
    const alojamiento = await prisma.alojamiento.update({
      where: { id },
      data: {
        estado: "Aprobado",
        motivoRechazo: null,
        esDestacado: esDestacado === true || esDestacado === "true", 
      },
      include: {
        propietario: true
      }
    });


    res.json({ success: true });
  } catch (err: any) {
    console.error("Error al aprobar alojamiento:", err.message);
    res.status(500).json({ message: "Error al aprobar alojamiento" });
  }
};


export const rechazarAlojamiento = async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);
  const { motivo, esDestacado } = req.body;

  if (!motivo || motivo.trim().length < 5) {
    res.status(400).json({ message: "Motivo de rechazo inválido" });
    return;
  }

  try {
    const alojamiento = await prisma.alojamiento.update({
      where: { id },
      data: {
        estado: "Rechazado",
        motivoRechazo: motivo.trim(),
        esDestacado: esDestacado === true || esDestacado === "true", 
      },
      include: {
        propietario: true
      }
    });


    res.json({ success: true });
  } catch (err: any) {
    console.error("Error al rechazar alojamiento:", err.message);
    res.status(500).json({ message: "Error al rechazar alojamiento" });
  }
};

export const eliminarAlojamientoAprobado = async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);
  console.log(`🗑️  ELIMINANDO ALOJAMIENTO: ID ${id}`);

  if (isNaN(id)) {
    console.log(`❌ ID inválido: ${req.params.id}`);
    res.status(400).json({ message: "ID inválido" });
    return;
  }

  try {
    // Verificar que el alojamiento existe y está aprobado
    const alojamiento = await prisma.alojamiento.findUnique({
      where: { id },
      include: { propietario: true }
    });
    console.log(`📋 Alojamiento encontrado:`, alojamiento ? `${alojamiento.nombre} (Estado: ${alojamiento.estado}, Propietario: ${alojamiento.managerUsuarioId})` : 'No encontrado');

    if (!alojamiento) {
      console.log(`❌ Alojamiento no encontrado con ID ${id}`);
      res.status(404).json({ message: "Alojamiento no encontrado" });
      return;
    }

    if (alojamiento.estado !== "Aprobado") {
      console.log(`❌ Alojamiento no aprobado. Estado actual: ${alojamiento.estado}`);
      res.status(400).json({ message: "Solo se pueden eliminar alojamientos aprobados" });
      return;
    }


    // Eliminar carpeta de imágenes si existe
    const path = require('path');
    const fs = require('fs');
    const alojamientoPath = path.join(process.cwd(), "public", "alojamientos", String(id));
    if (fs.existsSync(alojamientoPath)) {
      fs.rmSync(alojamientoPath, { recursive: true, force: true });
    }

    // Eliminar alojamiento de la BBDD
    await prisma.alojamiento.delete({
      where: { id },
    });
    console.log(`✅ Alojamiento ${id} eliminado de la base de datos`);

    console.log(`🎉 PROCESO COMPLETO: Alojamiento ${id} eliminado exitosamente`);
    res.status(200).json({ message: "Alojamiento eliminado correctamente" });
  } catch (error: any) {
    console.error("Error al eliminar alojamiento:", error);
    res.status(500).json({ message: "Error al eliminar el alojamiento", error: error.message });
  }
};

// Suspender propietario
export const suspenderPropietario = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { motivo } = req.body;
    const propietarioId = Number(id);

    if (isNaN(propietarioId)) {
      res.status(400).json({ message: "ID inválido" });
      return;
    }

    if (!motivo || !motivo.trim()) {
      res.status(400).json({ message: "El motivo de suspensión es requerido" });
      return;
    }

    const propietario = await prisma.usuario.findUnique({
      where: { id: propietarioId },
    });

    if (!propietario) {
      res.status(404).json({ message: "Propietario no encontrado" });
      return;
    }

    if (propietario.tipo !== "Propietario") {
      res.status(400).json({ message: "El usuario no es un propietario" });
      return;
    }

    // Actualizar estado de suspensión del propietario y suspender todos sus alojamientos
    const [propietarioActualizado] = await Promise.all([
      prisma.usuario.update({
        where: { id: propietarioId },
        data: { 
          isSuspended: true,
          motivoSuspension: motivo.trim()
        },
      }),
      // Cambiar el estado de todos los alojamientos del propietario a "Suspendido"
      prisma.alojamiento.updateMany({
        where: { 
          managerUsuarioId: propietarioId,
          estado: { not: "Suspendido" } // Solo actualizar los que no estén ya suspendidos
        },
        data: { estado: "Suspendido" },
      })
    ]);


    res.json({ success: true, message: "Propietario suspendido correctamente" });
  } catch (error: any) {
    console.error("Error al suspender propietario:", error);
    res.status(500).json({ message: "Error al suspender el propietario", error: error.message });
  }
};

// Reactivar propietario
export const reactivarPropietario = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const propietarioId = Number(id);

    if (isNaN(propietarioId)) {
      res.status(400).json({ message: "ID inválido" });
      return;
    }

    const propietario = await prisma.usuario.findUnique({
      where: { id: propietarioId },
    });

    if (!propietario) {
      res.status(404).json({ message: "Propietario no encontrado" });
      return;
    }

    if (propietario.tipo !== "Propietario") {
      res.status(400).json({ message: "El usuario no es un propietario" });
      return;
    }

    // Actualizar estado de suspensión del propietario
    // Los alojamientos permanecen en estado "Suspendido" hasta que el propietario los vuelva a publicar
    const propietarioActualizado = await prisma.usuario.update({
      where: { id: propietarioId },
      data: { 
        isSuspended: false,
        motivoSuspension: null // Limpiar el motivo al reactivar
      },
    });


    res.json({ success: true, message: "Propietario reactivado correctamente" });
  } catch (error: any) {
    console.error("Error al reactivar propietario:", error);
    res.status(500).json({ message: "Error al reactivar el propietario", error: error.message });
  }
};

// Eliminar propietario
export const eliminarPropietario = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const propietarioId = Number(id);

    if (isNaN(propietarioId)) {
      res.status(400).json({ message: "ID inválido" });
      return;
    }

    const propietario = await prisma.usuario.findUnique({
      where: { id: propietarioId },
      include: {
        alojamientos: true,
        _count: {
          select: {
            alojamientos: true,
            conversacionesComoPropietario: true,
          }
        }
      }
    });

    if (!propietario) {
      res.status(404).json({ message: "Propietario no encontrado" });
      return;
    }

    if (propietario.tipo !== "Propietario") {
      res.status(400).json({ message: "El usuario no es un propietario" });
      return;
    }

    // Eliminar carpetas de imágenes de todos sus alojamientos
    const path = require('path');
    const fs = require('fs');
    
    for (const alojamiento of propietario.alojamientos) {
      const alojamientoPath = path.join(process.cwd(), "public", "alojamientos", String(alojamiento.id));
      if (fs.existsSync(alojamientoPath)) {
        fs.rmSync(alojamientoPath, { recursive: true, force: true });
      }
    }

    // Eliminar propietario (Cascade eliminará alojamientos, conversaciones, mensajes y notificaciones)
    await prisma.usuario.delete({
      where: { id: propietarioId },
    });

    res.json({ success: true, message: "Propietario eliminado correctamente" });
  } catch (error: any) {
    console.error("Error al eliminar propietario:", error);
    res.status(500).json({ message: "Error al eliminar el propietario", error: error.message });
  }
};

// Iniciar conversación directa admin-propietario (sin alojamiento específico)
export const iniciarConversacionConPropietario = async (req: Request, res: Response): Promise<void> => {
  try {
    const { propietarioId } = req.params;
    const { mensaje } = req.body;
    const adminId = (req as any).user?.userId;

    if (!adminId) {
      res.status(401).json({ message: "Admin no autenticado" });
      return;
    }

    if (!mensaje || !mensaje.trim()) {
      res.status(400).json({ message: "El mensaje es requerido" });
      return;
    }

    const propietario = await prisma.usuario.findUnique({
      where: { id: Number(propietarioId) },
    });

    if (!propietario || propietario.tipo !== "Propietario") {
      res.status(404).json({ message: "Propietario no encontrado" });
      return;
    }

    // Verificar si ya existe una conversación admin-propietario
    let conversacion = await prisma.conversacion.findFirst({
      where: {
        estudianteId: adminId,
        propietarioId: Number(propietarioId),
        esConversacionAdmin: true,
        alojamientoId: null,
      }
    });

    // Si no existe, crear nueva conversación admin-propietario
    if (!conversacion) {
      conversacion = await prisma.conversacion.create({
        data: {
          estudianteId: adminId,
          propietarioId: Number(propietarioId),
          propietarioVistoUltimo: false,
          esConversacionAdmin: true,
          alojamientoId: null,
        }
      });

    }

    // Crear mensaje
    const nuevoMensaje = await prisma.mensaje.create({
      data: {
        contenido: mensaje.trim(),
        conversacionId: conversacion.id,
        emisorId: adminId,
      }
    });

    // Actualizar conversación
    await prisma.conversacion.update({
      where: { id: conversacion.id },
      data: {
        ultimoMensajeId: nuevoMensaje.id,
        estudianteVistoUltimo: true,
        propietarioVistoUltimo: false,
      }
    });


    res.json({ 
      success: true, 
      conversacion: conversacion,
      mensaje: nuevoMensaje 
    });

  } catch (error: any) {
    console.error("Error al iniciar conversación:", error);
    res.status(500).json({ message: "Error al iniciar conversación", error: error.message });
  }
};

