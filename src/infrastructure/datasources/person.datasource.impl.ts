import { prisma } from "../../data/postgres";
import {
  CreatePersonDto,
  UpdatePersonDto,
  PersonDatasource,
  PersonEntity,
} from "../../domain";

export class PersonDatasourceImpl implements PersonDatasource {
  async create(createPersonDto: CreatePersonDto): Promise<PersonEntity> {
    const person = await prisma.person.create({
      data: { ...createPersonDto },
    });
    return PersonEntity.fromObject(person);
  }

  async getAll(): Promise<PersonEntity[]> {
    const persons = await prisma.person.findMany();
    return persons.map((person: PersonEntity) =>
      PersonEntity.fromObject(person)
    );
  }

  async findById(id: number): Promise<PersonEntity> {
    const person = await prisma.person.findFirst({
      where: { id },
    });
    if (!person) throw `Person with id ${id} not found`;
    return PersonEntity.fromObject(person);
  }

  async updateById(updatePersonDto: UpdatePersonDto): Promise<PersonEntity> {
    // Validate that person exists
    await this.findById(updatePersonDto.id);
    const updated = await prisma.person.update({
      where: { id: updatePersonDto.id },
      data: updatePersonDto.values,
    });
    return PersonEntity.fromObject(updated);
  }

  async deleteById(id: number): Promise<PersonEntity> {
    // Validate that person exists
    await this.findById(id);
    const deleted = await prisma.person.delete({
      where: { id },
    });
    return PersonEntity.fromObject(deleted);
  }
}
