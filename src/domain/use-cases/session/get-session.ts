import { SessionEntity } from "../../entities/session.entity";
import { SessionRepository } from "../../repositories/session.repository";

export interface GetSessionUseCase {
  execute(id: number): Promise<SessionEntity>;
}

export class GetSession implements GetSessionUseCase {
  constructor(private readonly repository: SessionRepository) {}

  execute(id: number): Promise<SessionEntity> {
    return this.repository.findById(id);
  }
}
