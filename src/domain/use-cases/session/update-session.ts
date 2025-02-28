import { UpdateSessionDto } from "../../dtos";
import { SessionEntity } from "../../entities/session.entity";
import { SessionRepository } from "../../repositories/session.repository";

export interface UpdateSessionUseCase {
  execute(dto: UpdateSessionDto): Promise<SessionEntity>;
}

export class UpdateSession implements UpdateSessionUseCase {
  constructor(private readonly repository: SessionRepository) {}

  execute(dto: UpdateSessionDto): Promise<SessionEntity> {
    return this.repository.updateById(dto);
  }
}
