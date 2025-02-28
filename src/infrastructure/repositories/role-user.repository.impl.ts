import {
  CreateRoleUserDto,
  RoleUserDatasource,
  RoleUserEntity,
  RoleUserRepository,
  UpdateRoleUserDto,
} from "../../domain";

export class RoleUserRepositoryImpl implements RoleUserRepository {
  constructor(private readonly datasource: RoleUserDatasource) {}

  create(createRoleUserDto: CreateRoleUserDto): Promise<RoleUserEntity> {
    return this.datasource.create(createRoleUserDto);
  }

  getAll(): Promise<RoleUserEntity[]> {
    return this.datasource.getAll();
  }

  findById(roleId: number, userId: number): Promise<RoleUserEntity> {
    return this.datasource.findById(roleId, userId);
  }

  updateById(updateRoleUserDto: UpdateRoleUserDto): Promise<RoleUserEntity> {
    return this.datasource.updateById(updateRoleUserDto);
  }

  deleteById(roleId: number, userId: number): Promise<RoleUserEntity> {
    return this.datasource.deleteById(roleId, userId);
  }
}
