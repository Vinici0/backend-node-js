import { CreateRoleUserDto } from "../../dtos";
import { RoleUserEntity } from "../../entities/role-user.entity";
import { RoleUserRepository } from "../../repositories/role-user.repository";

export interface CreateRoleUserUseCase {
  execute(dto: CreateRoleUserDto): Promise<RoleUserEntity>;
}

export class CreateRoleUser implements CreateRoleUserUseCase {
  constructor(private readonly repository: RoleUserRepository) {}

  execute(dto: CreateRoleUserDto): Promise<RoleUserEntity> {
    return this.repository.create(dto);
  }
}
