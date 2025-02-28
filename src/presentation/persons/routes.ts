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

    router.get("/", controller.getPersons.bind(controller));
    router.get("/:id", controller.getPersonById.bind(controller));
    router.post("/", controller.createPerson.bind(controller));
    router.put("/:id", controller.updatePerson.bind(controller));
    router.delete("/:id", controller.deletePerson.bind(controller));
    return router;
  }
}
