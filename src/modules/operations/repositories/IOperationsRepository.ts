import { Operations } from "@prisma/client";
import { ICreateOperationDTO } from "../dtos/ICreateOperationDTO";
import { IFindByIdDTO } from "../dtos/IFindByIdDTO";

export interface IOperationsRepository {
  create(data: ICreateOperationDTO): Promise<Object>;
  list(): Promise<Object[]>;
  findById(id_operation: string): Promise<Operations | null>;
}
