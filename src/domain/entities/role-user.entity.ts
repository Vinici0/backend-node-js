export interface RoleUserEntityOptions {
  roleId: number;
  userId: number;
}

export class RoleUserEntity {
  public roleId: number;
  public userId: number;

  constructor(options: RoleUserEntityOptions) {
    const { roleId, userId } = options;
    this.roleId = roleId;
    this.userId = userId;
  }

  static fromJson(json: string): RoleUserEntity {
    json = json === "" ? "{}" : json;
    const obj = JSON.parse(json);
    return RoleUserEntity.fromObject(obj);
  }

  static fromObject(obj: { [key: string]: any }): RoleUserEntity {
    const { roleId, userId } = obj;
    return new RoleUserEntity({ roleId, userId });
  }
}
