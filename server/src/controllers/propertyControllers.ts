import { Request, Response } from "express";
import { PrismaClient, Prisma } from "@prisma/client";
import { getMulterForAlojamiento } from "../multerConfig";
import path from "path";
import fs from "fs";
import { generateUniqueSlug } from "../utils/slugGenerator";


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
        ciudad,
        provincia,
        pais,
        codigoPostal,
        portal,
        piso,
        puerta,
        managerUsuarioId,
        estado,
        alojamientoId: _omitAlojamientoId,
        motivoRechazo,
        existingPhotos,
        ...propertyData
      } = req.body;

      const property = await prisma.alojamiento.findUnique({
        where: { id: alojamientoId },
        include: { propietario: true },
      });

      if (!property) {
        return res.status(404).json({ message: "Alojamiento no encontrado" });
      }

      // 1. Convertir fotos existentes (del frontend)
      const existing = JSON.parse(req.body.existingPhotos ?? "[]");

      // 2. Fotos nuevas subidas ahora
      const newPhotos = files?.map(file => `/uploads/${alojamientoId}/${file.filename}`) ?? [];

      // 3. Combinar todo
      const photoUrls = [...existing, ...newPhotos];

      // 4. Mantener el slug original (no regenerar aunque cambie el nombre)
      let newSlug = property.slug;

      // 5. Actualizar propiedad con nuevos campos de dirección
      const updatedProperty = await prisma.alojamiento.update({
        where: { id: alojamientoId },
        data: {
          ...propertyData,
          slug: newSlug,
          photoUrls,
          managerUsuarioId: Number(managerUsuarioId),
          // Address fields
          direccion,
          ciudad,
          provincia,
          pais: pais || "España",
          codigoPostal,
          portal: portal || null,
          piso: piso || null,
          puerta: puerta || null,

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
        include: { propietario: true },
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

      // 7. Si la propiedad estaba rechazada y se actualizó, cambiar estado a Pendiente
      if (property.estado === "Rechazado") {
        // Cambiar el estado a Pendiente ya que se ha editado
        await prisma.alojamiento.update({
          where: { id: alojamientoId },
          data: { estado: "Pendiente", motivoRechazo: null }
        });
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
export const getProperties = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      priceMin,
      priceMax,
      beds,
      baths,
      propertyType,
      squareFeetMin,
      squareFeetMax,
      latitude,
      longitude,
      provincia,
      page = "1",
      limit = "24",
      sortBy = "featured"
    } = req.query;

    const pageNum = parseInt(page as string);
    const limitNum = parseInt(limit as string);
    const skip = (pageNum - 1) * limitNum;

    const filters: any = {
      // Solo mostrar alojamientos aprobados (excluir suspendidos, pendientes y rechazados)
      estado: "Aprobado"
    };

    if (priceMin) filters.precio = { gte: Number(priceMin) };
    if (priceMax) filters.precio = { ...filters.precio, lte: Number(priceMax) };
    if (beds && beds !== "any") filters.habitaciones = { gte: Number(beds) };
    if (baths && baths !== "any") filters.banos = { gte: Number(baths) };
    if (squareFeetMin) filters.superficie = { gte: Number(squareFeetMin) };
    if (squareFeetMax) filters.superficie = { ...filters.superficie, lte: Number(squareFeetMax) };
    if (propertyType && propertyType !== "any") filters.tipoAlojamiento = propertyType;

    // Filtro por provincia
    if (provincia && provincia !== "any") {
      filters.provincia = provincia;
    }

    // Orden de resultados optimizado para 150 alojamientos
    let orderBy: any[] = [];
    switch (sortBy) {
      case "featured":
        orderBy = [
          { esDestacado: 'desc' },
          { postedDate: 'desc' }
        ];
        break;
      case "newest":
        orderBy = [{ postedDate: 'desc' }];
        break;
      case "price_asc":
        orderBy = [{ precio: 'asc' }];
        break;
      case "price_desc":
        orderBy = [{ precio: 'desc' }];
        break;
      case "popularity":
        // Podrías agregar un campo de popularidad basado en vistas/favoritos
        orderBy = [
          { esDestacado: 'desc' },
          { postedDate: 'desc' }
        ];
        break;
      default:
        orderBy = [
          { esDestacado: 'desc' },
          { postedDate: 'desc' }
        ];
    }

    // Obtener total para paginación (más eficiente)
    const total = await prisma.alojamiento.count({
      where: filters
    });

    const alojamientos = await prisma.alojamiento.findMany({
      where: filters,
      include: {
        propietario: {
          select: {
            id: true,
            nombre: true,
            email: true,
            telefono: true,
          },
        },
      },
      orderBy,
      skip,
      take: limitNum
    });

    res.json({
      alojamientos: alojamientos,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        totalPages: Math.ceil(total / limitNum),
        hasNext: pageNum * limitNum < total,
        hasPrev: pageNum > 1
      },
      filters: {
        applied: Object.keys(filters).filter(key => key !== 'estado').length > 0,
        count: total
      }
    });
  } catch (error: any) {
    res.status(500).json({
      message: `Error al recuperar los alojamientos: ${error.message}`,
    });
  }
};
export const getProperty = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id, slug } = req.params;
    const identifier = slug || id;

    // Validación de entrada
    if (!identifier || identifier.trim() === '') {
      res.status(400).json({ message: "ID del alojamiento es requerido" });
      return;
    }

    // Validar que el ID/slug no sea demasiado largo
    if (identifier.length > 150) {
      res.status(400).json({ message: "ID del alojamiento demasiado largo" });
      return;
    }

    // Determinar si el parámetro es un número (ID) o string (slug)
    const isNumeric = /^\d+$/.test(identifier);
    const isValidSlug = /^[a-z0-9-]+$/.test(identifier);

    if (!isNumeric && !isValidSlug) {
      res.status(400).json({ message: "Formato de ID/slug no válido" });
      return;
    }
    
    const property = await prisma.alojamiento.findUnique({
      where: isNumeric 
        ? { 
            id: Number(identifier),
            // Solo mostrar alojamientos aprobados (excluir suspendidos, pendientes y rechazados)
            estado: "Aprobado"
          }
        : {
            slug: identifier,
            // Solo mostrar alojamientos aprobados (excluir suspendidos, pendientes y rechazados)
            estado: "Aprobado"
          },
      include: {
        propietario: {
          select: {
            id: true,
            nombre: true,
            email: true,
            telefono: true,
            tipo: true,
            isEmailVerified: true,
            createdAt: true
            // No incluir password ni otros campos sensibles
          }
        },
      },
    });

    if (!property) {
      res.status(404).json({ message: "Alojamiento no encontrado" });
      return;
    }

    res.json(property);
  } catch (err: any) {
    console.error('Error al recuperar alojamiento:', err);
    res.status(500).json({ message: "Error interno del servidor" });
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
      const { direccion, ciudad, provincia, codigoPostal, pais, portal, piso, puerta, managerUsuarioId, ...propertyData } = req.body;

      // Verificar que el propietario no esté suspendido
      const propietario = await prisma.usuario.findUnique({
        where: { id: parseInt(managerUsuarioId) },
        select: { isSuspended: true, tipo: true },
      });

      if (!propietario) {
        // Limpiar archivos temporales
        if (tempDir) {
          fs.rmSync(tempDir, { recursive: true, force: true });
        }
        return res.status(404).json({ message: "Propietario no encontrado" });
      }

      if (propietario.isSuspended) {
        // Limpiar archivos temporales
        if (tempDir) {
          fs.rmSync(tempDir, { recursive: true, force: true });
        }
        return res.status(403).json({ message: "Tu cuenta está suspendida y no puedes subir nuevos alojamientos" });
      }

      // Generar slug único basado en el nombre
      const slug = await generateUniqueSlug(
        propertyData.nombre,
        async (slug: string) => {
          const existing = await prisma.alojamiento.findUnique({
            where: { slug }
          });
          return !!existing;
        }
      );

      const alojamiento = await prisma.alojamiento.create({
        data: {
          ...mapPropertyBooleans(propertyData),
          slug,
          // Address fields
          direccion,
          ciudad,
          provincia,
          pais: pais || "España",
          codigoPostal,
          portal: portal || null,
          piso: piso || null,
          puerta: puerta || null,
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
        return `/uploads/${alojamiento.id}/${filename}`;
      });

      const updated = await prisma.alojamiento.update({
        where: { id: alojamiento.id },
        data: { photoUrls },
        include: { propietario: true },
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

    const photoUrls = files.map((file) => `/uploads/${alojamientoId}/${file.filename}`);

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

// Republicar alojamiento suspendido (cambiar estado de "Suspendido" a "Pendiente")
export const republishProperty = async (req: Request, res: Response): Promise<void> => {
  try {
    const alojamientoId = Number(req.params.id);
    const { userId } = req.body;

    if (isNaN(alojamientoId)) {
      res.status(400).json({ message: "ID de alojamiento inválido" });
      return;
    }

    // Verificar que el alojamiento existe y pertenece al propietario
    const alojamiento = await prisma.alojamiento.findUnique({
      where: { id: alojamientoId },
      include: {
        propietario: true,
      }
    });

    if (!alojamiento) {
      res.status(404).json({ message: "Alojamiento no encontrado" });
      return;
    }

    // Verificar que el propietario es el dueño del alojamiento
    if (alojamiento.managerUsuarioId !== userId) {
      res.status(403).json({ message: "No tienes permisos para republicar este alojamiento" });
      return;
    }

    // Verificar que el propietario no esté suspendido
    if (alojamiento.propietario?.isSuspended) {
      res.status(403).json({ message: "Tu cuenta está suspendida, no puedes republicar alojamientos" });
      return;
    }

    // Verificar que el alojamiento esté en estado "Suspendido"
    if (alojamiento.estado !== "Suspendido") {
      res.status(400).json({ message: "Solo se pueden republicar alojamientos suspendidos" });
      return;
    }

    // Cambiar estado a "Pendiente" para revisión
    const updatedAlojamiento = await prisma.alojamiento.update({
      where: { id: alojamientoId },
      data: {
        estado: "Pendiente",
      },
      include: {
        propietario: {
          select: {
            id: true,
            nombre: true,
            email: true,
          }
        }
      }
    });

    res.status(200).json({
      message: "Alojamiento republicado correctamente. Será revisado por el administrador.",
      alojamiento: updatedAlojamiento
    });

  } catch (error: any) {
    console.error("Error al republicar alojamiento:", error);
    res.status(500).json({ message: "Error al republicar el alojamiento", error: error.message });
  }
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


