import { prisma } from "../../data/postgres";
import {
  CreateRoleDto,
  UpdateRoleDto,
  RoleDatasource,
  RoleEntity,
} from "../../domain";

export class RoleDatasourceImpl implements RoleDatasource {
  async create(createRoleDto: CreateRoleDto): Promise<RoleEntity> {
    const role = await prisma.role.create({
      data: { ...createRoleDto },
    });
    return RoleEntity.fromObject(role);
  }

  async getAll(): Promise<RoleEntity[]> {
    const roles = await prisma.role.findMany();
    return roles.map((role: RoleEntity) => RoleEntity.fromObject(role));
  }

  async findById(id: number): Promise<RoleEntity> {
    const role = await prisma.role.findFirst({
      where: { id },
    });
    if (!role) throw `Role with id ${id} not found`;
    return RoleEntity.fromObject(role);
  }

  async updateById(updateRoleDto: UpdateRoleDto): Promise<RoleEntity> {
    await this.findById(updateRoleDto.id);
    const updated = await prisma.role.update({
      where: { id: updateRoleDto.id },
      data: updateRoleDto.values,
    });
    return RoleEntity.fromObject(updated);
  }

  async deleteById(id: number): Promise<RoleEntity> {
    await this.findById(id);
    const deleted = await prisma.role.delete({
      where: { id },
    });
    return RoleEntity.fromObject(deleted);
  }
}
