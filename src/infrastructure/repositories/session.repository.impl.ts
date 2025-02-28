import {
  CreateSessionDto,
  SessionDatasource,
  SessionEntity,
  SessionRepository,
  UpdateSessionDto,
} from "../../domain";

export class SessionRepositoryImpl implements SessionRepository {
  constructor(private readonly datasource: SessionDatasource) {}

  create(createSessionDto: CreateSessionDto): Promise<SessionEntity> {
    return this.datasource.create(createSessionDto);
  }

  getAll(): Promise<SessionEntity[]> {
    return this.datasource.getAll();
  }

  findById(id: number): Promise<SessionEntity> {
    return this.datasource.findById(id);
  }

  updateById(updateSessionDto: UpdateSessionDto): Promise<SessionEntity> {
    return this.datasource.updateById(updateSessionDto);
  }

  deleteById(id: number): Promise<SessionEntity> {
    return this.datasource.deleteById(id);
  }
}
