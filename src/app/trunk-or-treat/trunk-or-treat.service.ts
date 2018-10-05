import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Contact } from './contact';

@Injectable()
export class TrunkOrTreatService {
  private readonly InvalidStringRegEx = /\./g;

  constructor(private db: AngularFireDatabase) { }

  public createNewContact(data): AngularFireObject<Contact> {
    const contact = new Contact(data);
    const contactKey = this.sanitizeEmail(contact.emailAddress);
    const contacts = this.db.object('/contacts');
    contacts.update({ [ contactKey ]: contact });

    return this.db.object(`/contact/${ contactKey }`);
  }

  public updateContact(contact: AngularFireObject<Contact>, data: any) {
    return contact.update(data);
  }

  private sanitizeEmail(email: string): string {
    return email.replace(this.InvalidStringRegEx, '_');
  }
}
