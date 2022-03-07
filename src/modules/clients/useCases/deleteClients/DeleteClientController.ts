import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteClientUseCase } from "./DeleteClientUseCase";

export class DeleteClientController {
  async handle(request: Request, response: Response) {
    const { id_client } = request.params;
    
    const deleteClientUseCase = container.resolve(DeleteClientUseCase);

    await deleteClientUseCase.execute(id_client);

    return response.send();
  }
}
