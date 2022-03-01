import { Request, Response } from "express";
import { container } from "tsyringe";
import { Clients } from "../../../../entities/Clients";
import { ListClientUseCase } from "./ListClientUseCase";

export class ListClientController {
  async handle(request: Request, response: Response) {
    const listClientUseCase = container.resolve(ListClientUseCase);

    const result = await listClientUseCase.execute();

    return response.json(result);
  }
}
