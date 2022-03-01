import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IUpdateClientDTO } from "../../dtos/IUpdateClientDTO";
import { IClientsRepository } from "../../repositories/IClientsRepository";

@injectable()
export class UpdateClientUseCase {
  constructor(
    @inject("ClientsRepository")
    private clientsRepository: IClientsRepository
  ) {}

  async execute({ id, address, birth_date, login, name }: IUpdateClientDTO) {
    const findClient = await this.clientsRepository.findById(id);

    if (!findClient) {
      throw new AppError("Invalid client Updated");
    }

    const updateClient = await this.clientsRepository.update({
      id,
      address,
      birth_date,
      login,
      name,
    });

    return updateClient;
  }
}
