import { inject, injectable } from "tsyringe";
import { IOperationsRepository } from "../../repositories/IOperationsRepository";

@injectable()
export class ListOperationIdUseCase {
  constructor(
    @inject("OperationsRepository")
    private operationRepository: IOperationsRepository
  ) {}

  async execute(id: string) {
    const findOperation = await this.operationRepository.findByIdClient(id);

    return findOperation;
  }
}
