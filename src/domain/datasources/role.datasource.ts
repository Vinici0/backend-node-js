import { CreateRoleDto, UpdateRoleDto } from "../dtos";
import { RoleEntity } from "../entities/role.entity";

export abstract class RoleDatasource {
  abstract create(createRoleDto: CreateRoleDto): Promise<RoleEntity>;
  abstract getAll(): Promise<RoleEntity[]>;
  abstract findById(id: number): Promise<RoleEntity>;
  abstract updateById(updateRoleDto: UpdateRoleDto): Promise<RoleEntity>;
  abstract deleteById(id: number): Promise<RoleEntity>;
}
