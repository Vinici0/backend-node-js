export class CreateRoleDto {
  private constructor(public readonly roleName: string) {}

  static create(props: { [key: string]: any }): [string?, CreateRoleDto?] {
    const { roleName } = props;
    if (!roleName) return ["roleName is required", undefined];
    return [undefined, new CreateRoleDto(roleName)];
  }
}
