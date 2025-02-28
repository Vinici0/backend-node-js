import { LoginUserDto } from "../../dtos/auth/login-user.dto";
import { UserEntity } from "../../entities";
import { UserQueryRepository } from "../../repositories";
import { bcryptAdapter } from '../../../config/bcrypt.adapter';
import { JwtAdapter } from "../../../config/jwt.adapter";

export interface LoginResponse {
  token: string;
  user: UserEntity;
}

export interface LoginUserUseCase {
  execute(dto: LoginUserDto): Promise<LoginResponse>;
}

export class LoginUser implements LoginUserUseCase {
  constructor(private readonly userRepository: UserQueryRepository) {}

  async execute(dto: LoginUserDto): Promise<LoginResponse> {
    const user = await this.userRepository.findByUsernameOrEmail(dto.email);
    if (!user) {
      throw new Error("Invalid username or password");
    }
    const isValid = bcryptAdapter.compare(dto.password, user.password);
    if (!isValid) {
      throw new Error("Invalid username or password");
    }
    const token = await JwtAdapter.generateToken({ id: user.id, username: user.username });
    if (!token) {
      throw new Error("Token generation failed");
    }
    return { token, user };
  }
}
