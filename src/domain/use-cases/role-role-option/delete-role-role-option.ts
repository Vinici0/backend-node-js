import { RoleRoleOptionEntity } from "../../entities/role-role-option.entity";
import { RoleRoleOptionRepository } from "../../repositories/role-role-option.repository";

export interface DeleteRoleRoleOptionUseCase {
  execute(roleId: number, roleOptionId: number): Promise<RoleRoleOptionEntity>;
}

export class DeleteRoleRoleOption implements DeleteRoleRoleOptionUseCase {
  constructor(private readonly repository: RoleRoleOptionRepository) {}

  execute(roleId: number, roleOptionId: number): Promise<RoleRoleOptionEntity> {
    return this.repository.deleteById(roleId, roleOptionId);
  }
}
