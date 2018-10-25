import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { SelectableHouse } from './selectable-house';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HouseVoteService {

  constructor(
    @Inject(LOCAL_STORAGE) private storage: StorageService,
    private db: AngularFireDatabase
  ) {}

  public getHouses(): Observable<SelectableHouse[]> {
    return of([{
        selected: false,
        address: '10827 Beeler St',
        path: 'assets/images/10827BeelerSt.jpg',
        number: 1
      }, {
        selected: false,
        address: '9465 E 108th Pl',
        path: 'assets/images/9465E108thPl.jpg',
        number: 2
      }, {
        selected: false,
        address: '10824 Belle Creek Blvd',
        path: 'assets/images/10824BelleCreekBlvd.jpg',
        number: 6
      }, {
        selected: false,
        address: '9498 E 108th Ave',
        path: 'assets/images/9498E108thAve.jpg',
        number: 3
      }, {
        selected: false,
        address: '10755 Boston St',
        path: 'assets/images/10755BostonSt.jpg',
        number: 9
      }, {
        selected: false,
        address: '10774 Belle Creek Blvd #117',
        path: 'assets/images/10774BelleCreekBlvd117.jpg',
        number: 10
      }, {
        selected: false,
        address: '9253 E 108th Ave',
        path: 'assets/images/9253E108thAve.jpg',
        number: 7
      }, {
        selected: false,
        address: '10864 Belle Creek Blvd',
        path: 'assets/images/10864BelleCreekBlvd.jpg',
        number: 4
      }, {
        selected: false,
        address: '9451 E 106th Ave',
        path: 'assets/images/9451E106thAve.jpg',
        number: 8
      }, {
        selected: false,
        address: '9676 E 105th Pl',
        path: 'assets/images/9676E105thPl.jpg',
        number: 11
      }, {
        selected: false,
        address: '9271 E 107th Pl',
        path: 'assets/images/9271E107thPl.jpg',
        number: 5
      }, {
        selected: false,
        address: '10674 Belle Creek Blvd',
        path: 'assets/images/10674BelleCreekBlvd.jpg',
        number: 12
      }, {
        selected: false,
        address: '9440 E 106th Ave',
        path: 'assets/images/9440E106thAve.jpg',
        number: 13
      }, {
        selected: false,
        address: '9430 E 106th Ave',
        path: 'assets/images/9430E106thAve.jpg',
        number: 14
      }, {
        selected: false,
        address: '9197 E 107th Ave',
        path: 'assets/images/9197E107thAve.jpg',
        number: 15
      }
    ]);
  }

  public saveVote(house: SelectableHouse): Observable <any> {
    let voteKey = this.storage.get('uuid');
    if (voteKey) {
      this.db.object(`/houseVotes/${ voteKey }`).update(house);
    } else {
      voteKey = this.db.list('houseVotes').push(house).key;
      this.storage.set('uuid', voteKey);
    }

    this.storage.set('selected', JSON.stringify(house));
    return this.db.object(`/houseVotes/${ voteKey }`).valueChanges();
  }
}
