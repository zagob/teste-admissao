import { Router } from "express";
import { clientsRoutes } from "./clients.routes";
import { operationsRouter } from "./operations.routes";
import { packagesRouter } from "./packages.routes";

export const router = Router();

router.use("/clients", clientsRoutes);
router.use("/operations", operationsRouter);
router.use("/packages", packagesRouter);
