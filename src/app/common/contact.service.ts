import { Injectable } from '@angular/core';
import { AngularFireObject, AngularFireDatabase } from '@angular/fire/database';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private readonly InvalidStringRegEx = /[^a-zA-Z0-9]/g;

  constructor(
    private db: AngularFireDatabase
  ) { }

  public createNewContact(data): AngularFireObject<Contact> {
    const contact = new Contact(data);
    const contactKey = this.generateKey(contact);
    const contacts = this.db.object('/contacts');
    contacts.update({ [ contactKey ]: contact });

    return this.db.object(`/contact/${ contactKey }`);
  }

  public generateKey(data: { emailAddress: string }): string {
    return data.emailAddress.replace(this.InvalidStringRegEx, '_');
  }
}
