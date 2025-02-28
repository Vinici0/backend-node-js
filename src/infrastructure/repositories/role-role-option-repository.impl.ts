import {
  CreateRoleRoleOptionDto,
  RoleRoleOptionDatasource,
  RoleRoleOptionEntity,
  RoleRoleOptionRepository,
  UpdateRoleRoleOptionDto,
} from "../../domain";

export class RoleRoleOptionRepositoryImpl implements RoleRoleOptionRepository {
  constructor(private readonly datasource: RoleRoleOptionDatasource) {}

  create(
    createRoleRoleOptionDto: CreateRoleRoleOptionDto
  ): Promise<RoleRoleOptionEntity> {
    return this.datasource.create(createRoleRoleOptionDto);
  }

  getAll(): Promise<RoleRoleOptionEntity[]> {
    return this.datasource.getAll();
  }

  findById(
    roleId: number,
    roleOptionId: number
  ): Promise<RoleRoleOptionEntity> {
    return this.datasource.findById(roleId, roleOptionId);
  }

  updateById(
    updateRoleRoleOptionDto: UpdateRoleRoleOptionDto
  ): Promise<RoleRoleOptionEntity> {
    return this.datasource.updateById(updateRoleRoleOptionDto);
  }

  deleteById(
    roleId: number,
    roleOptionId: number
  ): Promise<RoleRoleOptionEntity> {
    return this.datasource.deleteById(roleId, roleOptionId);
  }
}
