import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Obtener un propietario por userId
export const getManager = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.params;

    const usuario = await prisma.usuario.findUnique({
      where: { id: Number(userId) },
    });

    if (!usuario || usuario.tipo !== "Propietario") {
      res.status(404).json({ message: "No se ha encontrado al propietario" });
      return;
    }

    res.json(usuario);
  } catch (error: any) {
    res.status(500).json({ message: `Error al recuperar el propietario: ${error.message}` });
  }
};

// Actualizar perfil de propietario
export const updateManagerProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    const { telefono } = req.body;
    const { userId } = req.user!;

    const updatedUser = await prisma.usuario.update({
      where: { id: userId },
      data: { telefono },
      include: { alojamientos: true },
    });

    res.status(200).json(updatedUser);
  } catch (error: any) {
    res.status(500).json({ message: `Error al actualizar el perfil del propietario: ${error.message}` });
  }
};


// Actualizar los datos del propietario
export const updateManager = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.params;
    const { nombre, email, telefono } = req.body;

    const updatedUsuario = await prisma.usuario.update({
      where: { id: Number(userId) },
      data: { nombre, email, telefono },
    });

    res.json(updatedUsuario);
  } catch (error: any) {
    res.status(500).json({ message: `Error al actualizar propietario: ${error.message}` });
  }
};

// Obtener todos los alojamientos de un propietario
export const getManagerProperties = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.params;

    const usuario = await prisma.usuario.findUnique({
      where: { id: Number(userId) },
    });

    if (!usuario || usuario.tipo !== "Propietario") {
      res.status(404).json({ message: "Propietario no encontrado" });
      return;
    }

    const properties = await prisma.alojamiento.findMany({
      where: { managerUsuarioId: usuario.id },
    });

    // Orden personalizado por estado: Rechazado -> Pendiente -> Publicado
    const estadoOrden = {
      Rechazado: 0,
      Pendiente: 1,
      Publicado: 2,
    };

    properties.sort(
      (a, b) => estadoOrden[a.estado as keyof typeof estadoOrden] - estadoOrden[b.estado as keyof typeof estadoOrden]
    );

    res.json(properties);
  } catch (err: any) {
    res.status(500).json({ message: `Error al recuperar alojamientos: ${err.message}` });
  }
};
