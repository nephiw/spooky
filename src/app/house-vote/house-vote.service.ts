import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { SelectableHouse } from './selectable-house';
import { House } from 'house-decoration';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HouseVoteService {
  private readonly houseRef: Observable<any>;

  constructor(
    @Inject(LOCAL_STORAGE) private storage: StorageService,
    private db: AngularFireDatabase
  ) {
    this.houseRef = this.db.list('/houses').valueChanges();
  }

  public getHouses(): Observable<SelectableHouse[]> {
    return this.houseRef.pipe(map((houses: House[]) => {
      return houses.map((house: House) => ({
        selected: false,
        address: house.streetAddress,
        path: '',
        number: house.number
      } as SelectableHouse));
    }));
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
