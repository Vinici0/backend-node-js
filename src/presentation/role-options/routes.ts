import { Router } from 'express';

import { RoleOptionController } from './controller';
import { RoleOptionDatasourceImpl } from '../../infrastructure/datasources/role-option.datasource.impl';
import { RoleOptionRepositoryImpl } from '../../infrastructure/repositories/role-option.repository.impl';

export class RoleOptionRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new RoleOptionDatasourceImpl();
    const repository = new RoleOptionRepositoryImpl(datasource);
    const controller = new RoleOptionController(repository);

    router.get('/', controller.getRoleOptions.bind(controller))
    router.get('/:id', controller.getRoleOptionById.bind(controller))
    router.post('/', controller.createRoleOption.bind(controller))
    router.put('/:id', controller.updateRoleOption.bind(controller))
    router.delete('/:id', controller.deleteRoleOption.bind(controller))

    return router;
  }
}
