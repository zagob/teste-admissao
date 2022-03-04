import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListPackageIdUseCase } from "./ListPackageIdUseCase";

export class ListPackageIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const listPackageIdUseCase = container.resolve(ListPackageIdUseCase);

    const result = await listPackageIdUseCase.execute(id);

    return response.json(result);
  }
}
