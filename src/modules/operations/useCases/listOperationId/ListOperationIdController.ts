import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListOperationIdUseCase } from "./LIstOperationIdUseCase";

export class ListOperationIdController {
  async handle(request: Request, response: Response) {
    const { id_operation } = request.params;

    const listOperationIdUseCase = container.resolve(ListOperationIdUseCase);

    const result = await listOperationIdUseCase.execute(id_operation);

    return response.json(result);
  }
}
