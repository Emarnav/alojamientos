import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * POST /api/mensajes
 * Crear un mensaje entre dos usuarios para un alojamiento
 */
export const sendMessage = async (req: Request, res: Response): Promise<void> => {
  try {
    const { contenido, emisorId, conversacionId } = req.body;

    const nuevoMensaje = await prisma.mensaje.create({
      data: {
        contenido,
        emisorId,
        conversacionId,
      },
    });

    // Obtener la conversación para saber quién es quién
    const conversacion = await prisma.conversacion.findUnique({
      where: { id: conversacionId },
    });

    if (!conversacion) {
      res.status(404).json({ message: "Conversación no encontrada" });
      return;
    }

    const esPropietario = emisorId === conversacion.propietarioId;
    const esEstudiante = emisorId === conversacion.estudianteId;

    await prisma.conversacion.update({
      where: { id: conversacionId },
      data: {
        ultimoMensajeId: nuevoMensaje.id,
        propietarioVistoUltimo: esPropietario ? true : false,
        estudianteVistoUltimo: esEstudiante ? true : false,
      },
    });


    res.status(201).json(nuevoMensaje);
  } catch (error: any) {
    res.status(500).json({ message: `Error al enviar el mensaje: ${error.message}` });
  }
};


/**
 * GET /api/mensajes/:alojamientoId/:usuarioA/:usuarioB
 * Obtener historial de chat entre dos usuarios sobre un alojamiento
 */
export const getChatMessages = async (req: Request, res: Response): Promise<void> => {
  try {
    const { conversacionId } = req.params;

    const mensajes = await prisma.mensaje.findMany({
      where: {
        conversacionId: Number(conversacionId),
      },
      orderBy: { createdAt: "asc" },
    });

    res.json(mensajes);
  } catch (error: any) {
    res.status(500).json({ message: `Error al obtener los mensajes: ${error.message}` });
  }
};

/**
 * POST /api/conversaciones
 * Crea una conversación si no existe ya entre estudiante y propietario sobre un alojamiento
 */
export const createOrGetConversacion = async (req: Request, res: Response): Promise<void> => {
  try {
    const { alojamientoId, estudianteId, propietarioId } = req.body;

    let conversacion = await prisma.conversacion.findFirst({
      where: {
        alojamientoId,
        estudianteId,
        propietarioId,
        esConversacionAdmin: false, // Solo conversaciones normales, no admin
      },
    });

    if (!conversacion) {
      conversacion = await prisma.conversacion.create({
        data: {
          alojamientoId,
          estudianteId,
          propietarioId,
        },
      });

    }

    res.status(200).json(conversacion);
  } catch (error: any) {
    res.status(500).json({ message: `Error al crear/conseguir la conversación: ${error.message}` });
  }
};

export const getConversacionesUsuario = async (req: Request, res: Response): Promise<void> => {
  try {
    const usuarioId = Number(req.query.usuarioId);

    const conversaciones = await prisma.conversacion.findMany({
      where: {
        OR: [
          { estudianteId: usuarioId },
          { propietarioId: usuarioId },
        ],
        // Excluir conversaciones admin del listado normal
        esConversacionAdmin: false,
      },
      include: {
        alojamiento: {
          include: {
          },
        },
        propietario: {
          select: { nombre: true },
        },
        estudiante: {
          select: { nombre: true },
        },
        mensajes: {
          orderBy: { createdAt: "desc" },
          take: 1,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });


    res.status(200).json(conversaciones);
  } catch (error: any) {
    res.status(500).json({ message: `Error al obtener conversaciones: ${error.message}` });
  }
};

export const marcarComoLeido = async (req: Request, res: Response): Promise<void> => {
  try {
    const conversacionId = Number(req.params.id);
    const { usuarioId } = req.body;

    const conversacion = await prisma.conversacion.findUnique({
      where: { id: conversacionId },
    });

    if (!conversacion) {
      res.status(404).json({ message: "Conversación no encontrada" });
      return;
    }

    const data: any = {};
    if (usuarioId === conversacion.estudianteId) {
      data.estudianteVistoUltimo = true;
    } else if (usuarioId === conversacion.propietarioId) {
      data.propietarioVistoUltimo = true;
    } else {
      res.status(403).json({ message: "Usuario no autorizado en esta conversación" });
      return;
    }

    await prisma.conversacion.update({
      where: { id: conversacionId },
      data,
    });

    res.status(200).json({ message: "Mensaje marcado como leído" });
  } catch (error: any) {
    res.status(500).json({ message: `Error al marcar como leído: ${error.message}` });
  }
};

// Obtener conversación admin-propietario
export const getAdminConversation = async (req: Request, res: Response): Promise<void> => {
  try {
    const { propietarioId } = req.params;
    
    // Buscar conversación admin-propietario (compartida entre todos los admins)
    let conversacion = await prisma.conversacion.findFirst({
      where: {
        propietarioId: Number(propietarioId),
        esConversacionAdmin: true,
        alojamientoId: null,
      },
      include: {
        mensajes: {
          include: {
            emisor: {
              select: {
                id: true,
                nombre: true,
                tipo: true,
              }
            }
          },
          orderBy: {
            createdAt: 'asc'
          }
        },
        estudiante: {
          select: {
            id: true,
            nombre: true,
            tipo: true,
          }
        },
        propietario: {
          select: {
            id: true,
            nombre: true,
            tipo: true,
          }
        }
      }
    });

    // Si no existe conversación, devolver null (se creará cuando se envíe el primer mensaje)
    if (!conversacion) {
      res.status(200).json(null);
      return;
    }

    res.status(200).json(conversacion);
  } catch (error: any) {
    res.status(500).json({ message: `Error al obtener conversación admin: ${error.message}` });
  }
};

// Iniciar conversación admin desde el lado del propietario
export const initAdminConversation = async (req: Request, res: Response): Promise<void> => {
  try {
    const { propietarioId, mensaje } = req.body;

    if (!mensaje || !mensaje.trim()) {
      res.status(400).json({ message: "El mensaje es requerido" });
      return;
    }

    // Obtener cualquier admin para iniciar la conversación (será compartida)
    const admin = await prisma.usuario.findFirst({
      where: { tipo: "Admin" },
    });

    if (!admin) {
      res.status(404).json({ message: "No hay administradores disponibles" });
      return;
    }

    // Verificar si ya existe una conversación admin-propietario
    let conversacion = await prisma.conversacion.findFirst({
      where: {
        propietarioId: Number(propietarioId),
        esConversacionAdmin: true,
        alojamientoId: null,
      }
    });

    // Si no existe, crear nueva conversación admin-propietario
    if (!conversacion) {
      conversacion = await prisma.conversacion.create({
        data: {
          estudianteId: admin.id, // Usar cualquier admin como "estudiante" para mantener estructura
          propietarioId: Number(propietarioId),
          propietarioVistoUltimo: true,
          estudianteVistoUltimo: false, // Admin no ha visto este mensaje inicial
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
        emisorId: Number(propietarioId),
      }
    });

    // Actualizar conversación con último mensaje
    await prisma.conversacion.update({
      where: { id: conversacion.id },
      data: {
        ultimoMensajeId: nuevoMensaje.id,
        propietarioVistoUltimo: true,
        estudianteVistoUltimo: false,
      },
    });


    res.status(201).json({
      mensaje: nuevoMensaje,
      conversacion: conversacion.id
    });
  } catch (error: any) {
    res.status(500).json({ message: `Error al iniciar conversación admin: ${error.message}` });
  }
};

// Obtener todas las conversaciones admin para administradores
export const getAdminConversations = async (req: Request, res: Response): Promise<void> => {
  try {
    // Obtener todas las conversaciones admin
    const conversaciones = await prisma.conversacion.findMany({
      where: {
        esConversacionAdmin: true,
        alojamientoId: null,
      },
      include: {
        propietario: {
          select: {
            id: true,
            nombre: true,
            email: true,
          }
        },
        mensajes: {
          orderBy: { createdAt: 'desc' },
          take: 1, // Solo el último mensaje para preview
          include: {
            emisor: {
              select: {
                id: true,
                nombre: true,
                tipo: true,
              }
            }
          }
        }
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    // Formatear respuesta con información adicional
    const conversacionesFormateadas = conversaciones.map(conv => ({
      ...conv,
      ultimoMensaje: conv.mensajes[0] || null,
      tieneNuevosmensajes: conv.mensajes[0] && !conv.estudianteVistoUltimo,
    }));

    res.status(200).json(conversacionesFormateadas);
  } catch (error: any) {
    res.status(500).json({ message: `Error al obtener conversaciones admin: ${error.message}` });
  }
};
