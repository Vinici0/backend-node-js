import { RoleOptionEntity } from "../../entities/role-option.entity";
import { RoleOptionRepository } from "../../repositories/role-option.repository";

export interface GetRoleOptionUseCase {
  execute(id: number): Promise<RoleOptionEntity>;
}

export class GetRoleOption implements GetRoleOptionUseCase {
  constructor(private readonly repository: RoleOptionRepository) {}

  execute(id: number): Promise<RoleOptionEntity> {
    return this.repository.findById(id);
  }
}
