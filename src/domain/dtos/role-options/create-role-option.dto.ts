export class CreateRoleOptionDto {
  private constructor(public readonly optionName: string) {}

  static create(props: {
    [key: string]: any;
  }): [string?, CreateRoleOptionDto?] {
    const { optionName } = props;
    if (!optionName) return ["optionName is required", undefined];
    return [undefined, new CreateRoleOptionDto(optionName)];
  }
}
