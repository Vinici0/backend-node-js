import { CreateRoleRoleOptionDto } from "../../dtos";
import { RoleRoleOptionEntity } from "../../entities/role-role-option.entity";
import { RoleRoleOptionRepository } from "../../repositories/role-role-option.repository";

export interface CreateRoleRoleOptionUseCase {
  execute(dto: CreateRoleRoleOptionDto): Promise<RoleRoleOptionEntity>;
}

export class CreateRoleRoleOption implements CreateRoleRoleOptionUseCase {
  constructor(private readonly repository: RoleRoleOptionRepository) {}

  execute(dto: CreateRoleRoleOptionDto): Promise<RoleRoleOptionEntity> {
    return this.repository.create(dto);
  }
}
