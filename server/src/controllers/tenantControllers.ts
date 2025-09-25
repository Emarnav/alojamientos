// CONTROLADORES DE USUARIO ESTUDIANTE CENTRALIZADO

import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Obtener usuario por userId
export const getTenant = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.params;

    const usuario = await prisma.usuario.findUnique({
      where: { id: Number(userId) },
      include: { alojamientosFavoritos: true },
    });

    if (!usuario || usuario.tipo !== "Estudiante") {
      res.status(404).json({ message: "No se encontró el estudiante" });
      return;
    }

    res.json(usuario);
  } catch (error: any) {
    res.status(500).json({ message: `Error al recuperar el estudiante: ${error.message}` });
  }
};

// Actualizar perfil de estudiante
export const updateStudentProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    const { telefono } = req.body;
    const { userId } = req.user!;

    const updatedUser = await prisma.usuario.update({
      where: { id: userId },
      data: { telefono },
      include: { alojamientosFavoritos: true },
    });

    res.status(200).json(updatedUser);
  } catch (error: any) {
    res.status(500).json({ message: `Error al actualizar el perfil del estudiante: ${error.message}` });
  }
};


// Actualizar usuario
export const updateStudent = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.params;
    const { nombre, email, telefono } = req.body;

    const updated = await prisma.usuario.update({
      where: { id: Number(userId) },
      data: { nombre, email, telefono },
    });

    res.json(updated);
  } catch (error: any) {
    res.status(500).json({ message: `Error actualizando el estudiante: ${error.message}` });
  }
};

// Obtener alojamientos favoritos
export const getCurrentResidences = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.params;

    const usuario = await prisma.usuario.findUnique({
      where: { id: Number(userId) },
    });

    if (!usuario || usuario.tipo !== "Estudiante") {
      res.status(404).json({ message: "Estudiante no encontrado" });
      return;
    }

    const properties = await prisma.usuario.findUnique({
      where: { id: usuario.id },
      include: {
        alojamientosFavoritos: {
          where: {
            // Solo mostrar alojamientos aprobados (excluir suspendidos, pendientes y rechazados)
            estado: "Aprobado",
          },
        },
      },
    });

    if (!properties) {
      res.status(404).json({ message: "No se encontraron alojamientos" });
      return;
    }

    res.json(properties.alojamientosFavoritos);
  } catch (error: any) {
    res.status(500).json({ message: `Error al recuperar alojamientos: ${error.message}` });
  }
};

// Añadir favorito
export const addFavoriteProperty = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, propertyId } = req.params;

    const usuario = await prisma.usuario.findUnique({
      where: { id: Number(userId) },
      include: { alojamientosFavoritos: true },
    });

    if (!usuario || usuario.tipo !== "Estudiante") {
      res.status(404).json({ message: "Estudiante no encontrado" });
      return;
    }

    const alreadyFavorite = usuario.alojamientosFavoritos.some(
      (fav) => fav.id === Number(propertyId)
    );

    if (alreadyFavorite) {
      res.status(409).json({ message: "Ya está en favoritos" });
      return;
    }

    const updated = await prisma.usuario.update({
      where: { id: usuario.id },
      data: {
        alojamientosFavoritos: {
          connect: { id: Number(propertyId) },
        },
      },
      include: { alojamientosFavoritos: true },
    });

    res.json(updated);
  } catch (error: any) {
    res.status(500).json({ message: `Error al añadir favorito: ${error.message}` });
  }
};

// Eliminar favorito
export const removeFavoriteProperty = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, propertyId } = req.params;

    const usuario = await prisma.usuario.findUnique({
      where: { id: Number(userId) },
    });

    if (!usuario || usuario.tipo !== "Estudiante") {
      res.status(404).json({ message: "Estudiante no encontrado" });
      return;
    }

    const updated = await prisma.usuario.update({
      where: { id: usuario.id },
      data: {
        alojamientosFavoritos: {
          disconnect: { id: Number(propertyId) },
        },
      },
      include: { alojamientosFavoritos: true },
    });

    res.json(updated);
  } catch (error: any) {
    res.status(500).json({ message: `Error al eliminar favorito: ${error.message}` });
  }
};
