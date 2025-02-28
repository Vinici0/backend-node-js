import { User } from "@prisma/client";
import { prisma } from "../../data/postgres";
import {
  CreateUserDto,
  UpdateUserDto,
  UserDatasource,
  UserEntity,
} from "../../domain";

export class UserDatasourceImpl implements UserDatasource {
  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const { 
      username, 
      password, 
      email, 
      sessionActive, 
      status, 
      personId,
      identification,
      firstName,
      lastName
    } = createUserDto;
    
    if (personId) {
      const user = await prisma.user.create({
        data: { 
          username,
          password,
          email,
          sessionActive,
          status,
          personId
        },
      });
      
      return UserEntity.fromObject(user);
    }
    
    else if (firstName && lastName && identification) {
      const user = await prisma.user.create({
        data: { 
          username,
          password,
          email,
          sessionActive,
          status,
          person: {
            create: {
              firstName,
              lastName,
              identification,
              birthDate: new Date() 
            }
          }
        },
        include: {
          person: true
        }
      });
      
      return UserEntity.fromObject(user);
    }
    
    // If we don't have enough data for either approach
    else {
      throw new Error("Either personId or person details (firstName, lastName, identification) must be provided");
    }
  }

  async getAll(): Promise<UserEntity[]> {
    const users = await prisma.user.findMany();
    return users.map((user: User) => UserEntity.fromObject({
      ...user,
      status: user.status || undefined,
      personId: user.personId || undefined
    }));
  }

  async findById(id: number): Promise<UserEntity> {
    const user = await prisma.user.findFirst({
      where: { id },
    });
    if (!user) throw `User with id ${id} not found`;
    return UserEntity.fromObject(user);
  }

  async updateById(updateUserDto: UpdateUserDto): Promise<UserEntity> {
    await this.findById(updateUserDto.id);
    const updated = await prisma.user.update({
      where: { id: updateUserDto.id },
      data: updateUserDto.values,
    });
    return UserEntity.fromObject(updated);
  }

  async deleteById(id: number): Promise<UserEntity> {
    await this.findById(id);
    const deleted = await prisma.user.delete({
      where: { id },
    });
    return UserEntity.fromObject(deleted);
  }
}
