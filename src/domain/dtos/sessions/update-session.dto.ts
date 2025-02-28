export class UpdateSessionDto {
  private constructor(
    public readonly id: number,
    public readonly startDate?: Date,
    public readonly endDate?: Date,
    public readonly userId?: number
  ) {}

  get values(): { [key: string]: any } {
    const returnObj: { [key: string]: any } = {};
    if (this.startDate) returnObj.startDate = this.startDate;
    if (this.endDate) returnObj.endDate = this.endDate;
    if (this.userId !== undefined) returnObj.userId = this.userId;
    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateSessionDto?] {
    const { id, startDate, endDate, userId } = props;

    if (!id || isNaN(Number(id)))
      return ["id must be a valid number", undefined];

    let parsedStartDate: Date | undefined;
    if (startDate) {
      parsedStartDate = new Date(startDate);
      if (parsedStartDate.toString() === "Invalid Date")
        return ["startDate must be a valid date", undefined];
    }

    let parsedEndDate: Date | undefined;
    if (endDate) {
      parsedEndDate = new Date(endDate);
      if (parsedEndDate.toString() === "Invalid Date")
        return ["endDate must be a valid date", undefined];
    }

    let parsedUserId: number | undefined;
    if (userId !== undefined) {
      parsedUserId = Number(userId);
      if (isNaN(parsedUserId))
        return ["userId must be a valid number", undefined];
    }

    return [
      undefined,
      new UpdateSessionDto(
        Number(id),
        parsedStartDate,
        parsedEndDate,
        parsedUserId
      ),
    ];
  }
}
