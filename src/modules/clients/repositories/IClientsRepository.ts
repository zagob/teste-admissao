import { ICreateClientDTO } from "../dtos/ICreateClientDTO";

interface IClientsRepository {
  create(data: ICreateClientDTO): Promise<ICreateClientDTO>;
  findByLogin(login: string): Promise<ICreateClientDTO | null>;
}

export { IClientsRepository };
