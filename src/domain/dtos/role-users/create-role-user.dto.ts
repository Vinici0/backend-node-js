export class CreateRoleUserDto {
  private constructor(
    public readonly roleId: number,
    public readonly userId: number
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateRoleUserDto?] {
    const { roleId, userId } = props;
    if (!roleId || isNaN(Number(roleId)))
      return ["roleId must be a valid number", undefined];
    if (!userId || isNaN(Number(userId)))
      return ["userId must be a valid number", undefined];
    return [undefined, new CreateRoleUserDto(Number(roleId), Number(userId))];
  }
}
