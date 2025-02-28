// src/presentation/routes/login.routes.ts
import { Router } from "express";
import { LoginController } from "./controller";
import { UserQueryRepositoryImpl } from "../../infrastructure/repositories/user-query.repository.impl";
import { UserQueryDatasourceImpl } from "../../infrastructure/datasources/user-query.datasource.impl";

export class LoginRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new UserQueryDatasourceImpl();
    const repository = new UserQueryRepositoryImpl(datasource);
    const controller = new LoginController(repository);

    router.post("/", controller.login.bind(controller));

    return router;
  }
}
