import { Injectable } from '@angular/core';
import { Observable, zip } from 'rxjs';
import { map } from 'rxjs/operators';
import { Contact, Trunk } from 'common';
import { AngularFireDatabase } from '@angular/fire/database';
import { House } from 'house-decoration';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private db: AngularFireDatabase) { }

  public getAllContacts(): Observable<any[]> {
    const trunkRef = this.db.list('/trunks').valueChanges();
    const houseRef = this.db.list('/houses').valueChanges();
    const contactsRef = this.db.list('/contacts').valueChanges();

    return zip(trunkRef, houseRef, contactsRef).pipe(
      map(([trunks, houses, contacts]) => {
        const results = [];

        contacts.forEach((contact: Contact) => {
          const house = houses.find((h: House) => h.contactKey === contact.key) as House;
          const trunk = trunks.find((t: Trunk) => t.contactKey === contact.key) as Trunk;

          results.push(Object.assign({
            numTrunks: trunk ? trunk.numTrunks : 0,
            streetAddress: house ? house.streetAddress : ''
          }, contact));
        });
        return results;
      })
    );
  }
}
