import { Operations } from "@prisma/client";
import { ICreateOperationDTO } from "../dtos/ICreateOperationDTO";
import { IFindByIdDTO } from "../dtos/IFindByIdDTO";

export interface IOperationsRepository {
  create(data: ICreateOperationDTO): Promise<Object>;
  list(): Promise<Object[]>;
  findByIdClient(id: string): Promise<Operations[] | null>;
  findById(id_operation: string): Promise<Operations | null>;
}
