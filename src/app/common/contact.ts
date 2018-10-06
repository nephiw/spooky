export class Contact {
  public firstName: string;
  public lastName: string;
  public emailAddress: string;

  constructor(data: any = { firstName: '', lastName: '', emailAddress: '' }) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.emailAddress = data.emailAddress;
  }
}
