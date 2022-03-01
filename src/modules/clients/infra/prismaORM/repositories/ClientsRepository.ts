import { prisma } from "../../../../../database/ConnectionPrisma";

import { ICreateClientDTO } from "../../../dtos/ICreateClientDTO";
import { IUpdateClientDTO } from "../../../dtos/IUpdateClientDTO";
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

  async findById(id: string): Promise<Object | null> {
    const client = await prisma.clients.findFirst({
      where: {
        id,
      },
    });

    return client;
  }

  async findMany(): Promise<Object[]> {
    const findClients = await prisma.clients.findMany({
      select: {
        id: true,
        login: true,
        name: true,
        address: true,
        birth_date: true,
        cpf: true,
        created_at: true,
        updated_at: true,
      },
    });

    return findClients;
  }

  async update(data: IUpdateClientDTO): Promise<Object> {
    const updateClient = await prisma.clients.updateMany({
      where: {
        id: data.id,
      },
      data: data,
    });

    return updateClient;
  }
}

export { ClientsRepository };
