export interface RoleOptionEntityOptions {
  id?: number;
  optionName: string;
}

export class RoleOptionEntity {
  public id?: number;
  public optionName: string;

  constructor(options: RoleOptionEntityOptions) {
    const { id, optionName } = options;
    this.id = id;
    this.optionName = optionName;
  }

  static fromJson(json: string): RoleOptionEntity {
    json = json === "" ? "{}" : json;
    const obj = JSON.parse(json);
    return RoleOptionEntity.fromObject(obj);
  }

  static fromObject(obj: { [key: string]: any }): RoleOptionEntity {
    const { id, optionName } = obj;
    return new RoleOptionEntity({ id, optionName });
  }
}
