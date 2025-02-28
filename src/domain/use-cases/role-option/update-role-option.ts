import { UpdateRoleOptionDto } from "../../dtos";
import { RoleOptionEntity } from "../../entities/role-option.entity";
import { RoleOptionRepository } from "../../repositories/role-option.repository";

export interface UpdateRoleOptionUseCase {
  execute(dto: UpdateRoleOptionDto): Promise<RoleOptionEntity>;
}

export class UpdateRoleOption implements UpdateRoleOptionUseCase {
  constructor(private readonly repository: RoleOptionRepository) {}

  execute(dto: UpdateRoleOptionDto): Promise<RoleOptionEntity> {
    return this.repository.updateById(dto);
  }
}
