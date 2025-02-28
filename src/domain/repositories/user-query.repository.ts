import { UserEntity } from "../entities/user.entity";

export abstract class UserQueryRepository {
  abstract findByUsernameOrEmail(usernameOrEmail: string): Promise<UserEntity | null>;
}
    