import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IAuthenticateClientDTO } from "../../dtos/IAuthenticateClientDTO";
import { ICreateClientDTO } from "../../dtos/ICreateClientDTO";
import { IClientsRepository } from "../../repositories/IClientsRepository";

interface IResponse {
  token: string;
  client: {
    id?: string;
    login: string;
    name: string;
    address: string;
    birth_date: Date;
    cpf: string;
  };
}

@injectable()
export class AuthenticateClientUseCase {
  constructor(
    @inject("ClientsRepository")
    private clientsRepository: IClientsRepository
  ) {}
  async execute({
    login,
    password,
  }: IAuthenticateClientDTO): Promise<IResponse> {
    const client = await this.clientsRepository.findByLogin(login);

    if (!client) {
      throw new AppError("Login or password inválid!", 401);
    }

    const passwordMatch = await compare(password, client?.password);

    if (!passwordMatch) {
      throw new AppError("Login or password inválid!", 401);
    }

    const token = sign({ login }, "secret", {
      subject: client.id,
      expiresIn: "1d",
    });

    return {
      token,
      client: {
        login: client.login,
        name: client.name,
        address: client.address,
        birth_date: client.birth_date,
        cpf: client.cpf,
        id: client.id,
      },
    };
  }
}
