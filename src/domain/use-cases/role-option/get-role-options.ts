import { RoleOptionEntity } from '../../entities/role-option.entity';
import { RoleOptionRepository } from '../../repositories/role-option.repository';

export interface GetRoleOptionsUseCase {
  execute(): Promise<RoleOptionEntity[]>;
}

export class GetRoleOptions implements GetRoleOptionsUseCase {
  constructor(private readonly repository: RoleOptionRepository) {}

  execute(): Promise<RoleOptionEntity[]> {
    return this.repository.getAll();
  }
}
