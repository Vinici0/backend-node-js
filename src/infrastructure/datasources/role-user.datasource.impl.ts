import { prisma } from "../../data/postgres";
import {
  CreateRoleUserDto,
  UpdateRoleUserDto,
  RoleUserDatasource,
  RoleUserEntity,
} from "../../domain";

export class RoleUserDatasourceImpl implements RoleUserDatasource {
  async create(createRoleUserDto: CreateRoleUserDto): Promise<RoleUserEntity> {
    const ru = await prisma.role_users.create({
      data: { ...createRoleUserDto },
    });
    return RoleUserEntity.fromObject(ru);
  }

  async getAll(): Promise<RoleUserEntity[]> {
    const list = await prisma.role_users.findMany();
    return list.map((ru: RoleUserEntity) => RoleUserEntity.fromObject(ru));
  }

  async findById(roleId: number, userId: number): Promise<RoleUserEntity> {
    const ru = await prisma.role_users.findFirst({
      where: { roleId, userId },
    });
    if (!ru)
      throw `RoleUser with roleId ${roleId} and userId ${userId} not found`;
    return RoleUserEntity.fromObject(ru);
  }

  async updateById(
    updateRoleUserDto: UpdateRoleUserDto
  ): Promise<RoleUserEntity> {
    // Typically pivot table records are not updated. This is just for consistency.
    await this.findById(updateRoleUserDto.roleId, updateRoleUserDto.userId);
    const updated = await prisma.role_users.update({
      where: {
        roleId_userId: {
          roleId: updateRoleUserDto.roleId,
          userId: updateRoleUserDto.userId,
        },
      },
      data: { ...updateRoleUserDto }, // If there are fields to update
    });
    return RoleUserEntity.fromObject(updated);
  }

  async deleteById(roleId: number, userId: number): Promise<RoleUserEntity> {
    await this.findById(roleId, userId);
    const deleted = await prisma.role_users.delete({
      where: {
        roleId_userId: {
          roleId,
          userId,
        },
      },
    });
    return RoleUserEntity.fromObject(deleted);
  }
}
