import { RoleUserEntity } from "../../entities/role-user.entity";
import { RoleUserRepository } from "../../repositories/role-user.repository";

export interface DeleteRoleUserUseCase {
  execute(roleId: number, userId: number): Promise<RoleUserEntity>;
}

export class DeleteRoleUser implements DeleteRoleUserUseCase {
  constructor(private readonly repository: RoleUserRepository) {}

  execute(roleId: number, userId: number): Promise<RoleUserEntity> {
    return this.repository.deleteById(roleId, userId);
  }
}
