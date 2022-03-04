import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateClientUseCase } from "./UpdateClientUseCase";

export class UpdateClientController {
  async handle(request: Request, response: Response) {
    const { address, birth_date, login, name } = request.body;
    const { id } = request.params;

    const updateClientUseCase = container.resolve(UpdateClientUseCase);

    const result = await updateClientUseCase.execute(response, {
      id,
      address,
      birth_date,
      login,
      name,
    });

    return response.json(result);
  }
}
