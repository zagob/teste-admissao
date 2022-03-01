import { Operations } from "@prisma/client";
import { prisma } from "../../../../database/ConnectionPrisma";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateOperationDTO } from "../../dtos/ICreateOperationDTO";
import { IFindByIdDTO } from "../../dtos/IFindByIdDTO";
import { IOperationsRepository } from "../../repositories/IOperationsRepository";

export class OperationsRepository implements IOperationsRepository {
  async create({
    id_client,
    note_preference,
    value,
  }: ICreateOperationDTO): Promise<Object> {
    const operation = await prisma.operations.create({
      data: {
        id_client,
        value,
        note_preference,
      },
    });

    return operation;
  }

  async list(): Promise<Object[]> {
    const listOperation = await prisma.operations.findMany();

    return listOperation;
  }

  async findById(id_operation: string): Promise<Operations | null> {
    const listOperationId = await prisma.operations.findFirst({
      where: {
        id: id_operation,
      },
    });

    return listOperationId;
  }
}
