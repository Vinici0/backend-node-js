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

    router.get('/', controller.getRoleOptions);
    router.get('/:id', controller.getRoleOptionById);
    router.post('/', controller.createRoleOption);
    router.put('/:id', controller.updateRoleOption);
    router.delete('/:id', controller.deleteRoleOption);

    return router;
  }
}
