import { CreatePersonDto } from "../../dtos";
import { PersonEntity } from "../../entities/person.entity";
import { PersonRepository } from "../../repositories/person.repository";

export interface CreatePersonUseCase {
  execute(dto: CreatePersonDto): Promise<PersonEntity>;
}

export class CreatePerson implements CreatePersonUseCase {
  constructor(private readonly repository: PersonRepository) {}

  execute(dto: CreatePersonDto): Promise<PersonEntity> {
    return this.repository.create(dto);
  }
}
