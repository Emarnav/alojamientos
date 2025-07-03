import * as path from "path";

import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { authMiddleware } from "./middleware/authMiddleware";

/* ROUTE IMPORT */
import tenantRoutes from "./routes/tenantRoutes";
import managerRoutes from "./routes/managerRoutes";
import propertyRoutes from "./routes/propertyRoutes";
import leaseRoutes from "./routes/leaseRoutes";
import applicationRoutes from "./routes/applicationRoutes";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* Hacer accesibles las imágenes en /alojamientos */
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

/* ROUTES */
app.get("/", (req, res) => {
  res.send("This is home route");
});

app.use("/api/solicitudes", applicationRoutes);
app.use("/api/alojamientos", propertyRoutes);
app.use("/api/leases", leaseRoutes);
app.use("/api/inquilinos", authMiddleware(["inquilino"]), tenantRoutes);
app.use("/api/propietarios", authMiddleware(["propietario"]), managerRoutes);

/* SERVER */
const port = Number(process.env.PORT) || 3002;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
