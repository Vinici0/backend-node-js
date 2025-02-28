export class UpdateUserDto {
  private constructor(
    public readonly id: number,
    public readonly username?: string,
    public readonly password?: string,
    public readonly email?: string,
    public readonly sessionActive?: string,
    public readonly status?: string,
    public readonly personId?: number
  ) {}

  get values(): { [key: string]: any } {
    const returnObj: { [key: string]: any } = {};
    if (this.username) returnObj.username = this.username;
    if (this.password) returnObj.password = this.password;
    if (this.email) returnObj.email = this.email;
    if (this.sessionActive) returnObj.sessionActive = this.sessionActive;
    if (this.status) returnObj.status = this.status;
    if (this.personId !== undefined) returnObj.personId = this.personId;
    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateUserDto?] {
    const { id, username, password, email, sessionActive, status, personId } =
      props;

    if (!id || isNaN(Number(id)))
      return ["id must be a valid number", undefined];

    let parsedPersonId: number | undefined;
    if (personId !== undefined) {
      parsedPersonId = Number(personId);
      if (isNaN(parsedPersonId))
        return ["personId must be a valid number", undefined];
    }

    return [
      undefined,
      new UpdateUserDto(
        Number(id),
        username,
        password,
        email,
        sessionActive,
        status,
        parsedPersonId
      ),
    ];
  }
}
