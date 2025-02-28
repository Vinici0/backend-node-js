export class UpdateRoleDto {
  private constructor(
    public readonly id: number,
    public readonly roleName?: string
  ) {}

  get values(): { [key: string]: any } {
    const returnObj: { [key: string]: any } = {};
    if (this.roleName) returnObj.roleName = this.roleName;
    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateRoleDto?] {
    const { id, roleName } = props;
    if (!id || isNaN(Number(id)))
      return ["id must be a valid number", undefined];
    return [undefined, new UpdateRoleDto(Number(id), roleName)];
  }
}
