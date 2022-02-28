import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateClientDTO } from "../../dtos/ICreateClientDTO";
import { IClientsRepository } from "../../repositories/IClientsRepository";

@injectable()
export class CreateClientUseCase {
  constructor(
    @inject("ClientsRepository")
    private clientsRepository: IClientsRepository
  ) {}

  async execute({
    login,
    password,
    name,
    address,
    birth_date,
    cpf,
  }: ICreateClientDTO): Promise<ICreateClientDTO> {
    const existClient = await this.clientsRepository.findByLogin(login);

    if (existClient) {
      throw new AppError("Already clients exists");
    }

    const passwordHash = await hash(password, 10);

    const client = await this.clientsRepository.create({
      login,
      password: passwordHash,
      name,
      address,
      birth_date,
      cpf,
    });

    return client;
  }
}
