import { prisma } from "../../data/postgres";
import {
  CreateRoleOptionDto,
  UpdateRoleOptionDto,
  RoleOptionDatasource,
  RoleOptionEntity,
} from "../../domain";

export class RoleOptionDatasourceImpl implements RoleOptionDatasource {
  async create(
    createRoleOptionDto: CreateRoleOptionDto
  ): Promise<RoleOptionEntity> {
    const option = await prisma.roleOption.create({
      data: { ...createRoleOptionDto },
    });
    return RoleOptionEntity.fromObject(option);
  }

  async getAll(): Promise<RoleOptionEntity[]> {
    const options = await prisma.roleOption.findMany();
    return options.map((opt: RoleOptionEntity) =>
      RoleOptionEntity.fromObject(opt)
    );
  }

  async findById(id: number): Promise<RoleOptionEntity> {
    const option = await prisma.roleOption.findFirst({
      where: { id },
    });
    if (!option) throw `RoleOption with id ${id} not found`;
    return RoleOptionEntity.fromObject(option);
  }

  async updateById(
    updateRoleOptionDto: UpdateRoleOptionDto
  ): Promise<RoleOptionEntity> {
    await this.findById(updateRoleOptionDto.id);
    const updated = await prisma.roleOption.update({
      where: { id: updateRoleOptionDto.id },
      data: updateRoleOptionDto.values,
    });
    return RoleOptionEntity.fromObject(updated);
  }

  async deleteById(id: number): Promise<RoleOptionEntity> {
    await this.findById(id);
    const deleted = await prisma.roleOption.delete({
      where: { id },
    });
    return RoleOptionEntity.fromObject(deleted);
  }
}
