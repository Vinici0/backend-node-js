import { UpdatePersonDto } from "../../dtos";
import { PersonEntity } from "../../entities/person.entity";
import { PersonRepository } from "../../repositories/person.repository";

export interface UpdatePersonUseCase {
  execute(dto: UpdatePersonDto): Promise<PersonEntity>;
}

export class UpdatePerson implements UpdatePersonUseCase {
  constructor(private readonly repository: PersonRepository) {}

  execute(dto: UpdatePersonDto): Promise<PersonEntity> {
    return this.repository.updateById(dto);
  }
}
