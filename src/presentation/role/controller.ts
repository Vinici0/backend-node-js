import { Request, Response } from "express";
import { CreateRoleDto, UpdateRoleDto } from "../../domain/dtos";
import {
  CreateRole,
  DeleteRole,
  GetRole,
  GetRoles,
  UpdateRole,
} from "../../domain/";
import { RoleRepository } from "../../domain/repositories/role.repository";

export class RoleController {
  constructor(private readonly roleRepository: RoleRepository) {}

  public getRoles = (req: Request, res: Response) => {
    new GetRoles(this.roleRepository)
      .execute()
      .then((roles) => res.json(roles))
      .catch((error) => res.status(400).json({ error }));
  };

  public getRoleById = (req: Request, res: Response) => {
    const id = +req.params.id;
    new GetRole(this.roleRepository)
      .execute(id)
      .then((role) => res.json(role))
      .catch((error) => res.status(400).json({ error }));
  };

  public createRole = (req: Request, res: Response) => {
    const [error, createRoleDto] = CreateRoleDto.create(req.body);
    if (error) return res.status(400).json({ error });
    new CreateRole(this.roleRepository)
      .execute(createRoleDto!)
      .then((role) => res.json(role))
      .catch((error) => res.status(400).json({ error }));
  };

  public updateRole = (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateRoleDto] = UpdateRoleDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });
    new UpdateRole(this.roleRepository)
      .execute(updateRoleDto!)
      .then((role) => res.json(role))
      .catch((error) => res.status(400).json({ error }));
  };

  public deleteRole = (req: Request, res: Response) => {
    const id = +req.params.id;
    new DeleteRole(this.roleRepository)
      .execute(id)
      .then((role) => res.json(role))
      .catch((error) => res.status(400).json({ error }));
  };
}
