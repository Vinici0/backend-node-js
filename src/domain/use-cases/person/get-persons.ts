import { PersonEntity } from "../../entities/person.entity";
import { PersonRepository } from "../../repositories/person.repository";

export interface GetPersonsUseCase {
  execute(): Promise<PersonEntity[]>;
}

export class GetPersons implements GetPersonsUseCase {
  constructor(private readonly repository: PersonRepository) {}

  execute(): Promise<PersonEntity[]> {
    return this.repository.getAll();
  }
}
