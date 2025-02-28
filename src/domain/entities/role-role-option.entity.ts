export interface RoleRoleOptionEntityOptions {
  roleId: number;
  roleOptionId: number;
}

export class RoleRoleOptionEntity {
  public roleId: number;
  public roleOptionId: number;

  constructor(options: RoleRoleOptionEntityOptions) {
    const { roleId, roleOptionId } = options;
    this.roleId = roleId;
    this.roleOptionId = roleOptionId;
  }

  static fromJson(json: string): RoleRoleOptionEntity {
    json = json === "" ? "{}" : json;
    const obj = JSON.parse(json);
    return RoleRoleOptionEntity.fromObject(obj);
  }

  static fromObject(obj: { [key: string]: any }): RoleRoleOptionEntity {
    const { roleId, roleOptionId } = obj;
    return new RoleRoleOptionEntity({ roleId, roleOptionId });
  }
}
