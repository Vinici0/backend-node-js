export class CreateSessionDto {
  private constructor(
    public readonly startDate: Date,
    public readonly endDate: Date,
    public readonly userId: number
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateSessionDto?] {
    const { startDate, endDate, userId } = props;

    if (!startDate) return ["startDate is required", undefined];
    if (!endDate) return ["endDate is required", undefined];
    if (!userId || isNaN(Number(userId)))
      return ["userId must be a valid number", undefined];

    const parsedStartDate = new Date(startDate);
    if (parsedStartDate.toString() === "Invalid Date")
      return ["startDate must be a valid date", undefined];

    const parsedEndDate = new Date(endDate);
    if (parsedEndDate.toString() === "Invalid Date")
      return ["endDate must be a valid date", undefined];

    return [
      undefined,
      new CreateSessionDto(parsedStartDate, parsedEndDate, Number(userId)),
    ];
  }
}
