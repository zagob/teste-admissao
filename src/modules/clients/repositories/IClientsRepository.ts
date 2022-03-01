import { ICreateClientDTO } from "../dtos/ICreateClientDTO";
import { IUpdateClientDTO } from "../dtos/IUpdateClientDTO";

interface IClientsRepository {
  create(data: ICreateClientDTO): Promise<ICreateClientDTO>;
  findByLogin(login: string): Promise<ICreateClientDTO | null>;
  findById(id: string): Promise<Object | null>;
  findMany(): Promise<Object[]>;
  update(data: IUpdateClientDTO): Promise<Object>;
}

export { IClientsRepository };
