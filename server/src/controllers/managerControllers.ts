import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { wktToGeoJSON } from "@terraformer/wkt";

const prisma = new PrismaClient();

export const getManager = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { cognitoId } = req.params;
    const propietario = await prisma.propietario.findUnique({
      where: { cognitoId },
    });

    if (propietario) {
      res.json(propietario);
    } else {
      res.status(404).json({ message: "No se ha encontrado al propietario" });
    }
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error al recuperar el propietario: ${error.message}` });
  }
};

export const createManager = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { cognitoId, nombre, email, telefono } = req.body;
    const propietario = await prisma.propietario.create({
      data: {
        cognitoId,
        nombre: nombre,  
        email,
        telefono: telefono, 
      },
    });
    

    res.status(201).json(propietario);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error creating manager: ${error.message}` });
  }
};

export const updateManager = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { cognitoId } = req.params;
    const { nombre, email, telefono } = req.body;

    const updateManager = await prisma.propietario.update({
      where: { cognitoId },
      data: {
        nombre,
        email,
        telefono,
      },
    });

    res.json(updateManager);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error al actualizar al propietario: ${error.message}` });
  }
};

export const getManagerProperties = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { cognitoId } = req.params;
    const properties = await prisma.alojamiento.findMany({
      where: { managerCognitoId: cognitoId },
      include: {
        location: true,
      },
    });

    const propertiesWithFormattedLocation = await Promise.all(
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

    res.json(propertiesWithFormattedLocation);
  } catch (err: any) {
    res
      .status(500)
      .json({ message: `Error al recuperar los alojamientos del propietario: ${err.message}` });
  }
};
