import { CreateSessionDto } from "../../dtos";
import { SessionEntity } from "../../entities/session.entity";
import { SessionRepository } from "../../repositories/session.repository";

export interface CreateSessionUseCase {
  execute(dto: CreateSessionDto): Promise<SessionEntity>;
}

export class CreateSession implements CreateSessionUseCase {
  constructor(private readonly repository: SessionRepository) {}

  execute(dto: CreateSessionDto): Promise<SessionEntity> {
    return this.repository.create(dto);
  }
}
