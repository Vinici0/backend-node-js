import { Request, Response } from "express";
import { CreateUserDto, UpdateUserDto } from "../../domain/dtos";
import {
  CreateUser,
  DeleteUser,
  GetUser,
  GetUsers,
  UpdateUser,
} from "../../domain";
import { UserRepository } from "../../domain/repositories/user.repository";

export class UserController {
  constructor(private readonly userRepository: UserRepository) {}

  public getUsers = (req: Request, res: Response) => {
    new GetUsers(this.userRepository)
      .execute()
      .then((users) => res.json(users))
      .catch((error) => res.status(400).json({ error }));
  };

  public getUserById = (req: Request, res: Response) => {
    const id = +req.params.id;
    new GetUser(this.userRepository)
      .execute(id)
      .then((user) => res.json(user))
      .catch((error) => res.status(400).json({ error }));
  };

  public createUser = async (req: Request, res: Response) => {
    const [error, createUserDto] = await CreateUserDto.create(req.body);
    if (error) return res.status(400).json({ error });

    try {
      const user = await new CreateUser(this.userRepository).execute(
        createUserDto!
      );
      return res.json(user);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  };

  public updateUser = (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateUserDto] = UpdateUserDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });
    new UpdateUser(this.userRepository)
      .execute(updateUserDto!)
      .then((user) => res.json(user))
      .catch((error) => res.status(400).json({ error }));
  };

  public deleteUser = (req: Request, res: Response) => {
    const id = +req.params.id;
    new DeleteUser(this.userRepository)
      .execute(id)
      .then((user) => res.json(user))
      .catch((error) => res.status(400).json({ error }));
  };
}
