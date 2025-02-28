export class CreatePersonDto {
  private constructor(
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly identification: string,
    public readonly birthDate: Date
  ) {}

  static create(props: { [key: string]: any }): [string?, CreatePersonDto?] {
    const { firstName, lastName, identification, birthDate } = props;

    if (!firstName) return ["firstName is required", undefined];
    if (!lastName) return ["lastName is required", undefined];
    if (!identification) return ["identification is required", undefined];
    if (!birthDate) return ["birthDate is required", undefined];

    const parsedBirthDate = new Date(birthDate);
    if (parsedBirthDate.toString() === "Invalid Date")
      return ["birthDate must be a valid date", undefined];

    return [
      undefined,
      new CreatePersonDto(firstName, lastName, identification, parsedBirthDate),
    ];
  }
}
