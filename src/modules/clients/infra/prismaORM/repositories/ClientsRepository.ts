import { prisma } from "../../../../../database/ConnectionPrisma";
import { ICreateClientDTO } from "../../../dtos/ICreateClientDTO";
import { IClientsRepository } from "../../../repositories/IClientsRepository";

class ClientsRepository implements IClientsRepository {
  async create({
    login,
    password,
    address,
    birth_date,
    cpf,
    name,
  }: ICreateClientDTO): Promise<ICreateClientDTO> {
    const createClient = await prisma.clients.create({
      data: {
        login,
        password,
        address,
        birth_date,
        cpf,
        name,
      },
    });

    return createClient;
  }

  async findByLogin(login: string): Promise<ICreateClientDTO | null> {
    const existClient = await prisma.clients.findFirst({
      where: {
        login,
      },
    });

    return existClient;
  }
}

export { ClientsRepository };
