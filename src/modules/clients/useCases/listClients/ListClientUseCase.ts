import { inject, injectable } from "tsyringe";
import { Clients } from "../../../../entities/Clients";
import { IClientsRepository } from "../../repositories/IClientsRepository";

@injectable()
export class ListClientUseCase {
  constructor(
    @inject("ClientsRepository")
    private clientsRepository: IClientsRepository
  ) {}
  async execute(): Promise<Object[]> {
    return await this.clientsRepository.findMany();
  }
}
