import { Router } from 'express';

import { UserRepositoryImpl } from '../../infrastructure/repositories/user.repository.impl';
import { UserDatasourceImpl } from '../../infrastructure/datasources/user.datasource.impl';
import { UserController } from './controller';

export class UserRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new UserDatasourceImpl();
    const repository = new UserRepositoryImpl(datasource);
    const controller = new UserController(repository);

    router.get('/', controller.getUsers.bind(controller));
    router.get('/:id', controller.getUserById.bind(controller));
    router.post('/', controller.createUser.bind(controller));
    router.put('/:id', controller.updateUser.bind(controller));
    router.delete('/:id', controller.deleteUser.bind(controller));

    return router;
  }
}
