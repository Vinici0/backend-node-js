import { Router } from "express";

import { RoleRepositoryImpl } from "../../infrastructure/repositories/role.repository.impl";
import { RoleDatasourceImpl } from "../../infrastructure/datasources/role.datasource.impl";
import { RoleController } from "./controller";

export class RoleRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new RoleDatasourceImpl();
    const repository = new RoleRepositoryImpl(datasource);
    const controller = new RoleController(repository);

    router.get("/", controller.getRoles.bind(controller));
    router.get("/:id", controller.getRoleById.bind(controller));
    router.post("/", controller.createRole.bind(controller));
    router.put("/:id", controller.updateRole.bind(controller));
    router.delete("/:id", controller.deleteRole.bind(controller));

    return router;
  }
}
