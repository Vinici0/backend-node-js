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

export class PersonController {
  constructor(private readonly personRepository: PersonRepository) {}

  public async getPersons(req: Request, res: Response) {
    try {
      const persons = await new GetPersons(this.personRepository).execute();
      res.json(persons);
    } catch (error) {
      res.status(400).json({ error: error instanceof Error ? error.message : 'Unknown error' });
    }
  }

  public async getPersonById(req: Request, res: Response) {
    try {
      const id = +req.params.id;
      const person = await new GetPerson(this.personRepository).execute(id);
      res.json(person);
    } catch (error) {
      res.status(400).json({ error: error instanceof Error ? error.message : 'Unknown error' });
    }
  }

  public async createPerson(req: Request, res: Response) {
    try {
      const [error, createPersonDto] = CreatePersonDto.create(req.body);
      if (error) {
        res.status(400).json({ error });
        return;
      }

      const person = await new CreatePerson(this.personRepository)
        .execute(createPersonDto!);
      res.json(person);
    } catch (error) {
      res.status(400).json({ error: error instanceof Error ? error.message : 'Unknown error' });
    }
  }

  public async updatePerson(req: Request, res: Response) {
    try {
      const id = +req.params.id;
      const [error, updatePersonDto] = UpdatePersonDto.create({ ...req.body, id });
      if (error) {
        res.status(400).json({ error });
        return;
      }

      const person = await new UpdatePerson(this.personRepository)
        .execute(updatePersonDto!);
      res.json(person);
    } catch (error) {
      res.status(400).json({ error: error instanceof Error ? error.message : 'Unknown error' });
    }
  }

  public async deletePerson(req: Request, res: Response) {
    try {
      const id = +req.params.id;
      const person = await new DeletePerson(this.personRepository).execute(id);
      res.json(person);
    } catch (error) {
      res.status(400).json({ error: error instanceof Error ? error.message : 'Unknown error' });
    }
  }
}