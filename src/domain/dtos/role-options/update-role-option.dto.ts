export class UpdateRoleOptionDto {
  private constructor(
    public readonly id: number,
    public readonly optionName?: string
  ) {}

  get values(): { [key: string]: any } {
    const returnObj: { [key: string]: any } = {};
    if (this.optionName) returnObj.optionName = this.optionName;
    return returnObj;
  }

  static create(props: {
    [key: string]: any;
  }): [string?, UpdateRoleOptionDto?] {
    const { id, optionName } = props;
    if (!id || isNaN(Number(id)))
      return ["id must be a valid number", undefined];
    return [undefined, new UpdateRoleOptionDto(Number(id), optionName)];
  }
}
