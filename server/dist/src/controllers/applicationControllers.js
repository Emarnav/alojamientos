"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateApplicationStatus = exports.createApplication = exports.listApplications = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const listApplications = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, userType } = req.query;
        let whereClause = {};
        if (userId && userType) {
            if (userType === "inquilino") {
                whereClause = { tenantCognitoId: String(userId) };
            }
            else if (userType === "propietario") {
                whereClause = {
                    property: {
                        managerCognitoId: String(userId),
                    },
                };
            }
        }
        const applications = yield prisma.solicitud.findMany({
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
        function calculateNextPaymentDate(startDate) {
            const today = new Date();
            const nextPaymentDate = new Date(startDate);
            while (nextPaymentDate <= today) {
                nextPaymentDate.setMonth(nextPaymentDate.getMonth() + 1);
            }
            return nextPaymentDate;
        }
        const formattedApplications = yield Promise.all(applications.map((app) => __awaiter(void 0, void 0, void 0, function* () {
            const lease = yield prisma.lease.findFirst({
                where: {
                    inquilino: {
                        cognitoId: app.tenantCognitoId,
                    },
                    alojamientoId: app.alojamientoId,
                },
                orderBy: { startDate: "desc" },
            });
            return Object.assign(Object.assign({}, app), { property: Object.assign(Object.assign({}, app.alojamiento), { address: app.alojamiento.location.address }), manager: app.alojamiento.propietario, lease: lease
                    ? Object.assign(Object.assign({}, lease), { nextPaymentDate: calculateNextPaymentDate(lease.startDate) }) : null });
        })));
        res.json(formattedApplications);
    }
    catch (error) {
        res
            .status(500)
            .json({ message: `Error retrieving applications: ${error.message}` });
    }
});
exports.listApplications = listApplications;
const createApplication = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { applicationDate, estado, propertyId, tenantCognitoId, nombre, email, telefono, mensaje, } = req.body;
        const property = yield prisma.alojamiento.findUnique({
            where: { id: propertyId },
            select: { precio: true },
        });
        if (!property) {
            res.status(404).json({ message: "Alojamiento no encontrado" });
            return;
        }
        const newApplication = yield prisma.$transaction((prisma) => __awaiter(void 0, void 0, void 0, function* () {
            // Create lease first
            const lease = yield prisma.lease.create({
                data: {
                    startDate: new Date(), // Today
                    endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)), // 1 year from today
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
            const application = yield prisma.solicitud.create({
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
        }));
        res.status(201).json(newApplication);
    }
    catch (error) {
        res
            .status(500)
            .json({ message: `Error creando la solicitud: ${error.message}` });
    }
});
exports.createApplication = createApplication;
const updateApplicationStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { estado } = req.body;
        console.log("estado:", estado);
        const application = yield prisma.solicitud.findUnique({
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
            const newLease = yield prisma.lease.create({
                data: {
                    startDate: new Date(),
                    endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
                    rent: application.alojamiento.precio,
                    deposit: 0,
                    alojamientoId: application.alojamientoId,
                    tenantCognitoId: application.tenantCognitoId,
                },
            });
            // Update the property to connect the tenant
            yield prisma.alojamiento.update({
                where: { id: application.alojamientoId },
                data: {
                    inquilinos: {
                        connect: { cognitoId: application.tenantCognitoId },
                    },
                },
            });
            // Update the application with the new lease ID
            yield prisma.solicitud.update({
                where: { id: Number(id) },
                data: { estado, leaseId: newLease.id },
                include: {
                    alojamiento: true,
                    inquilino: true,
                    lease: true,
                },
            });
        }
        else {
            // Update the application status (for both "Denied" and other statuses)
            yield prisma.solicitud.update({
                where: { id: Number(id) },
                data: { estado },
            });
        }
        // Respond with the updated application details
        const updatedApplication = yield prisma.solicitud.findUnique({
            where: { id: Number(id) },
            include: {
                alojamiento: true,
                inquilino: true,
                lease: true,
            },
        });
        res.json(updatedApplication);
    }
    catch (error) {
        res
            .status(500)
            .json({ message: `Error al actualizar el estado de la solicitud: ${error.message}` });
    }
});
exports.updateApplicationStatus = updateApplicationStatus;
