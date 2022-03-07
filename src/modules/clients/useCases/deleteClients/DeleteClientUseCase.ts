import { inject, injectable } from "tsyringe";
import { IClientsRepository } from "../../repositories/IClientsRepository";

@injectable()
export class DeleteClientUseCase {
  constructor(
    @inject("ClientsRepository")
    private clientsRepository: IClientsRepository
  ) {}
  async execute(id_client: string) {
    const client = await this.clientsRepository.deleteClient(id_client);
 
    return client;
  }
}
