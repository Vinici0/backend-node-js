import { Request, Response } from "express";
import { CreateUserDto, UpdateUserDto } from "../../domain/dtos";
import {
  CreateUser,
  DeleteUser,
  GetUser,
  GetUsers,
  UpdateUser,
  UserQueryRepository,
} from "../../domain";
import { UserRepository } from "../../domain/repositories/user.repository";

export class UserController {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly userQueryRepository: UserQueryRepository
  ) {}

  public async getUsers(req: Request, res: Response) {
    try {
      const users = await new GetUsers(this.userRepository).execute();
      res.json(users);
    } catch (error) {
      res.status(400).json({
        error:
          error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  public async getUserById(req: Request, res: Response) {
    try {
      const id = +req.params.id;
      const user = await new GetUser(this.userRepository).execute(id);
      res.json(user);
    } catch (error) {
      res.status(400).json({
        error:
          error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  public async createUser(req: Request, res: Response) {
    try {
      const [error, createUserDto] = await CreateUserDto.create(req.body);
      if (error) {
        res.status(400).json({ error });
        return;
      }
      
      const user = await new CreateUser(this.userRepository, this.userQueryRepository).execute(
        createUserDto!
      );
      res.json(user);
    } catch (error) {
      res.status(400).json({
        error:
          error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  public async updateUser(req: Request, res: Response) {
    try {
      const id = +req.params.id;
      const [error, updateUserDto] = UpdateUserDto.create({
        ...req.body,
        id,
      });
      if (error) {
        res.status(400).json({ error });
        return;
      }
      const user = await new UpdateUser(this.userRepository).execute(
        updateUserDto!
      );
      res.json(user);
    } catch (error) {
      res.status(400).json({
        error:
          error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  public async deleteUser(req: Request, res: Response) {
    try {
      const id = +req.params.id;
      const user = await new DeleteUser(this.userRepository).execute(id);
      res.json(user);
    } catch (error) {
      res.status(400).json({
        error:
          error instanceof Error ? error.message : "Unknown error",
      });
    }
  }
}
