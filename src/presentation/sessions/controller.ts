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

  public async getSessions(req: Request, res: Response) {
    try {
      const sessions = await new GetSessions(this.sessionRepository).execute();
      res.json(sessions);
    } catch (error) {
      res.status(400).json({
        error:
          error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  public async getSessionById(req: Request, res: Response) {
    try {
      const id = +req.params.id;
      const session = await new GetSession(this.sessionRepository).execute(id);
      res.json(session);
    } catch (error) {
      res.status(400).json({
        error:
          error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  public async createSession(req: Request, res: Response) {
    try {
      const [error, createSessionDto] = CreateSessionDto.create(req.body);
      if (error) {
        res.status(400).json({ error });
        return;
      }
      const session = await new CreateSession(this.sessionRepository).execute(
        createSessionDto!
      );
      res.json(session);
    } catch (error) {
      res.status(400).json({
        error:
          error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  public async updateSession(req: Request, res: Response) {
    try {
      const id = +req.params.id;
      const [error, updateSessionDto] = UpdateSessionDto.create({
        ...req.body,
        id,
      });
      if (error) {
        res.status(400).json({ error });
        return;
      }
      const session = await new UpdateSession(this.sessionRepository).execute(
        updateSessionDto!
      );
      res.json(session);
    } catch (error) {
      res.status(400).json({
        error:
          error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  public async deleteSession(req: Request, res: Response) {
    try {
      const id = +req.params.id;
      const session = await new DeleteSession(this.sessionRepository).execute(id);
      res.json(session);
    } catch (error) {
      res.status(400).json({
        error:
          error instanceof Error ? error.message : "Unknown error",
      });
    }
  }
}
