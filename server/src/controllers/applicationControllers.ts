import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const listApplications = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { userId, userType } = req.query;

    let whereClause = {};

    if (userId && userType) {
      if (userType === "inquilino") {
        whereClause = { tenantCognitoId: String(userId) };
      } else if (userType === "propietario") {
        whereClause = {
          property: {
            managerCognitoId: String(userId),
          },
        };
      }
    }

    const applications = await prisma.solicitud.findMany({
      where: whereClause,
      include: {
        alojamiento: {
          include: {
            location: true,
            propietario: true,
          },
        },
        inquilino: true,
      },
    });

    function calculateNextPaymentDate(startDate: Date): Date {
      const today = new Date();
      const nextPaymentDate = new Date(startDate);
      while (nextPaymentDate <= today) {
        nextPaymentDate.setMonth(nextPaymentDate.getMonth() + 1);
      }
      return nextPaymentDate;
    }

    const formattedApplications = await Promise.all(
      applications.map(async (app) => {
        const lease = await prisma.lease.findFirst({
          where: {
            inquilino: {
              cognitoId: app.tenantCognitoId,
            },
            alojamientoId: app.alojamientoId,
          },
          orderBy: { startDate: "desc" },
        });

        return {
          ...app,
          property: {
            ...app.alojamiento,
            address: app.alojamiento.location.address,
          },
          manager: app.alojamiento.propietario,
          lease: lease
            ? {
                ...lease,
                nextPaymentDate: calculateNextPaymentDate(lease.startDate),
              }
            : null,
        };
      })
    );

    res.json(formattedApplications);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error retrieving applications: ${error.message}` });
  }
};

export const createApplication = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      applicationDate,
      estado,
      propertyId,
      tenantCognitoId,
      nombre,
      email,
      telefono,
      mensaje,
    } = req.body;

    const property = await prisma.alojamiento.findUnique({
      where: { id: propertyId },
      select: { precio: true},
    });

    if (!property) {
      res.status(404).json({ message: "Alojamiento no encontrado" });
      return;
    }

    const newApplication = await prisma.$transaction(async (prisma) => {
      // Create lease first
      const lease = await prisma.lease.create({
        data: {
          startDate: new Date(), // Today
          endDate: new Date(
        new Date().setFullYear(new Date().getFullYear() + 1)
          ), // 1 year from today
          rent: property.precio,
          deposit: 0,
          alojamiento: {
        connect: { id: propertyId },
          },
          inquilino: {
        connect: { cognitoId: tenantCognitoId },
          },
        },
      });

      // Then create application with lease connection
      const application = await prisma.solicitud.create({
        data: {
          applicationDate: new Date(applicationDate),
          estado,
          nombre,
          email,
          telefono,
          mensaje,
          alojamiento: {
            connect: { id: propertyId },
          },
          inquilino: {
            connect: { cognitoId: tenantCognitoId },
          },
          lease: {
            connect: { id: lease.id },
          },
        },
        include: {
          alojamiento: true,
          inquilino: true,
          lease: true,
        },
      });

      return application;
    });

    res.status(201).json(newApplication);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error creando la solicitud: ${error.message}` });
  }
};

export const updateApplicationStatus = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { estado } = req.body;
    console.log("estado:", estado);

    const application = await prisma.solicitud.findUnique({
      where: { id: Number(id) },
      include: {
        alojamiento: true,
        inquilino: true,
      },
    });

    if (!application) {
      res.status(404).json({ message: "Solicitud no encontrada." });
      return;
    }

    if (estado === "Aprobada") {
      const newLease = await prisma.lease.create({
        data: {
          startDate: new Date(),
          endDate: new Date(
            new Date().setFullYear(new Date().getFullYear() + 1)
          ),
          rent: application.alojamiento.precio,
          deposit: 0,
          alojamientoId: application.alojamientoId,
          tenantCognitoId: application.tenantCognitoId,
        },
      });

      // Update the property to connect the tenant
      await prisma.alojamiento.update({
        where: { id: application.alojamientoId },
        data: {
          inquilinos: {
            connect: { cognitoId: application.tenantCognitoId },
          },
        },
      });

      // Update the application with the new lease ID
      await prisma.solicitud.update({
        where: { id: Number(id) },
        data: { estado, leaseId: newLease.id },
        include: {
          alojamiento: true,
          inquilino: true,
          lease: true,
        },
      });
    } else {
      // Update the application status (for both "Denied" and other statuses)
      await prisma.solicitud.update({
        where: { id: Number(id) },
        data: { estado },
      });
    }

    // Respond with the updated application details
    const updatedApplication = await prisma.solicitud.findUnique({
      where: { id: Number(id) },
      include: {
        alojamiento: true,
        inquilino: true,
        lease: true,
      },
    });

    res.json(updatedApplication);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error al actualizar el estado de la solicitud: ${error.message}` });
  }
};