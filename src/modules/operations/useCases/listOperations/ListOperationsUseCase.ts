import { inject, injectable } from "tsyringe";
import { IOperationsRepository } from "../../repositories/IOperationsRepository";

@injectable()
export class ListOperationsUseCase {
  constructor(
    @inject("OperationsRepository")
    private operationsRepository: IOperationsRepository
  ) {}

  async execute() {
    const listOperations = await this.operationsRepository.list();

    return listOperations;
  }
}
