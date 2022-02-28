import { Router } from "express";
import { clientsRoutes } from "./clients.routes";

export const router = Router();

router.use("/clients", clientsRoutes);
