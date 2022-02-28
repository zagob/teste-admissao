import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateClientUseCase } from "./AuthenticateClientUseCase";

export class AuthenticateClientController {
  async handle(request: Request, response: Response) {
    const { login, password } = request.body;

    const authenticateClientUseCase = container.resolve(
      AuthenticateClientUseCase
    );

    const result = await authenticateClientUseCase.execute({
      login,
      password,
    });

    return response.json(result);
  }
}
