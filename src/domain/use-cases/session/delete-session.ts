import { SessionEntity } from '../../entities/session.entity';
import { SessionRepository } from '../../repositories/session.repository';

export interface DeleteSessionUseCase {
  execute(id: number): Promise<SessionEntity>;
}

export class DeleteSession implements DeleteSessionUseCase {
  constructor(private readonly repository: SessionRepository) {}

  execute(id: number): Promise<SessionEntity> {
    return this.repository.deleteById(id);
  }
}
