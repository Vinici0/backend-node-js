export interface RoleEntityOptions {
  id?: number;
  roleName: string;
}

export class RoleEntity {
  public id?: number;
  public roleName: string;

  constructor(options: RoleEntityOptions) {
    const { id, roleName } = options;
    this.id = id;
    this.roleName = roleName;
  }

  static fromJson(json: string): RoleEntity {
    json = json === "" ? "{}" : json;
    const obj = JSON.parse(json);
    return RoleEntity.fromObject(obj);
  }

  static fromObject(obj: { [key: string]: any }): RoleEntity {
    const { id, roleName } = obj;
return new RoleEntity({ id, roleName });
  }
}
