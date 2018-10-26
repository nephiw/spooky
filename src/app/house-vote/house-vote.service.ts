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
        path: 'assets/images/10827BeelerSt.png',
        number: 1
      }, {
        selected: false,
        address: '9465 E 108th Pl',
        path: 'assets/images/9465E108thPl.png',
        number: 2
      }, {
        selected: false,
        address: '10824 Belle Creek Blvd',
        path: 'assets/images/10824BelleCreekBlvd.png',
        number: 6
      }, {
        selected: false,
        address: '9498 E 108th Ave',
        path: 'assets/images/9498E108thAve.png',
        number: 3
      }, {
        selected: false,
        address: '10755 Boston St',
        path: 'assets/images/10755BostonSt.png',
        number: 9
      }, {
        selected: false,
        address: '10774 Belle Creek Blvd #117',
        path: 'assets/images/10774BelleCreekBlvd117.png',
        number: 10
      }, {
        selected: false,
        address: '9253 E 108th Ave',
        path: 'assets/images/9253E108thAve.png',
        number: 7
      }, {
        selected: false,
        address: '10864 Belle Creek Blvd',
        path: 'assets/images/10864BelleCreekBlvd.png',
        number: 4
      }, {
        selected: false,
        address: '9451 E 106th Ave',
        path: 'assets/images/9451E106thAve.png',
        number: 8
      }, {
        selected: false,
        address: '9676 E 105th Pl',
        path: 'assets/images/9676E105thPl.png',
        number: 11
      }, {
        selected: false,
        address: '9271 E 107th Pl',
        path: 'assets/images/9271E107thPl.png',
        number: 5
      }, {
        selected: false,
        address: '10674 Belle Creek Blvd',
        path: 'assets/images/10674BelleCreekBlvd.png',
        number: 12
      }, {
        selected: false,
        address: '9440 E 106th Ave',
        path: 'assets/images/9440E106thAve.png',
        number: 13
      }, {
        selected: false,
        address: '9430 E 106th Ave',
        path: 'assets/images/9430E106thAve.png',
        number: 14
      }, {
        selected: false,
        address: '9197 E 107th Ave',
        path: 'assets/images/9197E107thAve.png',
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
