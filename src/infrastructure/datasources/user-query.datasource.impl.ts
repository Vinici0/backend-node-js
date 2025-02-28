import { UserQueryDatasource } from "../../domain/datasources/user-query.datasource";
import { prisma } from "../../data/postgres";
import {
  CreateUserDto,
  UpdateUserDto,
  UserDatasource,
  UserEntity,
} from "../../domain";

export class UserQueryDatasourceImpl implements UserQueryDatasource {
  async findByUsernameOrEmail(
    usernameOrEmail: string
  ): Promise<UserEntity | null> {
    const user = await prisma.user.findFirst({
      where: {
        OR: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
      },
    });
    if (!user) return null;
    return UserEntity.fromObject(user);
  }
}
