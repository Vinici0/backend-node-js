import { CreateRoleRoleOptionDto, UpdateRoleRoleOptionDto } from "../dtos";
import { RoleRoleOptionEntity } from "../entities/role_roleOption.entity";

export abstract class RoleRoleOptionDatasource {
  abstract create(
    createRoleRoleOptionDto: CreateRoleRoleOptionDto
  ): Promise<RoleRoleOptionEntity>;
  abstract getAll(): Promise<RoleRoleOptionEntity[]>;
  abstract findById(
    roleId: number,
    roleOptionId: number
  ): Promise<RoleRoleOptionEntity>;
  abstract updateById(
    updateRoleRoleOptionDto: UpdateRoleRoleOptionDto
  ): Promise<RoleRoleOptionEntity>;
  abstract deleteById(
    roleId: number,
    roleOptionId: number
  ): Promise<RoleRoleOptionEntity>;
}
