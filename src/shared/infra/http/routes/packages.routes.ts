import { Router } from "express";
import { CreatePackageController } from "../../../../modules/packages/useCases/createPackage/CreatePackageController";
import { ensureAuthenticateClient } from "../middlewares/ensureAuthenticate";

export const packagesRouter = Router();

const createPackageController = new CreatePackageController();

packagesRouter.post(
  "/create/:id_operation",
  ensureAuthenticateClient,
  createPackageController.handle
);
