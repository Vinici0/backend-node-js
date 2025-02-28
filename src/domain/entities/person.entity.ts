export interface PersonEntityOptions {
  id?: number; 
  firstName: string;
  lastName: string;
  identification: string;
  birthDate: Date;
}

export class PersonEntity {
  public id?: number;
  public firstName: string;
  public lastName: string;
  public identification: string;
  public birthDate: Date;

  constructor(options: PersonEntityOptions) {
    const { id, firstName, lastName, identification, birthDate } = options;
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.identification = identification;
    this.birthDate = birthDate;
  }

  static fromJson(json: string): PersonEntity {
    json = json === "" ? "{}" : json;
    const obj = JSON.parse(json);
    return PersonEntity.fromObject(obj);
  }

  static fromObject(obj: { [key: string]: any }): PersonEntity {
    const { id, firstName, lastName, identification, birthDate } = obj;
    return new PersonEntity({
      id,
      firstName,
      lastName,
      identification,
      birthDate: birthDate instanceof Date ? birthDate : new Date(birthDate),
    });
  }
}
