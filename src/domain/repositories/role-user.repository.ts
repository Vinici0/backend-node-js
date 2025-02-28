import { CreateRoleUserDto, UpdateRoleUserDto } from "../dtos";
import { RoleUserEntity } from "../entities/role-user.entity";

export abstract class RoleUserRepository {
  abstract create(
    createRoleUserDto: CreateRoleUserDto
  ): Promise<RoleUserEntity>;
  abstract getAll(): Promise<RoleUserEntity[]>;
  abstract findById(roleId: number, userId: number): Promise<RoleUserEntity>;
  abstract updateById(
    updateRoleUserDto: UpdateRoleUserDto
  ): Promise<RoleUserEntity>;
  abstract deleteById(roleId: number, userId: number): Promise<RoleUserEntity>;
}
