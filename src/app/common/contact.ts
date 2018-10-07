export class Contact {
  public firstName: string;
  public lastName: string;
  public emailAddress: string;
  public key: string;

  constructor(data: any = { firstName: '', lastName: '', emailAddress: '', key: '' }) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.emailAddress = data.emailAddress;
    this.key = data.key;
  }
}
