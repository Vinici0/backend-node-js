import { Request, Response } from "express";
import { CreateSessionDto, UpdateSessionDto } from "../../domain/dtos";
import {
  CreateSession,
  DeleteSession,
  GetSession,
  GetSessions,
  UpdateSession,
} from "../../domain";
import { SessionRepository } from "../../domain/repositories/session.repository";

export class SessionController {
  constructor(private readonly sessionRepository: SessionRepository) {}

  public getSessions = (req: Request, res: Response) => {
    new GetSessions(this.sessionRepository)
      .execute()
      .then((sessions) => res.json(sessions))
      .catch((error) => res.status(400).json({ error }));
  };

  public getSessionById = (req: Request, res: Response) => {
    const id = +req.params.id;
    new GetSession(this.sessionRepository)
      .execute(id)
      .then((session) => res.json(session))
      .catch((error) => res.status(400).json({ error }));
  };

  public createSession = (req: Request, res: Response) => {
    const [error, createSessionDto] = CreateSessionDto.create(req.body);
    if (error) return res.status(400).json({ error });
    new CreateSession(this.sessionRepository)
      .execute(createSessionDto!)
      .then((session) => res.json(session))
      .catch((error) => res.status(400).json({ error }));
  };

  public updateSession = (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateSessionDto] = UpdateSessionDto.create({
      ...req.body,
      id,
    });
    if (error) return res.status(400).json({ error });
    new UpdateSession(this.sessionRepository)
      .execute(updateSessionDto!)
      .then((session) => res.json(session))
      .catch((error) => res.status(400).json({ error }));
  };

  public deleteSession = (req: Request, res: Response) => {
    const id = +req.params.id;
    new DeleteSession(this.sessionRepository)
      .execute(id)
      .then((session) => res.json(session))
      .catch((error) => res.status(400).json({ error }));
  };
}
