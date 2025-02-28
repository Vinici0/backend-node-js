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

    router.get('/', controller.getUsers);
    router.get('/:id', controller.getUserById);
    router.post('/', controller.createUser);
    router.put('/:id', controller.updateUser);
    router.delete('/:id', controller.deleteUser);

    return router;
  }
}
