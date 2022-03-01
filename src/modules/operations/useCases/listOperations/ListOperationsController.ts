import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListOperationsUseCase } from "./ListOperationsUseCase";

export class ListOperationsController {
  async handle(request: Request, response: Response) {
    const listOperationsUseCase = container.resolve(ListOperationsUseCase);

    const result = await listOperationsUseCase.execute();

    return response.json(result);
  }
}
