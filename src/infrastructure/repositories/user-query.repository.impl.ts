import { UserEntity, UserQueryRepository } from "../../domain";

import { UserQueryDatasource } from "../../domain/datasources/user-query.datasource";

export class UserQueryRepositoryImpl implements UserQueryRepository {
  constructor(private readonly datasource: UserQueryDatasource) {}

  findByUsernameOrEmail(usernameOrEmail: string): Promise<UserEntity | null> {
    return this.datasource.findByUsernameOrEmail(usernameOrEmail);
  }
}
