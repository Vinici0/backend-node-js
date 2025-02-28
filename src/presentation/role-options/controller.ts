import { Request, Response } from "express";
import { CreateRoleOptionDto, UpdateRoleOptionDto } from "../../domain/dtos";
import {
  CreateRoleOption,
  DeleteRoleOption,
  GetRoleOption,
  GetRoleOptions,
  UpdateRoleOption,
} from "../../domain";
import { RoleOptionRepository } from "../../domain";

export class RoleOptionController {
  constructor(private readonly roleOptionRepository: RoleOptionRepository) {}

  public async getRoleOptions(req: Request, res: Response) {
    try {
      const options = await new GetRoleOptions(
        this.roleOptionRepository
      ).execute();
      res.json(options);
    } catch (error) {
      res.status(400).json({
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  public async getRoleOptionById(req: Request, res: Response) {
    try {
      const id = +req.params.id;
      const option = await new GetRoleOption(this.roleOptionRepository).execute(
        id
      );
      res.json(option);
    } catch (error) {
      res.status(400).json({
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  public async createRoleOption(req: Request, res: Response) {
    try {
      const [error, createRoleOptionDto] = CreateRoleOptionDto.create(req.body);
      if (error) {
        res.status(400).json({ error });
        return;
      }
      const option = await new CreateRoleOption(
        this.roleOptionRepository
      ).execute(createRoleOptionDto!);
      res.json(option);
    } catch (error) {
      res.status(400).json({
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  public async updateRoleOption(req: Request, res: Response) {
    try {
      const id = +req.params.id;
      const [error, updateRoleOptionDto] = UpdateRoleOptionDto.create({
        ...req.body,
        id,
      });
      if (error) {
        res.status(400).json({ error });
        return;
      }
      const option = await new UpdateRoleOption(
        this.roleOptionRepository
      ).execute(updateRoleOptionDto!);
      res.json(option);
    } catch (error) {
      res.status(400).json({
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  public async deleteRoleOption(req: Request, res: Response) {
    try {
      const id = +req.params.id;
      const option = await new DeleteRoleOption(
        this.roleOptionRepository
      ).execute(id);
      res.json(option);
    } catch (error) {
      res.status(400).json({
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }
}
