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

    router.get('/', controller.getSessions.bind(controller));
    router.get('/:id', controller.getSessionById.bind(controller));
    router.post('/', controller.createSession.bind(controller));
    router.put('/:id', controller.updateSession.bind(controller));
    router.delete('/:id', controller.deleteSession.bind(controller));

    return router;
  }
}
