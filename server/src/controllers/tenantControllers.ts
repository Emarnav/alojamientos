import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { wktToGeoJSON } from "@terraformer/wkt";

const prisma = new PrismaClient();

export const getTenant = async (req: Request, res: Response): Promise<void> => {
  try {
    const { cognitoId } = req.params;
    const inquilino = await prisma.inquilino.findUnique({
      where: { cognitoId },
      include: {
        favoritos: true,
      },
    });

    if (inquilino) {
      res.json(inquilino);
    } else {
      res.status(404).json({ message: "No se encontró el inquilino not found" });
    }
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error al recuperar el inquilino: ${error.message}` });
  }
};

export const createTenant = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { cognitoId, nombre, email, telefono } = req.body;

    const inquilino = await prisma.inquilino.create({
      data: {
        cognitoId,
        nombre,
        email,
        telefono,
      },
    });

    res.status(201).json(inquilino);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error al crear al inquilino: ${error.message}` });
  }
};

export const updateTenant = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { cognitoId } = req.params;
    const { nombre, email, telefono } = req.body;

    const updateTenant = await prisma.inquilino.update({
      where: { cognitoId },
      data: {
        nombre,
        email,
        telefono,
      },
    });

    res.json(updateTenant);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error actualizando el inquilino: ${error.message}` });
  }
};

export const getCurrentResidences = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { cognitoId } = req.params;
    const properties = await prisma.alojamiento.findMany({
      where: { inquilinos: { some: { cognitoId } } },
      include: {
        location: true,
      },
    });

    const residencesWithFormattedLocation = await Promise.all(
      properties.map(async (property) => {
        const coordinates: { coordinates: string }[] =
          await prisma.$queryRaw`SELECT ST_asText(coordinates) as coordinates from "Location" where id = ${property.location.id}`;

        const geoJSON: any = wktToGeoJSON(coordinates[0]?.coordinates || "");
        const longitude = geoJSON.coordinates[0];
        const latitude = geoJSON.coordinates[1];

        return {
          ...property,
          location: {
            ...property.location,
            coordinates: {
              longitude,
              latitude,
            },
          },
        };
      })
    );

    res.json(residencesWithFormattedLocation);
  } catch (err: any) {
    res
      .status(500)
      .json({ message: `Error al recuperar los alojamientos del propietario: ${err.message}` });
  }
};

export const addFavoriteProperty = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { cognitoId, propertyId } = req.params;
    const inquilino = await prisma.inquilino.findUnique({
      where: { cognitoId },
      include: { favoritos: true },
    });

    if (!inquilino) {
      res.status(404).json({ message: "Inquilino no encontrado" });
      return;
    }

    const propertyIdNumber = Number(propertyId);
    const existingFavorites = inquilino.favoritos || [];

    if (!existingFavorites.some((fav) => fav.id === propertyIdNumber)) {
      const updatedTenant = await prisma.inquilino.update({
        where: { cognitoId },
        data: {
          favoritos: {
            connect: { id: propertyIdNumber },
          },
        },
        include: { favoritos: true },
      });
      res.json(updatedTenant);
    } else {
      res.status(409).json({ message: "El alojamiento ya está añadido a favoritos" });
    }
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error al añadir el alojamiento a favoritos: ${error.message}` });
  }
};

export const removeFavoriteProperty = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { cognitoId, propertyId } = req.params;
    const propertyIdNumber = Number(propertyId);

    const updatedTenant = await prisma.inquilino.update({
      where: { cognitoId },
      data: {
        favoritos: {
          disconnect: { id: propertyIdNumber },
        },
      },
      include: { favoritos: true },
    });

    res.json(updatedTenant);
  } catch (err: any) {
    res
      .status(500)
      .json({ message: `Error al eliminar el alojamiento de favoritos: ${err.message}` });
  }
};
