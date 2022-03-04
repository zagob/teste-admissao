import { Router } from "express";
import { CreatePackageController } from "../../../../modules/packages/useCases/createPackage/CreatePackageController";
import { ListPackageIdController } from "../../../../modules/packages/useCases/listPackageId/ListPackageIdController";
import { ensureAuthenticateClient } from "../middlewares/ensureAuthenticate";

export const packagesRouter = Router();

const createPackageController = new CreatePackageController();
const listPackageIdController = new ListPackageIdController();

packagesRouter.post(
  "/create/:id_operation",
  ensureAuthenticateClient,
  createPackageController.handle
);

packagesRouter.get(
  "/list/:id",
  ensureAuthenticateClient,
  listPackageIdController.handle
);
