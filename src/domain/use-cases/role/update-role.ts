// domain/usecases/role/update-role.usecase.ts
import { UpdateRoleDto } from "../../dtos";
import { RoleEntity } from "../../entities/role.entity";
import { RoleRepository } from "../../repositories/role.repository";

export interface UpdateRoleUseCase {
  execute(dto: UpdateRoleDto): Promise<RoleEntity>;
}

export class UpdateRole implements UpdateRoleUseCase {
  constructor(private readonly repository: RoleRepository) {}

  execute(dto: UpdateRoleDto): Promise<RoleEntity> {
    return this.repository.updateById(dto);
  }
}
