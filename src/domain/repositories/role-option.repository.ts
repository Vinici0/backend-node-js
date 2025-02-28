import { CreateRoleOptionDto, UpdateRoleOptionDto } from "../dtos";
import { RoleOptionEntity } from "../entities/role-option.entity";

export abstract class RoleOptionRepository {
  abstract create(
    createRoleOptionDto: CreateRoleOptionDto
  ): Promise<RoleOptionEntity>;
  abstract getAll(): Promise<RoleOptionEntity[]>;
  abstract findById(id: number): Promise<RoleOptionEntity>;
  abstract updateById(
    updateRoleOptionDto: UpdateRoleOptionDto
  ): Promise<RoleOptionEntity>;
  abstract deleteById(id: number): Promise<RoleOptionEntity>;
}
