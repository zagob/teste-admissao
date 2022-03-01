import { Router } from "express";
import { AuthenticateClientController } from "../../../../modules/clients/useCases/authenticateClient/AuthenticateClientController";
import { CreateClientController } from "../../../../modules/clients/useCases/createClient/CreateClientController";
import { ListClientController } from "../../../../modules/clients/useCases/listClients/ListClientController";
import { UpdateClientController } from "../../../../modules/clients/useCases/updateClient/UpdateClientController";

export const clientsRoutes = Router();

const authenticateClientController = new AuthenticateClientController();
const createClientController = new CreateClientController();
const listClientController = new ListClientController();
const updateClientController = new UpdateClientController();

clientsRoutes.post("/auth", authenticateClientController.handle);
clientsRoutes.post("/", createClientController.handle);
clientsRoutes.get("", listClientController.handle);
clientsRoutes.put("/:id", updateClientController.handle);
