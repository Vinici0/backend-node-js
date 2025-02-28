export class CreateUserDto {
  private constructor(
    public readonly username: string,
    public readonly password: string,
    public readonly email: string,
    public readonly sessionActive: string,
    public readonly status?: string,
    public readonly personId?: number
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateUserDto?] {
    const { username, password, email, sessionActive, status, personId } =
      props;

    if (!username) return ["username is required", undefined];
    if (!password) return ["password is required", undefined];
    if (!email) return ["email is required", undefined];
    if (!sessionActive) return ["sessionActive is required", undefined];

    let parsedPersonId: number | undefined;
    if (personId !== undefined) {
      parsedPersonId = Number(personId);
      if (isNaN(parsedPersonId))
        return ["personId must be a valid number", undefined];
    }

    return [
      undefined,
      new CreateUserDto(
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
