import { Request, Response } from "express";
import { CreatePersonDto, UpdatePersonDto } from "../../domain/dtos";
import {
  CreatePerson,
  DeletePerson,
  GetPerson,
  GetPersons,
  UpdatePerson,
} from "../../domain";

import { PersonRepository } from "../../domain/repositories/person.repository";
import { PersonEntity } from "../../domain";

export class PersonController {
  constructor(private readonly personRepository: PersonRepository) {}

  public getPersons = (req: Request, res: Response) => {
    new GetPersons(this.personRepository)
      .execute()
      .then((persons: PersonEntity[]) => res.json(persons))
      .catch((error: any) => res.status(400).json({ error }));
  };

  public getPersonById = (req: Request, res: Response) => {
    const id = +req.params.id;
    new GetPerson(this.personRepository)
      .execute(id)
      .then((person: PersonEntity) => res.json(person))
      .catch((error: any) => res.status(400).json({ error }));
  };

  public createPerson = (req: Request, res: Response) => {
    const [error, createPersonDto] = CreatePersonDto.create(req.body);
    if (error) return res.status(400).json({ error });
    new CreatePerson(this.personRepository)
      .execute(createPersonDto!)
      .then((person: PersonEntity) => res.json(person))
      .catch((error: any) => res.status(400).json({ error }));
  };

  public updatePerson = (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updatePersonDto] = UpdatePersonDto.create({
      ...req.body,
      id,
    });
    if (error) return res.status(400).json({ error });
    new UpdatePerson(this.personRepository)
      .execute(updatePersonDto!)
      .then((person: PersonEntity) => res.json(person))
      .catch((error: any) => res.status(400).json({ error }));
  };

  public deletePerson = (req: Request, res: Response) => {
    const id = +req.params.id;
    new DeletePerson(this.personRepository)
      .execute(id)
      .then((person: PersonEntity) => res.json(person))
      .catch((error: any) => res.status(400).json({ error }));
  };
}
