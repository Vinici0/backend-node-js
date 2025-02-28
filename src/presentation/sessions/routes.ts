import { Router } from 'express';

import { SessionRepositoryImpl } from '../../infrastructure/repositories/session.repository.impl';
import { SessionDatasourceImpl } from '../../infrastructure/datasources/session.datasource.impl';
import { SessionController } from './controller';

export class SessionRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new SessionDatasourceImpl();
    const repository = new SessionRepositoryImpl(datasource);
    const controller = new SessionController(repository);

    router.get('/', controller.getSessions);
    router.get('/:id', controller.getSessionById);
    router.post('/', controller.createSession);
    router.put('/:id', controller.updateSession);
    router.delete('/:id', controller.deleteSession);

    return router;
  }
}
