import {
  CreatePersonDto,
  PersonDatasource,
  PersonEntity,
  PersonRepository,
  UpdatePersonDto,
} from "../../domain";

export class PersonRepositoryImpl implements PersonRepository {
  constructor(private readonly datasource: PersonDatasource) {}

  create(createPersonDto: CreatePersonDto): Promise<PersonEntity> {
    return this.datasource.create(createPersonDto);
  }

  getAll(): Promise<PersonEntity[]> {
    return this.datasource.getAll();
  }

  findById(id: number): Promise<PersonEntity> {
    return this.datasource.findById(id);
  }

  updateById(updatePersonDto: UpdatePersonDto): Promise<PersonEntity> {
    return this.datasource.updateById(updatePersonDto);
  }

  deleteById(id: number): Promise<PersonEntity> {
    return this.datasource.deleteById(id);
  }
}
