import { CreateRoleOptionDto } from "../../dtos";
import { RoleOptionEntity } from "../../entities/role-option.entity";
import { RoleOptionRepository } from "../../repositories/role-option.repository";

export interface CreateRoleOptionUseCase {
  execute(dto: CreateRoleOptionDto): Promise<RoleOptionEntity>;
}

export class CreateRoleOption implements CreateRoleOptionUseCase {
  constructor(private readonly repository: RoleOptionRepository) {}

  execute(dto: CreateRoleOptionDto): Promise<RoleOptionEntity> {
    return this.repository.create(dto);
  }
}
