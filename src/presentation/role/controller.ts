import { Request, Response } from "express";
import { CreateRoleDto, UpdateRoleDto } from "../../domain/dtos";
import {
  CreateRole,
  DeleteRole,
  GetRole,
  GetRoles,
  UpdateRole,
} from "../../domain";
import { RoleRepository } from "../../domain/repositories/role.repository";

export class RoleController {
  constructor(private readonly roleRepository: RoleRepository) {}

  public async getRoles(req: Request, res: Response) {
    try {
      const roles = await new GetRoles(this.roleRepository).execute();
      res.json(roles);
    } catch (error) {
      res.status(400).json({
        error:
          error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  public async getRoleById(req: Request, res: Response) {
    try {
      const id = +req.params.id;
      const role = await new GetRole(this.roleRepository).execute(id);
      res.json(role);
    } catch (error) {
      res.status(400).json({
        error:
          error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  public async createRole(req: Request, res: Response) {
    try {
      const [error, createRoleDto] = CreateRoleDto.create(req.body);
      if (error) {
        res.status(400).json({ error });
        return;
      }
      const role = await new CreateRole(this.roleRepository).execute(
        createRoleDto!
      );
      res.json(role);
    } catch (error) {
      res.status(400).json({
        error:
          error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  public async updateRole(req: Request, res: Response) {
    try {
      const id = +req.params.id;
      const [error, updateRoleDto] = UpdateRoleDto.create({
        ...req.body,
        id,
      });
      if (error) {
        res.status(400).json({ error });
        return;
      }
      const role = await new UpdateRole(this.roleRepository).execute(
        updateRoleDto!
      );
      res.json(role);
    } catch (error) {
      res.status(400).json({
        error:
          error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  public async deleteRole(req: Request, res: Response) {
    try {
      const id = +req.params.id;
      const role = await new DeleteRole(this.roleRepository).execute(id);
      res.json(role);
    } catch (error) {
      res.status(400).json({
        error:
          error instanceof Error ? error.message : "Unknown error",
      });
    }
  }
}
