export interface SessionEntityOptions {
  id?: number;
  startDate: Date;
  endDate: Date;
  userId: number; // Foreign key to User
}

export class SessionEntity {
  public id?: number;
  public startDate: Date;
  public endDate: Date;
  public userId: number;

  constructor(options: SessionEntityOptions) {
    const { id, startDate, endDate, userId } = options;
    this.id = id;
    this.startDate = startDate;
    this.endDate = endDate;
    this.userId = userId;
  }

  static fromJson(json: string): SessionEntity {
    json = json === "" ? "{}" : json;
    const obj = JSON.parse(json);
    return SessionEntity.fromObject(obj);
  }

  static fromObject(obj: { [key: string]: any }): SessionEntity {
    const { id, startDate, endDate, userId } = obj;
    return new SessionEntity({
      id,
      startDate: startDate instanceof Date ? startDate : new Date(startDate),
      endDate: endDate instanceof Date ? endDate : new Date(endDate),
      userId,
    });
  }
}
