export class Trunk {
  public contactKey: string;
  public numTrunks: number;
  public timestamp: number;

  public constructor({ contactKey, numTrunks = 1 }: { contactKey: string, numTrunks: number }) {
    this.contactKey = contactKey;
    this.numTrunks = numTrunks;
    this.timestamp = Date.now();
  }
}
