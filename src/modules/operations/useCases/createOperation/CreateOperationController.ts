import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateOperationUseCase } from "./CreateOperationUseCase";

export class CreateOperationController {
  async handle(request: Request, response: Response) {
    const { value, note_preference } = request.body;
    const id_client = request.id_client;

    const createOperationUseCase = container.resolve(CreateOperationUseCase);

    const result = await createOperationUseCase.execute({
      id_client,
      value,
      note_preference,
    });

    return response.json(result);
  }
}
