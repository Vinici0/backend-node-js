export class UpdateRoleRoleOptionDto {
  private constructor(
    public readonly roleId: number,
    public readonly roleOptionId: number
  ) {}

  static create(props: {
    [key: string]: any;
  }): [string?, UpdateRoleRoleOptionDto?] {
    const { roleId, roleOptionId } = props;
    if (!roleId || isNaN(Number(roleId)))
      return ["roleId must be a valid number", undefined];
    if (!roleOptionId || isNaN(Number(roleOptionId)))
      return ["roleOptionId must be a valid number", undefined];
    return [
      undefined,
      new UpdateRoleRoleOptionDto(Number(roleId), Number(roleOptionId)),
    ];
  }
}
