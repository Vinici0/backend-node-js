import { UserQueryDatasource } from "../../domain/datasources/user-query.datasource";
import { prisma } from "../../data/postgres";
import { UserEntity } from "../../domain";

interface UserResponse {
  id: number;
  username: string;
  email: string;
  roles: string[];
}

export class UserQueryDatasourceImpl implements UserQueryDatasource {
  async findByUsernameOrEmail(
    usernameOrEmail: string
  ): Promise<any | null> {
    console.log(usernameOrEmail);

    const user = await prisma.user.findFirst({
      where: {
        OR: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
      },
      select: {
        id: true,
        username: true,
        email: true,
        password: true,
        roles: {
          select: {
            role: {
              select: {
                id: true,
                roleName: true,
              },
            },
          },
        },
      },
    });

    if (!user) return null;
    
    return {
      id: user.id,
      username: user.username,
      email: user.email,
      password: user.password,
      roles: user.roles.map((role) => role.role.roleName),
    }
  }
}
