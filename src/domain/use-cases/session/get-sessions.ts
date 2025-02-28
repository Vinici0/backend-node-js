// domain/usecases/session/get-sessions.usecase.ts
import { SessionEntity } from "../../entities/session.entity";
import { SessionRepository } from "../../repositories/session.repository";

export interface GetSessionsUseCase {
  execute(): Promise<SessionEntity[]>;
}

export class GetSessions implements GetSessionsUseCase {
  constructor(private readonly repository: SessionRepository) {}

  execute(): Promise<SessionEntity[]> {
    return this.repository.getAll();
  }
}
