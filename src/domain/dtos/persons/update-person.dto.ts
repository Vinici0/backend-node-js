export class UpdatePersonDto {
  private constructor(
    public readonly id: number,
    public readonly firstName?: string,
    public readonly lastName?: string,
    public readonly identification?: string,
    public readonly birthDate?: Date
  ) {}

  get values(): { [key: string]: any } {
    const returnObj: { [key: string]: any } = {};
    if (this.firstName) returnObj.firstName = this.firstName;
    if (this.lastName) returnObj.lastName = this.lastName;
    if (this.identification) returnObj.identification = this.identification;
    if (this.birthDate) returnObj.birthDate = this.birthDate;
    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdatePersonDto?] {
    const { id, firstName, lastName, identification, birthDate } = props;

    if (!id || isNaN(Number(id)))
      return ["id must be a valid number", undefined];

    let parsedBirthDate: Date | undefined;
    if (birthDate) {
      parsedBirthDate = new Date(birthDate);
      if (parsedBirthDate.toString() === "Invalid Date")
        return ["birthDate must be a valid date", undefined];
    }

    return [
      undefined,
      new UpdatePersonDto(
        Number(id),
        firstName,
        lastName,
        identification,
        parsedBirthDate
      ),
    ];
  }
}
