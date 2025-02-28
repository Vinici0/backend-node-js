import { prisma } from "../../data/postgres";
import {
  CreateRoleRoleOptionDto,
  UpdateRoleRoleOptionDto,
  RoleRoleOptionDatasource,
  RoleRoleOptionEntity,
} from "../../domain";

export class RoleRoleOptionDatasourceImpl implements RoleRoleOptionDatasource {
  async create(
    createRoleRoleOptionDto: CreateRoleRoleOptionDto
  ): Promise<RoleRoleOptionEntity> {
    const rr = await prisma.role_roleOptions.create({
      data: { ...createRoleRoleOptionDto },
    });
    return RoleRoleOptionEntity.fromObject(rr);
  }

  async getAll(): Promise<RoleRoleOptionEntity[]> {
    const list = await prisma.role_roleOptions.findMany();
    return list.map((rr: RoleRoleOptionEntity) =>
      RoleRoleOptionEntity.fromObject(rr)
    );
  }

  async findById(
    roleId: number,
    roleOptionId: number
  ): Promise<RoleRoleOptionEntity> {
    const rr = await prisma.role_roleOptions.findFirst({
      where: { roleId, roleOptionId },
    });
    if (!rr)
      throw `RoleRoleOption with roleId ${roleId} and roleOptionId ${roleOptionId} not found`;
    return RoleRoleOptionEntity.fromObject(rr);
  }

  async updateById(
    updateRoleRoleOptionDto: UpdateRoleRoleOptionDto
  ): Promise<RoleRoleOptionEntity> {
    // Typically, pivot entries are not updated.
    await this.findById(
      updateRoleRoleOptionDto.roleId,
      updateRoleRoleOptionDto.roleOptionId
    );
    const updated = await prisma.role_roleOptions.update({
      where: {
        roleId_roleOptionId: {
          roleId: updateRoleRoleOptionDto.roleId,
          roleOptionId: updateRoleRoleOptionDto.roleOptionId,
        },
      },
      data: { ...updateRoleRoleOptionDto },
    });
    return RoleRoleOptionEntity.fromObject(updated);
  }

  async deleteById(
    roleId: number,
    roleOptionId: number
  ): Promise<RoleRoleOptionEntity> {
    await this.findById(roleId, roleOptionId);
    const deleted = await prisma.role_roleOptions.delete({
      where: {
        roleId_roleOptionId: {
          roleId,
          roleOptionId,
        },
      },
    });
    return RoleRoleOptionEntity.fromObject(deleted);
  }
}
