import { container } from "tsyringe";

import { ClientsRepository } from "../../../modules/clients/infra/prismaORM/repositories/ClientsRepository";
import { IClientsRepository } from "../../../modules/clients/repositories/IClientsRepository";

import { OperationsRepository } from "../../../modules/operations/infra/prismaORM/OperationsRepository";
import { IOperationsRepository } from "../../../modules/operations/repositories/IOperationsRepository";

import { PackagesRepository } from "../../../modules/packages/infra/prismaORM/PackagesRepository";
import { IPackageRepository } from "../../../modules/packages/repositories/IPackagesRepository";

container.registerSingleton<IClientsRepository>(
  "ClientsRepository",
  ClientsRepository
);

container.registerSingleton<IOperationsRepository>(
  "OperationsRepository",
  OperationsRepository
);

container.registerSingleton<IPackageRepository>(
  "PackagesRepository",
  PackagesRepository
);
