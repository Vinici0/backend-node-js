import {
  CreateRoleOptionDto,
  RoleOptionDatasource,
  RoleOptionEntity,
  RoleOptionRepository,
  UpdateRoleOptionDto,
} from "../../domain";

export class RoleOptionRepositoryImpl implements RoleOptionRepository {
  constructor(private readonly datasource: RoleOptionDatasource) {}

  create(createRoleOptionDto: CreateRoleOptionDto): Promise<RoleOptionEntity> {
    return this.datasource.create(createRoleOptionDto);
  }

  getAll(): Promise<RoleOptionEntity[]> {
    return this.datasource.getAll();
  }

  findById(id: number): Promise<RoleOptionEntity> {
    return this.datasource.findById(id);
  }

  updateById(
    updateRoleOptionDto: UpdateRoleOptionDto
  ): Promise<RoleOptionEntity> {
    return this.datasource.updateById(updateRoleOptionDto);
  }

  deleteById(id: number): Promise<RoleOptionEntity> {
    return this.datasource.deleteById(id);
  }
}
