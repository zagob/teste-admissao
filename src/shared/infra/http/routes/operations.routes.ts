import { Router } from "express";
import { CreateOperationController } from "../../../../modules/operations/useCases/createOperation/CreateOperationController";
import { ListOperationIdController } from "../../../../modules/operations/useCases/listOperationId/ListOperationIdController";
import { ListOperationsController } from "../../../../modules/operations/useCases/listOperations/ListOperationsController";
import { ensureAuthenticateClient } from "../middlewares/ensureAuthenticate";

export const operationsRouter = Router();

const createOperationController = new CreateOperationController();
const listOperationsController = new ListOperationsController();
const listOperationIdController = new ListOperationIdController();

operationsRouter.post(
  "/create",
  ensureAuthenticateClient,
  createOperationController.handle
);

operationsRouter.get(
  "/listAll",
  ensureAuthenticateClient,
  listOperationsController.handle
);

operationsRouter.get(
  "/list/:id",
  ensureAuthenticateClient,
  listOperationIdController.handle
);
