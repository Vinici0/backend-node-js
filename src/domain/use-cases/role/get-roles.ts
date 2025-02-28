// domain/usecases/role/get-roles.usecase.ts
import { RoleEntity } from "../../entities/role.entity";
import { RoleRepository } from "../../repositories/role.repository";

export interface GetRolesUseCase {
  execute(): Promise<RoleEntity[]>;
}

export class GetRoles implements GetRolesUseCase {
  constructor(private readonly repository: RoleRepository) {}

  execute(): Promise<RoleEntity[]> {
    return this.repository.getAll();
  }
}
