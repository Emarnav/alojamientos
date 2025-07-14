import { Request, Response } from "express";
import { PrismaClient, Prisma, Ubicacion } from "@prisma/client";
import { wktToGeoJSON } from "@terraformer/wkt";
import axios from "axios";
import { getMulterForAlojamiento } from "../multerConfig";
import path from "path";
import fs from "fs";


const prisma = new PrismaClient();

export const updateProperty = (req: Request, res: Response): void => {
  const alojamientoId = Number(req.params.id);
  const upload = getMulterForAlojamiento(alojamientoId).array("photos");

  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ message: "Error al subir imágenes", error: err.message });
    }

    try {
      const files = req.files as Express.Multer.File[];

      const {
        direccion,
        localidad,
        provincia,
        pais,
        codigoPostal,
        managerUsuarioId,
        estado,
        alojamientoId: _omitAlojamientoId,
        motivoRechazo,
        existingPhotos,
        ...propertyData
      } = req.body;

      const property = await prisma.alojamiento.findUnique({
        where: { id: alojamientoId },
        include: { ubicacion: true, propietario: true },
      });

      if (!property) {
        return res.status(404).json({ message: "Alojamiento no encontrado" });
      }

      // 1. Convertir fotos existentes (del frontend)
      const existing = JSON.parse(req.body.existingPhotos ?? "[]");


      // 2. Fotos nuevas subidas ahora
      const newPhotos = files?.map(file => `/alojamientos/${alojamientoId}/${file.filename}`) ?? [];

      // 3. Combinar todo
      const photoUrls = [...existing, ...newPhotos];

      // 4. Actualizar ubicación
      const geo = await axios.get("https://nominatim.openstreetmap.org/search?" + new URLSearchParams({
        street: direccion,
        city: localidad,
        country: "España",
        postalcode: codigoPostal,
        format: "json",
        limit: "1",
      }).toString(), {
        headers: { "User-Agent": "UCHCEU (desarrolloweb@uchceu.es)" }
      });

      const [lon, lat] = geo.data[0] ? [parseFloat(geo.data[0].lon), parseFloat(geo.data[0].lat)] : [0, 0];

      await prisma.$executeRaw`
        UPDATE "Ubicacion"
        SET direccion = ${direccion},
            ciudad = ${localidad},
            provincia = ${provincia},
            pais = 'España',
            "codigoPostal" = ${codigoPostal},
            coordinates = ST_SetSRID(ST_MakePoint(${lon}, ${lat}), 4326)
        WHERE id = ${property.ubicacionId};
      `;

      // 5. Actualizar propiedad
      const updatedProperty = await prisma.alojamiento.update({
        where: { id: alojamientoId },
        data: {
          ...propertyData,
          photoUrls,
          managerUsuarioId: Number(managerUsuarioId),

          esDestacado:
            typeof propertyData.esDestacado !== "undefined"
              ? propertyData.esDestacado === "true"
              : property.esDestacado,
          hayTelevision: propertyData.hayTelevision === "true",
          hayTelefono: propertyData.hayTelefono === "true",
          hayInternet: propertyData.hayInternet === "true",
          hayTerraza: propertyData.hayTerraza === "true",
          hayAscensor: propertyData.hayAscensor === "true",
          hayGaraje: propertyData.hayGaraje === "true",
          hayLavavajillas: propertyData.hayLavavajillas === "true",
          hayHorno: propertyData.hayHorno === "true",
          hayMicroondas: propertyData.hayMicroondas === "true",
          hayNevera: propertyData.hayNevera === "true",
          hayLavadora: propertyData.hayLavadora === "true",
          haySecadora: propertyData.haySecadora === "true",
          hayPortero: propertyData.hayPortero === "true",
          hayMuebles: propertyData.hayMuebles === "true",
          hayCalefaccion: propertyData.hayCalefaccion === "true",
          hayAireAcondicionado: propertyData.hayAireAcondicionado === "true",
          hayGas: propertyData.hayGas === "true",
          hayPiscina: propertyData.hayPiscina === "true",
          hayZonaComunitaria: propertyData.hayZonaComunitaria === "true",
          hayGimnasio: propertyData.hayGimnasio === "true",
          aguaIncluido: propertyData.aguaIncluido === "true",
          gasIncluido: propertyData.gasIncluido === "true",
          electricidadIncluido: propertyData.electricidadIncluido === "true",
          internetIncluido: propertyData.internetIncluido === "true",
          precio: parseFloat(propertyData.precio),
          habitaciones: parseInt(propertyData.habitaciones),
          banos: parseFloat(propertyData.banos),
          plazasLibres: parseInt(propertyData.plazasLibres),
          superficie: parseInt(propertyData.superficie),
          descripcion: propertyData.descripcion,
          tipoAlojamiento: propertyData.tipoAlojamiento,
          dirigidoA: propertyData.dirigidoA,
          infoExtra: propertyData.infoExtra,
          ...(estado && { estado }),
          ...(motivoRechazo && { motivoRechazo }),
        },
        include: { ubicacion: true, propietario: true },
      });

      // 6. Borrar imágenes eliminadas por el usuario
      const alojamientoPath = path.join(process.cwd(), "public", "alojamientos", String(alojamientoId));
      if (fs.existsSync(alojamientoPath)) {
        const allFiles = fs.readdirSync(alojamientoPath);
        const filesToKeep = photoUrls.map((p) => path.basename(p));

        for (const file of allFiles) {
          if (!filesToKeep.includes(file)) {
            fs.unlinkSync(path.join(alojamientoPath, file));
          }
        }
      }

      res.json(updatedProperty);
    } catch (err: any) {
      res.status(500).json({ message: `Error al actualizar la propiedad: ${err.message}` });
    }
  });
};


export const deleteProperty = async (req: Request, res: Response): Promise<void> => {
  const alojamientoId = Number(req.params.id);

  if (isNaN(alojamientoId)) {
    res.status(400).json({ message: "ID inválido" }); // ✅ sin `return`
    return;
  }

  try {
    // 1. Eliminar carpeta de imágenes si existe
    const alojamientoPath = path.join(process.cwd(), "public", "alojamientos", String(alojamientoId));
    if (fs.existsSync(alojamientoPath)) {
      fs.rmSync(alojamientoPath, { recursive: true, force: true });
    }

    // 2. Eliminar alojamiento de la BBDD
    await prisma.alojamiento.delete({
      where: { id: alojamientoId },
    });

    res.status(200).json({ message: "Alojamiento eliminado correctamente" });
  } catch (error: any) {
    console.error("Error al eliminar alojamiento:", error);
    res.status(500).json({ message: "Error al eliminar el alojamiento", error: error.message });
  }
};
export const getProperties = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      favoriteIds,
      priceMin,
      priceMax,
      beds,
      baths,
      propertyType,
      squareFeetMin,
      squareFeetMax,
      amenities,
      availableFrom,
      latitude,
      longitude,
    } = req.query;

    let whereConditions: Prisma.Sql[] = [];

    if (favoriteIds) {
      const favoriteIdsArray = (favoriteIds as string).split(",").map(Number);
      whereConditions.push(
        Prisma.sql`p.id IN (${Prisma.join(favoriteIdsArray)})`
      );
    }

    if (priceMin) {
      whereConditions.push(
        Prisma.sql`p."precio" >= ${Number(priceMin)}`
      );
    }

    if (priceMax) {
      whereConditions.push(
        Prisma.sql`p."precio" <= ${Number(priceMax)}`
      );
    }

    if (beds && beds !== "any") {
      whereConditions.push(Prisma.sql`p.habitaciones >= ${Number(beds)}`);
    }

    if (baths && baths !== "any") {
      whereConditions.push(Prisma.sql`p.banos >= ${Number(baths)}`);
    }

    if (squareFeetMin) {
      whereConditions.push(
        Prisma.sql`p."superficie" >= ${Number(squareFeetMin)}`
      );
    }

    if (squareFeetMax) {
      whereConditions.push(
        Prisma.sql`p."superficie" <= ${Number(squareFeetMax)}`
      );
    }

    if (propertyType && propertyType !== "any") {
      whereConditions.push(
        Prisma.sql`p."tipoAlojamiento" = ${propertyType}::"TipoAlojamiento"`
      );
    }

    if (amenities && amenities !== "any") {
      const amenitiesArray = (amenities as string).split(",");
      whereConditions.push(Prisma.sql`p.amenities @> ${amenitiesArray}`);
    }

    if (availableFrom && availableFrom !== "any") {
      const availableFromDate =
        typeof availableFrom === "string" ? availableFrom : null;
      if (availableFromDate) {
        const date = new Date(availableFromDate);
        if (!isNaN(date.getTime())) {
          whereConditions.push(
            Prisma.sql`EXISTS (
              SELECT 1 FROM "Lease" l 
              WHERE l."propertyId" = p.id 
              AND l."startDate" <= ${date.toISOString()}
            )`
          );
        }
      }
    }

    if (latitude && longitude) {
      const lat = parseFloat(latitude as string);
      const lng = parseFloat(longitude as string);
      const radiusInKilometers = 1000;
      const degrees = radiusInKilometers / 111; // Converts kilometers to degrees

      whereConditions.push(
        Prisma.sql`ST_DWithin(
          l.coordinates::geometry,
          ST_SetSRID(ST_MakePoint(${lng}, ${lat}), 4326),
          ${degrees}
        )`
      );
    }

    const completeQuery = Prisma.sql`
      SELECT 
        p.*,
        json_build_object(
          'id', l.id,
          'direccion', l.direccion,
          'localidad', l.ciudad,
          'provincia', l.provincia,
          'codigoPostal', l."codigoPostal",
          'coordinates', json_build_object(
            'longitude', ST_X(l.coordinates::geometry),
            'latitude', ST_Y(l.coordinates::geometry)
          )
        ) as ubicacion
      FROM "Alojamiento" p
      JOIN "Ubicacion" l ON p."ubicacionId" = l.id
      ${
        whereConditions.length > 0
          ? Prisma.sql`WHERE ${Prisma.join(whereConditions, " AND ")}`
          : Prisma.empty
      }
    `;

    const properties = await prisma.$queryRaw(completeQuery);

    res.json(properties);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error al recuperar los alojamientos: ${error.message}` });
  }
};

export const getProperty = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const property = await prisma.alojamiento.findUnique({
      where: { id: Number(id) },
      include: {
        ubicacion: true,
        propietario: true,
      },
    });

    if (property) {
      const coordinates: { coordinates: string }[] =
        await prisma.$queryRaw`SELECT ST_asText(coordinates) as coordinates from "Ubicacion" where id = ${property.ubicacion.id}`;

      const geoJSON: any = wktToGeoJSON(coordinates[0]?.coordinates || "");
      const longitude = geoJSON.coordinates[0];
      const latitude = geoJSON.coordinates[1];

      const propertyWithCoordinates = {
        ...property,
        ubicacion: {
          ...property.ubicacion,
          coordinates: {
            longitude,
            latitude,
          },
        },
      };
      res.json(propertyWithCoordinates);
    }
  } catch (err: any) {
    res
      .status(500)
      .json({ message: `Error al recuperar el alojamiento: ${err.message}` });
  }
};

export const createProperty = (req: Request, res: Response): void => {
  const upload = getMulterForAlojamiento("temp").array("photos");

  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ message: "Error al subir imágenes", error: err.message });
    }

    const files = req.files as Express.Multer.File[];
    const tempDir = files[0]?.destination ?? "";

    try {
      const { direccion, localidad, provincia, codigoPostal, managerUsuarioId, ...propertyData } = req.body;

      const geo = await axios.get("https://nominatim.openstreetmap.org/search?" + new URLSearchParams({
        street: direccion,
        city: localidad,
        country: "España",
        postalcode: codigoPostal,
        format: "json",
        limit: "1",
      }).toString(), { headers: { "User-Agent": "UCHCEU (desarrolloweb@uchceu.es)" } });

      const [lon, lat] = geo.data[0] ? [parseFloat(geo.data[0].lon), parseFloat(geo.data[0].lat)] : [0, 0];

      const [ubicacion] = await prisma.$queryRaw<Ubicacion[]>`
        INSERT INTO "Ubicacion" (direccion, ciudad, provincia, pais, "codigoPostal", coordinates)
        VALUES (${direccion}, ${localidad}, ${provincia}, 'España', ${codigoPostal}, ST_SetSRID(ST_MakePoint(${lon}, ${lat}), 4326))
        RETURNING id;
      `;

      const alojamiento = await prisma.alojamiento.create({
        data: {
          ...mapPropertyBooleans(propertyData),
          precio: Number(propertyData.precio),
          habitaciones: Number(propertyData.habitaciones),
          banos: Number(propertyData.banos),
          plazasLibres: Number(propertyData.plazasLibres),
          superficie: Number(propertyData.superficie),
          tipoAlojamiento: propertyData.tipoAlojamiento,
          infoExtra: propertyData.infoExtra,
          estado: "Pendiente",
          propietario: {
            connect: { id: parseInt(managerUsuarioId) },
          },
          ubicacion: {
            connect: { id: ubicacion.id },
          },
          photoUrls: [],
        },
      });

      // ➜ mover archivos de temp a carpeta final con ID real
      const finalDir = path.join(process.cwd(), "public", "alojamientos", String(alojamiento.id));
      fs.mkdirSync(finalDir, { recursive: true });

      const photoUrls = files.map((file) => {
        const filename = path.basename(file.filename);
        const newPath = path.join(finalDir, filename);
        fs.renameSync(path.join(tempDir, filename), newPath);
        return `/alojamientos/${alojamiento.id}/${filename}`;
      });

      const updated = await prisma.alojamiento.update({
        where: { id: alojamiento.id },
        data: { photoUrls },
        include: { propietario: true, ubicacion: true },
      });

      // Limpieza carpeta temporal
      fs.rmdirSync(tempDir, { recursive: true });

      res.status(201).json(updated);
    } catch (err: any) {
      res.status(500).json({ message: `Error al crear la propiedad: ${err.message}` });
    }
  });
};


export const uploadPropertyImages = async (req: Request, res: Response) => {
  const alojamientoId = Number(req.params.id);
  if (isNaN(alojamientoId)) {
    return res.status(400).json({ message: "ID de alojamiento inválido" });
  }

  const upload = getMulterForAlojamiento(alojamientoId).array("photos");

  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ message: "Error al subir imágenes", error: err.message });
    }

    const files = req.files as Express.Multer.File[];
    if (!files || files.length === 0) {
      return res.status(400).json({ message: "No se han subido imágenes" });
    }

    const photoUrls = files.map((file) => `/alojamientos/${alojamientoId}/${file.filename}`);

    try {
      const updated = await prisma.alojamiento.update({
        where: { id: alojamientoId },
        data: { photoUrls },
      });

      return res.status(200).json({ message: "Imágenes actualizadas", photoUrls });
    } catch (error: any) {
      return res.status(500).json({ message: "Error al actualizar las URLs de imágenes", error: error.message });
    }
  });
};

// Mapeo de booleanos
function mapPropertyBooleans(data: any) {
  const booleanFields = [
    "esDestacado","hayTelevision", "hayTelefono", "hayInternet", "hayTerraza", "hayAscensor", "hayGaraje",
    "hayLavavajillas", "hayHorno", "hayMicroondas", "hayNevera", "hayLavadora", "haySecadora",
    "hayPortero", "hayMuebles", "hayCalefaccion", "hayAireAcondicionado", "hayGas", "hayPiscina",
    "hayZonaComunitaria", "hayGimnasio", "aguaIncluido", "gasIncluido", "internetIncluido", "electricidadIncluido"
  ];

  const result: any = { ...data };
  for (const field of booleanFields) {
    if (field in result) {
      result[field] = result[field] === "true";
    }
  }
  return result;
}


