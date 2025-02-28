import { PersonEntity } from "../../entities/person.entity";
import { PersonRepository } from "../../repositories/person.repository";

export interface DeletePersonUseCase {
  execute(id: number): Promise<PersonEntity>;
}

export class DeletePerson implements DeletePersonUseCase {
  constructor(private readonly repository: PersonRepository) {}

  execute(id: number): Promise<PersonEntity> {
    return this.repository.deleteById(id);
  }
}
