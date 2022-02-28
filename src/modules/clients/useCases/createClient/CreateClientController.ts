import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateClientUseCase } from "./CreateClientUseCase";

export class CreateClientController {
  async handle(request: Request, response: Response) {
    const {
      login,
      password: passwordHash,
      name,
      address,
      birth_date,
      cpf,
    } = request.body;

    const createClientUseCase = container.resolve(CreateClientUseCase);

    const result = await createClientUseCase.execute({
      login,
      password: passwordHash,
      name,
      address,
      birth_date,
      cpf,
    });

    return response.status(201).json(result);
  }
}
