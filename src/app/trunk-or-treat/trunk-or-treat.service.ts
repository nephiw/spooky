import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Contact } from './contact';

@Injectable()
export class TrunkOrTreatService {

  constructor(private db: AngularFireDatabase) { }

  public createNewContact(data): AngularFireObject<Contact> {
    const contact = new Contact(data);
    const contactKey = this.db.list('contacts').push(contact).key;
    return this.db.object(`/contact/${ contactKey }`);
  }

  public updateContact(contact: AngularFireObject<Contact>, data: any) {
    return contact.update(data);
  }
}
