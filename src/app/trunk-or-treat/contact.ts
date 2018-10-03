export class Contact {
  public isDeleted = false;
  public firstName: string;
  public lastName: string;
  public emailAddress: string;
  public carCount: number;

  constructor(data: any = { firstName: '', lastName: '', emailAddress: '', carCount: 1 }) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.emailAddress = data.emailAddress;
    this.carCount = data.carCount;
  }
}
