// src/presentation/controller/login.controller.ts
import { Request, Response } from "express";
import { LoginUserDto } from "../../domain/dtos/auth/login-user.dto";
import { LoginUser } from "../../domain/use-cases/auth/login";
import { UserQueryRepository } from "../../domain";

export class LoginController {
  constructor(private readonly userRepository: UserQueryRepository) {}

  public async login(req: Request, res: Response) {
    try {
      const [error, loginDto] = LoginUserDto.create(req.body);
      if (error) {
        res.status(400).json({ error });
        return;
      }
      const useCase = new LoginUser(this.userRepository);
      const response = await useCase.execute(loginDto!);
      res.json(response);
    } catch (error) {
      res.status(400).json({
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }
}
