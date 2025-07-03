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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProperty = exports.getProperty = exports.getProperties = void 0;
const client_1 = require("@prisma/client");
const wkt_1 = require("@terraformer/wkt");
const axios_1 = __importDefault(require("axios"));
const prisma = new client_1.PrismaClient();
const getProperties = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { favoriteIds, priceMin, priceMax, beds, baths, propertyType, squareFeetMin, squareFeetMax, amenities, availableFrom, latitude, longitude, } = req.query;
        let whereConditions = [];
        if (favoriteIds) {
            const favoriteIdsArray = favoriteIds.split(",").map(Number);
            whereConditions.push(client_1.Prisma.sql `p.id IN (${client_1.Prisma.join(favoriteIdsArray)})`);
        }
        if (priceMin) {
            whereConditions.push(client_1.Prisma.sql `p."precio" >= ${Number(priceMin)}`);
        }
        if (priceMax) {
            whereConditions.push(client_1.Prisma.sql `p."precio" <= ${Number(priceMax)}`);
        }
        if (beds && beds !== "any") {
            whereConditions.push(client_1.Prisma.sql `p.habitaciones >= ${Number(beds)}`);
        }
        if (baths && baths !== "any") {
            whereConditions.push(client_1.Prisma.sql `p.banos >= ${Number(baths)}`);
        }
        if (squareFeetMin) {
            whereConditions.push(client_1.Prisma.sql `p."superficie" >= ${Number(squareFeetMin)}`);
        }
        if (squareFeetMax) {
            whereConditions.push(client_1.Prisma.sql `p."superficie" <= ${Number(squareFeetMax)}`);
        }
        if (propertyType && propertyType !== "any") {
            whereConditions.push(client_1.Prisma.sql `p."tipoAlojamiento" = ${propertyType}::"TipoAlojamiento"`);
        }
        if (amenities && amenities !== "any") {
            const amenitiesArray = amenities.split(",");
            whereConditions.push(client_1.Prisma.sql `p.amenities @> ${amenitiesArray}`);
        }
        if (availableFrom && availableFrom !== "any") {
            const availableFromDate = typeof availableFrom === "string" ? availableFrom : null;
            if (availableFromDate) {
                const date = new Date(availableFromDate);
                if (!isNaN(date.getTime())) {
                    whereConditions.push(client_1.Prisma.sql `EXISTS (
              SELECT 1 FROM "Lease" l 
              WHERE l."propertyId" = p.id 
              AND l."startDate" <= ${date.toISOString()}
            )`);
                }
            }
        }
        if (latitude && longitude) {
            const lat = parseFloat(latitude);
            const lng = parseFloat(longitude);
            const radiusInKilometers = 1000;
            const degrees = radiusInKilometers / 111; // Converts kilometers to degrees
            whereConditions.push(client_1.Prisma.sql `ST_DWithin(
          l.coordinates::geometry,
          ST_SetSRID(ST_MakePoint(${lng}, ${lat}), 4326),
          ${degrees}
        )`);
        }
        const completeQuery = client_1.Prisma.sql `
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
      ${whereConditions.length > 0
            ? client_1.Prisma.sql `WHERE ${client_1.Prisma.join(whereConditions, " AND ")}`
            : client_1.Prisma.empty}
    `;
        const properties = yield prisma.$queryRaw(completeQuery);
        res.json(properties);
    }
    catch (error) {
        res
            .status(500)
            .json({ message: `Error al recuperar los alojamientos: ${error.message}` });
    }
});
exports.getProperties = getProperties;
const getProperty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { id } = req.params;
        const property = yield prisma.alojamiento.findUnique({
            where: { id: Number(id) },
            include: {
                location: true,
                propietario: true,
            },
        });
        if (property) {
            const coordinates = yield prisma.$queryRaw `SELECT ST_asText(coordinates) as coordinates from "Location" where id = ${property.location.id}`;
            const geoJSON = (0, wkt_1.wktToGeoJSON)(((_a = coordinates[0]) === null || _a === void 0 ? void 0 : _a.coordinates) || "");
            const longitude = geoJSON.coordinates[0];
            const latitude = geoJSON.coordinates[1];
            const propertyWithCoordinates = Object.assign(Object.assign({}, property), { location: Object.assign(Object.assign({}, property.location), { coordinates: {
                        longitude,
                        latitude,
                    } }) });
            res.json(propertyWithCoordinates);
        }
    }
    catch (err) {
        res
            .status(500)
            .json({ message: `Error al recuperar el alojamiento: ${err.message}` });
    }
});
exports.getProperty = getProperty;
const createProperty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    try {
        const files = req.files;
        const _e = req.body, { direccion, localidad, provincia, pais, codigoPostal, managerCognitoId } = _e, propertyData = __rest(_e, ["direccion", "localidad", "provincia", "pais", "codigoPostal", "managerCognitoId"]);
        // 📌 Guardar las rutas de las imágenes en la base de datos
        const photoUrls = files.map((file) => `/uploads/${file.filename}`);
        const geocodingUrl = `https://nominatim.openstreetmap.org/search?${new URLSearchParams({
            street: direccion,
            city: localidad,
            country: "Spain",
            postalcode: codigoPostal,
            format: "json",
            limit: "1",
        }).toString()}`;
        const geocodingResponse = yield axios_1.default.get(geocodingUrl, {
            headers: {
                "User-Agent": "UCHCEU (desarrolloweb@uchceu.es)",
            },
        });
        const [longitude, latitude] = ((_a = geocodingResponse.data[0]) === null || _a === void 0 ? void 0 : _a.lon) && ((_b = geocodingResponse.data[0]) === null || _b === void 0 ? void 0 : _b.lat)
            ? [
                parseFloat((_c = geocodingResponse.data[0]) === null || _c === void 0 ? void 0 : _c.lon),
                parseFloat((_d = geocodingResponse.data[0]) === null || _d === void 0 ? void 0 : _d.lat),
            ]
            : [0, 0];
        // create location
        const [location] = yield prisma.$queryRaw `
      INSERT INTO "Location" (address, city, state, country, "postalCode", coordinates)
      VALUES (${direccion}, ${localidad}, ${provincia}, 'Spain', ${codigoPostal}, ST_SetSRID(ST_MakePoint(${longitude}, ${latitude}), 4326))
      RETURNING id, address, city, state, country, "postalCode", ST_AsText(coordinates) as coordinates;
    `;
        // create property
        const newProperty = yield prisma.alojamiento.create({
            data: Object.assign(Object.assign({}, propertyData), { photoUrls, tipoAlojamiento: propertyData.tipoAlojamiento, locationId: location.id, managerCognitoId, hayTelevision: propertyData.hayTelevision === "true", hayTelefono: propertyData.hayTelefono === "true", hayInternet: propertyData.hayInternet === "true", hayTerraza: propertyData.hayTerraza === "true", hayAscensor: propertyData.hayAscensor === "true", hayGaraje: propertyData.hayGaraje === "true", hayLavavajillas: propertyData.hayLavavajillas === "true", hayHorno: propertyData.hayHorno === "true", hayMicroondas: propertyData.hayMicroondas === "true", hayNevera: propertyData.hayNevera === "true", hayLavadora: propertyData.hayLavadora === "true", haySecadora: propertyData.haySecadora === "true", hayPortero: propertyData.hayPortero === "true", hayMuebles: propertyData.hayMuebles === "true", hayCalefaccion: propertyData.hayCalefaccion === "true", hayAireAcondicionado: propertyData.hayAireAcondicionado === "true", hayGas: propertyData.hayGas === "true", hayPiscina: propertyData.hayPiscina === "true", hayZonaComunitaria: propertyData.hayZonaComunitaria === "true", hayGimnasio: propertyData.hayGimnasio === "true", aguaIncluido: propertyData.aguaIncluido === "true", gasIncluido: propertyData.gasIncluido === "true", electricidadIncluido: propertyData.electricidadIncluido === "true", internetIncluido: propertyData.internetIncluido === "true", precio: parseFloat(propertyData.precio), habitaciones: parseInt(propertyData.habitaciones), banos: parseFloat(propertyData.banos), plazasLibres: parseInt(propertyData.plazasLibres), superficie: parseInt(propertyData.superficie) }),
            include: {
                location: true,
                propietario: true,
            },
        });
        res.status(201).json(newProperty);
    }
    catch (err) {
        res
            .status(500)
            .json({ message: `Error al crear la propiedad: ${err.message}` });
    }
});
exports.createProperty = createProperty;
