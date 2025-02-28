import { RoleOptionEntity } from "../../entities/role-option.entity";
import { RoleOptionRepository } from "../../repositories/role-option.repository";

export interface DeleteRoleOptionUseCase {
  execute(id: number): Promise<RoleOptionEntity>;
}

export class DeleteRoleOption implements DeleteRoleOptionUseCase {
  constructor(private readonly repository: RoleOptionRepository) {}

  execute(id: number): Promise<RoleOptionEntity> {
    return this.repository.deleteById(id);
  }
}
