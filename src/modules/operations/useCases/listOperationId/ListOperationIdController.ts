import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListOperationIdUseCase } from "./LIstOperationIdUseCase";

export class ListOperationIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    // const id = request.id_client;

    const listOperationIdUseCase = container.resolve(ListOperationIdUseCase);

    const result = await listOperationIdUseCase.execute(id);

    return response.json(result);
  }
}
