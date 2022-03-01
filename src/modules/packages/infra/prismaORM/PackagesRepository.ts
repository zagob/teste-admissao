import { prisma } from "../../../../database/ConnectionPrisma";
import { IPackageRepository } from "../../repositories/IPackagesRepository";

export class PackagesRepository implements IPackageRepository {
  async create(
    id_operation: string,
    type_note: number,
    closed_at?: Date
  ): Promise<Object> {
    const newPackage = await prisma.packages.create({
      data: {
        id_operation,
        type_note,
        closed_at,
      },
    });

    return newPackage;
  }

  async findMany(id_operation: string): Promise<{ type_note: number }[]> {
    const packages = await prisma.packages.findMany({
      where: {
        id_operation,
      },
    });

    return packages;
  }
}
