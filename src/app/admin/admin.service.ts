import { Injectable } from '@angular/core';
import { Observable, zip, from } from 'rxjs';
import { map, groupBy, mergeMap, toArray, concatMap, reduce, count } from 'rxjs/operators';
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

  public getVotes(): Observable<any[]> {
    return this.db.list('/houseVotes').valueChanges().pipe(
      map((results) => {
        const groups = results.reduce((acc, currentValue) => {
          const key = (currentValue as any).address;
          acc[key] = acc[key] ? 1 + acc[key] : 1;
          return acc;
        }, {});
        const simplifiedResults = Object.keys(groups).map((key) => ({ address: key, count: groups[key] }));
        return simplifiedResults.sort((a, b) => {
          if (a.count < b.count) { return 1; }
          if (a.count === b.count) { return 0; }
          if (a.count > b.count) { return -1; }
        });
      })
    );

    //   concatMap(list => from(list)),
    //   groupBy(house => (house as any).address),
    //   mergeMap(group => {
    //     return group.pipe(
    //       count(),
    //       map(total => {
    //         console.log('map');
    //         return { address: group.key, total };
    //       }),
    //       toArray()
    //     );
    //   })
    // );
  }
}
