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
exports.getManagerProperties = exports.updateManager = exports.createManager = exports.getManager = void 0;
const client_1 = require("@prisma/client");
const wkt_1 = require("@terraformer/wkt");
const prisma = new client_1.PrismaClient();
const getManager = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cognitoId } = req.params;
        const propietario = yield prisma.propietario.findUnique({
            where: { cognitoId },
        });
        if (propietario) {
            res.json(propietario);
        }
        else {
            res.status(404).json({ message: "No se ha encontrado al propietario" });
        }
    }
    catch (error) {
        res
            .status(500)
            .json({ message: `Error al recuperar el propietario: ${error.message}` });
    }
});
exports.getManager = getManager;
const createManager = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cognitoId, nombre, email, telefono } = req.body;
        const propietario = yield prisma.propietario.create({
            data: {
                cognitoId,
                nombre: nombre,
                email,
                telefono: telefono,
            },
        });
        res.status(201).json(propietario);
    }
    catch (error) {
        res
            .status(500)
            .json({ message: `Error creating manager: ${error.message}` });
    }
});
exports.createManager = createManager;
const updateManager = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cognitoId } = req.params;
        const { nombre, email, telefono } = req.body;
        const updateManager = yield prisma.propietario.update({
            where: { cognitoId },
            data: {
                nombre,
                email,
                telefono,
            },
        });
        res.json(updateManager);
    }
    catch (error) {
        res
            .status(500)
            .json({ message: `Error al actualizar al propietario: ${error.message}` });
    }
});
exports.updateManager = updateManager;
const getManagerProperties = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cognitoId } = req.params;
        const properties = yield prisma.alojamiento.findMany({
            where: { managerCognitoId: cognitoId },
            include: {
                location: true,
            },
        });
        const propertiesWithFormattedLocation = yield Promise.all(properties.map((property) => __awaiter(void 0, void 0, void 0, function* () {
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
        res.json(propertiesWithFormattedLocation);
    }
    catch (err) {
        res
            .status(500)
            .json({ message: `Error al recuperar los alojamientos del propietario: ${err.message}` });
    }
});
exports.getManagerProperties = getManagerProperties;
