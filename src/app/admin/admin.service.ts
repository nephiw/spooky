import { Injectable } from '@angular/core';
import { Observable, zip } from 'rxjs';
import { map } from 'rxjs/operators';
import { Contact, Trunk } from 'common';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private db: AngularFireDatabase) { }

  public getAllContacts(): Observable<Contact[]> {
    const contactsRef = this.db.list('/contacts');
    return contactsRef.valueChanges().pipe(
      map(changes => changes as Contact[])
    );
  }

  public getAllTrunks(): Observable<any[]> {
    const trunkRef = this.db.list('/trunks').valueChanges();
    return zip(trunkRef, this.getAllContacts()).pipe(
      map(([trunks, contacts]) => {
        const result = [];
        trunks.forEach((trunk: Trunk) => {
          const contact = contacts.find((ctct: Contact) => ctct.key === trunk.contactKey);
          result.push(Object.assign({ numTrunks: trunk.numTrunks }, contact));
        });
        return result;
      })
    );
  }
}
