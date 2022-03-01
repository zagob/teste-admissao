import { container, inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateOperationDTO } from "../../dtos/ICreateOperationDTO";
import { IOperationsRepository } from "../../repositories/IOperationsRepository";

@injectable()
export class CreateOperationUseCase {
  constructor(
    @inject("OperationsRepository")
    private operationsRepository: IOperationsRepository
  ) {}

  async execute({
    id_client,
    note_preference,
    value,
  }: ICreateOperationDTO): Promise<Object> {
    if (
      note_preference !== 10 &&
      note_preference !== 50 &&
      note_preference !== 100
    ) {
      throw new AppError("Invalid type note");
    }

    const createOperation = await this.operationsRepository.create({
      id_client,
      note_preference,
      value,
    });

    return createOperation;
  }
}
