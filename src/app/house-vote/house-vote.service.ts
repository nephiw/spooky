import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { RandomService } from 'common/random.service';
import { SelectableHouse } from './selected-house';
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
        path: 'assets/images/10827BeelerSt.jpg'
      }, {
        selected: false,
        address: '9465 E 108th Pl',
        path: 'assets/images/9465E108thPl.jpg'
      }, {
        selected: false,
        address: '10824 Belle Creek Blvd',
        path: 'assets/images/10824BelleCreekBlvd.jpg'
      }, {
        selected: false,
        address: '9498 E 108th Ave',
        path: 'assets/images/9498E108thAve.jpg'
      }, {
        selected: false,
        address: '10755 Boston St',
        path: 'assets/images/10755BostonSt.jpg'
      }, {
        selected: false,
        address: '10774 Belle Creek Blvd #117',
        path: 'assets/images/10774BelleCreekBlvd117.jpg'
      }, {
        selected: false,
        address: '9253 E 108th Ave',
        path: 'assets/images/9253E108thAve.jpg'
      }, {
        selected: false,
        address: '10864 Belle Creek Blvd',
        path: 'assets/images/10864BelleCreekBlvd.jpg'
      }, {
        selected: false,
        address: '9451 E 106th Ave',
        path: 'assets/images/9451E106thAve.jpg'
      }, {
        selected: false,
        address: '9676 E 105th Pl',
        path: 'assets/images/9676E105thPl.jpg'
      }, {
        selected: false,
        address: '9271 E 107th Pl',
        path: 'assets/images/9271E107thPl.jpg'
      }, {
        selected: false,
        address: '10674 Belle Creek Blvd',
        path: 'assets/images/10674BelleCreekBlvd.jpg'
      }
    ]);
  }

  public saveVote(house: SelectableHouse): Observable < any > {
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
