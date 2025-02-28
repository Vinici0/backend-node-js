import { PersonEntity } from "../../entities/person.entity";
import { PersonRepository } from "../../repositories/person.repository";

export interface GetPersonUseCase {
  execute(id: number): Promise<PersonEntity>;
}

export class GetPerson implements GetPersonUseCase {
  constructor(private readonly repository: PersonRepository) {}

  execute(id: number): Promise<PersonEntity> {
    return this.repository.findById(id);
  }
}
