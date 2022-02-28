import { Router } from "express";
import { AuthenticateClientController } from "../../../../modules/clients/useCases/authenticateClient/AuthenticateClientController";
import { CreateClientController } from "../../../../modules/clients/useCases/createClient/CreateClientController";

export const clientsRoutes = Router();

const createClientController = new CreateClientController();

const authenticateClientController = new AuthenticateClientController();

clientsRoutes.post("/", createClientController.handle);
clientsRoutes.post("/auth", authenticateClientController.handle);
