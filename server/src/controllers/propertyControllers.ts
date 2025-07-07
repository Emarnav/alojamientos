import { Request, Response } from "express";
import { PrismaClient, Prisma,  } from "@prisma/client";
import { wktToGeoJSON } from "@terraformer/wkt";
import { Location } from "@prisma/client";
import axios from "axios";

const prisma = new PrismaClient();


export const updateProperty = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const files = req.files as Express.Multer.File[];
    const {
      direccion,
      localidad,
      provincia,
      pais,
      codigoPostal,
      managerCognitoId,
      ...propertyData
    } = req.body;

    const property = await prisma.alojamiento.findUnique({
      where: { id: Number(id) },
      include: { location: true, propietario: true },
    });

    if (!property) {
      res.status(404).json({ message: "Alojamiento no encontrado" });
      return;
    }

    let photoUrls = property.photoUrls;
    if (files && files.length > 0) {
      photoUrls = files.map((file) => `/uploads/${file.filename}`);
    }

    const geocodingUrl = `https://nominatim.openstreetmap.org/search?${new URLSearchParams(
      {
        street: direccion,
        city: localidad,
        country: "Spain",
        postalcode: codigoPostal,
        format: "json",
        limit: "1",
      }
    ).toString()}`;
    const geocodingResponse = await axios.get(geocodingUrl, {
      headers: {
        "User-Agent": "UCHCEU (desarrolloweb@uchceu.es)",
      },
    });
    const [longitude, latitude] =
      geocodingResponse.data[0]?.lon && geocodingResponse.data[0]?.lat
        ? [
            parseFloat(geocodingResponse.data[0]?.lon),
            parseFloat(geocodingResponse.data[0]?.lat),
          ]
        : [0, 0];

    await prisma.$executeRaw`
      UPDATE "Location"
      SET address = ${direccion},
          city = ${localidad},
          state = ${provincia},
          country = 'Spain',
          "postalCode" = ${codigoPostal},
          coordinates = ST_SetSRID(ST_MakePoint(${longitude}, ${latitude}), 4326)
      WHERE id = ${property.locationId};
    `;

    const updatedProperty = await prisma.alojamiento.update({
      where: { id: Number(id) },
      data: {
        ...propertyData,
        photoUrls,
        managerCognitoId,
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
      },
      include: { location: true, propietario: true },
    });

    res.json(updatedProperty);
  } catch (err: any) {
    res
      .status(500)
      .json({ message: `Error al actualizar la propiedad: ${err.message}` });
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
          'direccion', l.address,
          'localidad', l.city,
          'provincia', l.state,
          'codigoPostal', l."postalCode",
          'coordinates', json_build_object(
            'longitude', ST_X(l."coordinates"::geometry),
            'latitude', ST_Y(l."coordinates"::geometry)
          )
        ) as location
      FROM "Alojamiento" p
      JOIN "Location" l ON p."locationId" = l.id
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
        location: true,
        propietario: true,
      },
    });

    if (property) {
      const coordinates: { coordinates: string }[] =
        await prisma.$queryRaw`SELECT ST_asText(coordinates) as coordinates from "Location" where id = ${property.location.id}`;

      const geoJSON: any = wktToGeoJSON(coordinates[0]?.coordinates || "");
      const longitude = geoJSON.coordinates[0];
      const latitude = geoJSON.coordinates[1];

      const propertyWithCoordinates = {
        ...property,
        location: {
          ...property.location,
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

export const createProperty = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const files = req.files as Express.Multer.File[];
    const {
      direccion,
      localidad,
      provincia,
      pais,
      codigoPostal,
      managerCognitoId,
      ...propertyData
    } = req.body;

    // 📌 Guardar las rutas de las imágenes en la base de datos
    const photoUrls = files.map((file) => `/uploads/${file.filename}`);

    const geocodingUrl = `https://nominatim.openstreetmap.org/search?${new URLSearchParams(
      {
        street: direccion,
        city: localidad,
        country: "Spain",
        postalcode: codigoPostal,
        format: "json",
        limit: "1",
      }
    ).toString()}`;
    const geocodingResponse = await axios.get(geocodingUrl, {
      headers: {
        "User-Agent": "UCHCEU (desarrolloweb@uchceu.es)",
      },
    });
    const [longitude, latitude] =
      geocodingResponse.data[0]?.lon && geocodingResponse.data[0]?.lat
        ? [
            parseFloat(geocodingResponse.data[0]?.lon),
            parseFloat(geocodingResponse.data[0]?.lat),
          ]
        : [0, 0];

    // create location
    const [location] = await prisma.$queryRaw<Location[]>`
      INSERT INTO "Location" (address, city, state, country, "postalCode", coordinates)
      VALUES (${direccion}, ${localidad}, ${provincia}, 'Spain', ${codigoPostal}, ST_SetSRID(ST_MakePoint(${longitude}, ${latitude}), 4326))
      RETURNING id, address, city, state, country, "postalCode", ST_AsText(coordinates) as coordinates;
    `;

    // create property
    const newProperty = await prisma.alojamiento.create({
      data: {
        ...propertyData,
        photoUrls,
        tipoAlojamiento: propertyData.tipoAlojamiento,
        locationId: location.id,
        managerCognitoId,
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
      },
      include: {
        location: true,
        propietario: true,
      },
    });

    res.status(201).json(newProperty);
  } catch (err: any) {
    res
      .status(500)
      .json({ message: `Error al crear la propiedad: ${err.message}` });
  }
};
