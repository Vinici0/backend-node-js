export interface UserEntityOptions {
  id?: number;
  username: string;
  password: string;
  email: string;
  sessionActive: string; // Could be an enum for 'Y' or 'N'
  status?: string;
  personId?: number; // Foreign key to Person
}

export class UserEntity {
  public id?: number;
  public username: string;
  public password: string;
  public email: string;
  public sessionActive: string;
  public status?: string;
  public personId?: number;

  constructor(options: UserEntityOptions) {
    const { id, username, password, email, sessionActive, status, personId } =
      options;
    this.id = id;
    this.username = username;
    this.password = password;
    this.email = email;
    this.sessionActive = sessionActive;
    this.status = status;
    this.personId = personId;
  }

  static fromJson(json: string): UserEntity {
    json = json === "" ? "{}" : json;
    const obj = JSON.parse(json);
    return UserEntity.fromObject(obj);
  }

  static fromObject(obj: { [key: string]: any }): UserEntity {
    const { id, username, password, email, sessionActive, status, personId } =
      obj;
    return new UserEntity({
      id,
      username,
      password,
      email,
      sessionActive,
      status,
      personId,
    });
  }
}
