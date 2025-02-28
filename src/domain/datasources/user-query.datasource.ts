import { UserEntity } from "../entities/user.entity";

export abstract class UserQueryDatasource {
  abstract findByUsernameOrEmail(usernameOrEmail: string): Promise<UserEntity | null>;
}
