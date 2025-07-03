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
exports.removeFavoriteProperty = exports.addFavoriteProperty = exports.getCurrentResidences = exports.updateTenant = exports.createTenant = exports.getTenant = void 0;
const client_1 = require("@prisma/client");
const wkt_1 = require("@terraformer/wkt");
const prisma = new client_1.PrismaClient();
const getTenant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cognitoId } = req.params;
        const inquilino = yield prisma.inquilino.findUnique({
            where: { cognitoId },
            include: {
                favoritos: true,
            },
        });
        if (inquilino) {
            res.json(inquilino);
        }
        else {
            res.status(404).json({ message: "No se encontró el inquilino not found" });
        }
    }
    catch (error) {
        res
            .status(500)
            .json({ message: `Error al recuperar el inquilino: ${error.message}` });
    }
});
exports.getTenant = getTenant;
const createTenant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cognitoId, nombre, email, telefono } = req.body;
        const inquilino = yield prisma.inquilino.create({
            data: {
                cognitoId,
                nombre,
                email,
                telefono,
            },
        });
        res.status(201).json(inquilino);
    }
    catch (error) {
        res
            .status(500)
            .json({ message: `Error al crear al inquilino: ${error.message}` });
    }
});
exports.createTenant = createTenant;
const updateTenant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cognitoId } = req.params;
        const { nombre, email, telefono } = req.body;
        const updateTenant = yield prisma.inquilino.update({
            where: { cognitoId },
            data: {
                nombre,
                email,
                telefono,
            },
        });
        res.json(updateTenant);
    }
    catch (error) {
        res
            .status(500)
            .json({ message: `Error actualizando el inquilino: ${error.message}` });
    }
});
exports.updateTenant = updateTenant;
const getCurrentResidences = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cognitoId } = req.params;
        const properties = yield prisma.alojamiento.findMany({
            where: { inquilinos: { some: { cognitoId } } },
            include: {
                location: true,
            },
        });
        const residencesWithFormattedLocation = yield Promise.all(properties.map((property) => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            const coordinates = yield prisma.$queryRaw `SELECT ST_asText(coordinates) as coordinates from "Location" where id = ${property.location.id}`;
            const geoJSON = (0, wkt_1.wktToGeoJSON)(((_a = coordinates[0]) === null || _a === void 0 ? void 0 : _a.coordinates) || "");
            const longitude = geoJSON.coordinates[0];
            const latitude = geoJSON.coordinates[1];
            return Object.assign(Object.assign({}, property), { location: Object.assign(Object.assign({}, property.location), { coordinates: {
                        longitude,
                        latitude,
                    } }) });
        })));
        res.json(residencesWithFormattedLocation);
    }
    catch (err) {
        res
            .status(500)
            .json({ message: `Error al recuperar los alojamientos del propietario: ${err.message}` });
    }
});
exports.getCurrentResidences = getCurrentResidences;
const addFavoriteProperty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cognitoId, propertyId } = req.params;
        const inquilino = yield prisma.inquilino.findUnique({
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
            const updatedTenant = yield prisma.inquilino.update({
                where: { cognitoId },
                data: {
                    favoritos: {
                        connect: { id: propertyIdNumber },
                    },
                },
                include: { favoritos: true },
            });
            res.json(updatedTenant);
        }
        else {
            res.status(409).json({ message: "El alojamiento ya está añadido a favoritos" });
        }
    }
    catch (error) {
        res
            .status(500)
            .json({ message: `Error al añadir el alojamiento a favoritos: ${error.message}` });
    }
});
exports.addFavoriteProperty = addFavoriteProperty;
const removeFavoriteProperty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cognitoId, propertyId } = req.params;
        const propertyIdNumber = Number(propertyId);
        const updatedTenant = yield prisma.inquilino.update({
            where: { cognitoId },
            data: {
                favoritos: {
                    disconnect: { id: propertyIdNumber },
                },
            },
            include: { favoritos: true },
        });
        res.json(updatedTenant);
    }
    catch (err) {
        res
            .status(500)
            .json({ message: `Error al eliminar el alojamiento de favoritos: ${err.message}` });
    }
});
exports.removeFavoriteProperty = removeFavoriteProperty;
