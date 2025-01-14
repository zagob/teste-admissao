import { inject, injectable } from "tsyringe";
import { IPackageRepository } from "../../repositories/IPackagesRepository";

@injectable()
export class ListPackageIdUseCase {
  constructor(
    @inject("PackagesRepository")
    private packagesRepository: IPackageRepository
  ) {}

  async execute(id: string) {
    const packages = await this.packagesRepository.findMany(id);

    return packages;
  }
}
