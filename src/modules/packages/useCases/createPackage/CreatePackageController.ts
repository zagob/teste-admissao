import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreatePackageUseCase } from "./CreatePackageUseCase";

export class CreatePackageController {
  async handle(request: Request, response: Response) {
    const { type_note } = request.body;
    const { id_operation } = request.params;

    const createPackageUseCase = container.resolve(CreatePackageUseCase);

    const result = await createPackageUseCase.execute({
      id_operation,
      type_note,
    });

    return response.json(result);
  }
}
