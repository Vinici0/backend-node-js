import { CreateRoleDto } from "../../dtos";
import { RoleEntity } from "../../entities/role.entity";
import { RoleRepository } from "../../repositories/role.repository";

export interface CreateRoleUseCase {
  execute(dto: CreateRoleDto): Promise<RoleEntity>;
}

export class CreateRole implements CreateRoleUseCase {
  constructor(private readonly repository: RoleRepository) {}

  execute(dto: CreateRoleDto): Promise<RoleEntity> {
    return this.repository.create(dto);
  }
}
