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
  private contactsRef: Observable<any>;
  private trunkRef: Observable<any>;
  private houseRef: Observable<any>;
  private votesRef: Observable<any>;

  private byCount: (a: any, b: any) => number;
  private byTimestamp: (a: any, b: any) => number;
  private byEmail: (a: any, b: any) => number;

  private objectSort(prop: string, a: any, b: any): number {
    if (a[prop] > b[prop]) { return  1; }
    if (a[prop] < b[prop]) { return -1; }
    return 0;
  }

  constructor(private db: AngularFireDatabase) {
    this.trunkRef = this.db.list('/trunks').valueChanges();
    this.houseRef = this.db.list('/houses').valueChanges();
    this.contactsRef = this.db.list('/contacts').valueChanges();
    this.votesRef = this.db.list('/houseVotes').valueChanges();

    this.byCount = this.objectSort.bind(this, 'count');
    this.byTimestamp = this.objectSort.bind(this, 'timestamp');
    this.byEmail = this.objectSort.bind(this, 'email');
  }

  public getAllContacts(): Observable<any[]> {
    return this.contactsRef.pipe(
      map((contacts) => {
        contacts.sort(this.byEmail);
        return contacts;
      })
    );
  }

  public getHouseContacts(): Observable<any[]> {
    return zip(this.houseRef, this.contactsRef).pipe(
      map(([houses, contacts]) => {
        const results = [];

        houses.forEach((house: House) => {
          const contact = contacts.find(
            (c: Contact) => house.contactKey === c.key
          ) as Contact;

          results.push(
            Object.assign(
              {
                number: house.number || 0,
                streetAddress: house.streetAddress,
                timestamp: house.timestamp,
                emailed: house.emailed,
                signed: house.signed
              },
              contact
            )
          );
        });
        results.sort(this.byTimestamp);
        return results;
      })
    );
  }

  public getTrunkContacts(): Observable<any[]> {
    return zip(this.trunkRef, this.contactsRef).pipe(
      map(([trunks, contacts]) => {
        const results = [];

        trunks.forEach((trunk: Trunk) => {
          const contact = contacts.find(
            (c: Contact) => trunk.contactKey === c.key
          ) as Contact;

          results.push(
            Object.assign(
              {
                numTrunks: trunk.numTrunks || 0,
                timestamp: trunk.timestamp
              },
              contact
            )
          );
        });
        results.sort(this.byTimestamp);
        return results;
      })
    );
  }

  public getVotes(): Observable<any[]> {
    return this.votesRef.pipe(
      map(houseVotes => {
        return houseVotes.reduce((acc, currentValue) => {
          const key = (currentValue as any).address;
          acc[key] = acc[key] ? 1 + acc[key] : 1;
          return acc;
        }, {});
      }),
      map(countedGroups => {
        return Object.keys(countedGroups).map(key => ({
          address: key,
          count: countedGroups[key]
        }));
      }),
      map(unsortedGroups => {
        return unsortedGroups.sort(this.byCount);
      })
    );
  }

  public changeEmailed(key: string, emailed: boolean): void {
    this.db.object(`/houses/${key}/emailed`).set(emailed);
  }

  public changeSigned(key: string, signed: boolean): void {
    this.db.object(`/houses/${key}/signed`).set(signed);
  }

  public setNumber(key: string, num: number): void {
    this.db.object(`/houses/${key}/number`).set(num);
  }
}
