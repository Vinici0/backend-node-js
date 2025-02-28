import { CreateSessionDto, UpdateSessionDto } from "../dtos";
import { SessionEntity } from "../entities/session.entity";

export abstract class SessionRepository {
  abstract create(createSessionDto: CreateSessionDto): Promise<SessionEntity>;
  abstract getAll(): Promise<SessionEntity[]>;
  abstract findById(id: number): Promise<SessionEntity>;
  abstract updateById(
    updateSessionDto: UpdateSessionDto
  ): Promise<SessionEntity>;
  abstract deleteById(id: number): Promise<SessionEntity>;
}
