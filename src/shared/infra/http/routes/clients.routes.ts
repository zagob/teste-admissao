import { Router } from "express";
import { AuthenticateClientController } from "../../../../modules/clients/useCases/authenticateClient/AuthenticateClientController";
import { CreateClientController } from "../../../../modules/clients/useCases/createClient/CreateClientController";
import { DeleteClientController } from "../../../../modules/clients/useCases/deleteClients/DeleteClientController";
import { ListClientController } from "../../../../modules/clients/useCases/listClients/ListClientController";
import { UpdateClientController } from "../../../../modules/clients/useCases/updateClient/UpdateClientController";

export const clientsRoutes = Router();

const authenticateClientController = new AuthenticateClientController();
const createClientController = new CreateClientController();
const listClientController = new ListClientController();
const updateClientController = new UpdateClientController();
const deleteClientController = new DeleteClientController();

clientsRoutes.post("/auth", authenticateClientController.handle);
clientsRoutes.post("/", createClientController.handle);
clientsRoutes.get("", listClientController.handle);
clientsRoutes.put("/:id", updateClientController.handle);
clientsRoutes.delete("/delete/:id_client", deleteClientController.handle);
