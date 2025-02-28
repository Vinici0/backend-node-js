import { RoleEntity } from "../../entities/role.entity";
import { RoleRepository } from "../../repositories/role.repository";

export interface GetRoleUseCase {
  execute(id: number): Promise<RoleEntity>;
}

export class GetRole implements GetRoleUseCase {
  constructor(private readonly repository: RoleRepository) {}

  execute(id: number): Promise<RoleEntity> {
    return this.repository.findById(id);
  }
}
