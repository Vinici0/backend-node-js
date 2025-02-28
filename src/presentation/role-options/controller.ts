import { Request, Response } from "express";
import { CreateRoleOptionDto, UpdateRoleOptionDto } from "../../domain/dtos";
import {
  CreateRoleOption,
  DeleteRoleOption,
  GetRoleOption,
  GetRoleOptions,
  UpdateRoleOption,
} from "../../domain/";
import { RoleOptionRepository } from "../../domain";

export class RoleOptionController {
  constructor(private readonly roleOptionRepository: RoleOptionRepository) {}

  public getRoleOptions = (req: Request, res: Response) => {
    new GetRoleOptions(this.roleOptionRepository)
      .execute()
      .then((options) => res.json(options))
      .catch((error) => res.status(400).json({ error }));
  };

  public getRoleOptionById = (req: Request, res: Response) => {
    const id = +req.params.id;
    new GetRoleOption(this.roleOptionRepository)
      .execute(id)
      .then((option) => res.json(option))
      .catch((error) => res.status(400).json({ error }));
  };

  public createRoleOption = (req: Request, res: Response) => {
    const [error, createRoleOptionDto] = CreateRoleOptionDto.create(req.body);
    if (error) return res.status(400).json({ error });
    new CreateRoleOption(this.roleOptionRepository)
      .execute(createRoleOptionDto!)
      .then((option) => res.json(option))
      .catch((error) => res.status(400).json({ error }));
  };

  public updateRoleOption = (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateRoleOptionDto] = UpdateRoleOptionDto.create({
      ...req.body,
      id,
    });
    if (error) return res.status(400).json({ error });
    new UpdateRoleOption(this.roleOptionRepository)
      .execute(updateRoleOptionDto!)
      .then((option) => res.json(option))
      .catch((error) => res.status(400).json({ error }));
  };

  public deleteRoleOption = (req: Request, res: Response) => {
    const id = +req.params.id;
    new DeleteRoleOption(this.roleOptionRepository)
      .execute(id)
      .then((option) => res.json(option))
      .catch((error) => res.status(400).json({ error }));
  };
}
