import { inject, injectable } from "tsyringe";
import { IOperationsRepository } from "../../repositories/IOperationsRepository";

@injectable()
export class ListOperationIdUseCase {
  constructor(
    @inject("OperationsRepository")
    private operationRepository: IOperationsRepository
  ) {}

  async execute(id_operation: string) {
    const findOperation = await this.operationRepository.findById(id_operation);

    return findOperation;
  }
}
