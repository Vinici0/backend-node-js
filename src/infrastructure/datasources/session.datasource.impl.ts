import { prisma } from "../../data/postgres";
import {
  CreateSessionDto,
  UpdateSessionDto,
  SessionDatasource,
  SessionEntity,
} from "../../domain";

export class SessionDatasourceImpl implements SessionDatasource {
  async create(createSessionDto: CreateSessionDto): Promise<SessionEntity> {
    const session = await prisma.session.create({
      data: { ...createSessionDto },
    });
    return SessionEntity.fromObject(session);
  }

  async getAll(): Promise<SessionEntity[]> {
    const sessions = await prisma.session.findMany();
    return sessions.map((s: SessionEntity) => SessionEntity.fromObject(s));
  }

  async findById(id: number): Promise<SessionEntity> {
    const session = await prisma.session.findFirst({
      where: { id },
    });
    if (!session) throw `Session with id ${id} not found`;
    return SessionEntity.fromObject(session);
  }

  async updateById(updateSessionDto: UpdateSessionDto): Promise<SessionEntity> {
    await this.findById(updateSessionDto.id);
    const updated = await prisma.session.update({
      where: { id: updateSessionDto.id },
      data: updateSessionDto.values,
    });
    return SessionEntity.fromObject(updated);
  }

  async deleteById(id: number): Promise<SessionEntity> {
    await this.findById(id);
    const deleted = await prisma.session.delete({
      where: { id },
    });
    return SessionEntity.fromObject(deleted);
  }
}
