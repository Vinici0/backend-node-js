import { Router } from "express";

import { PersonRoutes } from "./persons/routes";
import { UserRoutes } from "./users/routes";
import { SessionRoutes } from "./sessions/routes";
import { RoleOptionRoutes } from "./role-options/routes";
import { RoleRoutes } from "./role/routes";
import { LoginRoutes } from "./auth/routes";
// por ejemplo:
// import { RoleUserRoutes } from './role-users/routes';
// import { RoleRoleOptionRoutes } from './role-role-options/routes';

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/auth", LoginRoutes.routes);
    router.use("/api/persons", PersonRoutes.routes);
    router.use("/api/users", UserRoutes.routes);
    router.use("/api/sessions", SessionRoutes.routes);
    router.use("/api/roles", RoleRoutes.routes);
    router.use("/api/role-options", RoleOptionRoutes.routes);

    return router;
  }
}
