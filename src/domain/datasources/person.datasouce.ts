import { CreatePersonDto } from "../dtos/persons/create-person.dto";
import { UpdatePersonDto } from "../dtos/persons/update-person.sto";
import { PersonEntity } from "../entities/person.entity";

export abstract class PersonDatasource {
  abstract create(createPersonDto: CreatePersonDto): Promise<PersonEntity>;
  abstract getAll(): Promise<PersonEntity[]>;
  abstract findById(id: number): Promise<PersonEntity>;
  abstract updateById(updatePersonDto: UpdatePersonDto): Promise<PersonEntity>;
  abstract deleteById(id: number): Promise<PersonEntity>;
}
