import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IOperationsRepository } from "../../../operations/repositories/IOperationsRepository";
import { ICreatePackageDTO } from "../../dtos/ICreatePackageDTO";
import { IPackageRepository } from "../../repositories/IPackagesRepository";

@injectable()
export class CreatePackageUseCase {
  constructor(
    @inject("PackagesRepository")
    private packagesRepository: IPackageRepository,

    @inject("OperationsRepository")
    private operationsRepository: IOperationsRepository
  ) {}

  async execute({ id_operation, type_note }: ICreatePackageDTO) {
    const findOperation = await this.operationsRepository.findById(
      id_operation
    );

    if (!findOperation) {
      throw new AppError("Operation cannot find");
    }

    if (type_note !== findOperation.note_preference) {
      throw new AppError("Type note is invalid");
    }

    const findPackage = await this.packagesRepository.findMany(id_operation);

    const value = findPackage.reduce((acc, value) => {
      return acc + value.type_note;
    }, 0);

    if (value >= findOperation.value) {
      throw new AppError("Package closed");
    }

    if (findPackage.length === 50) {
      throw new Error("Number of notes limit");
    }

    const closed_at =
      value + type_note === findOperation.value ? new Date() : undefined;

    const createPackage = await this.packagesRepository.create(
      id_operation,
      type_note,
      closed_at
    );

    return createPackage;
  }
}
