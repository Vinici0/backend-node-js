import { Router } from "express";
import { PersonController } from "./controller";
import { PersonRepositoryImpl } from "../../infrastructure/repositories/person.repository.impl";
import { PersonDatasourceImpl } from "../../infrastructure/datasources/person.datasource.impl";

export class PersonRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new PersonDatasourceImpl();
    const repository = new PersonRepositoryImpl(datasource);
    const controller = new PersonController(repository);

    router.get("/", controller.getPersons);
    router.get("/:id", controller.getPersonById);
    router.post("/", controller.createPerson);
    router.put("/:id", controller.updatePerson);
    router.delete("/:id", controller.deletePerson);
    return router;
  }
}
