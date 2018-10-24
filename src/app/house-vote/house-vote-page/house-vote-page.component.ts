import { Component, OnInit, Inject } from '@angular/core';
import { SelectableHouse } from 'house-vote/selected-house';
import { StorageService, LOCAL_STORAGE } from 'ngx-webstorage-service';
import { HouseVoteService } from 'house-vote/house-vote.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'bc-house-vote-page',
  templateUrl: './house-vote-page.component.html',
  styleUrls: ['./house-vote-page.component.less']
})
export class HouseVotePageComponent implements OnInit {
  public houses: SelectableHouse[];

  constructor(
    @Inject(LOCAL_STORAGE) private storage: StorageService,
    private voteService: HouseVoteService
  ) {}

  ngOnInit() {
    this.voteService.getHouses().pipe(take(1)).subscribe((houses) => {
      this.houses = this.shuffle(houses);
      const currentString = this.storage.get('selected');
      const currentSelection = currentString ? JSON.parse(currentString) : null;

      if (currentSelection) {
        const previousSelection = this.houses.find((house) => house.address === currentSelection.address);
        previousSelection.selected = true;
      }
    });
  }

  private shuffle(array: any[]): any[] {
    let counter = array.length;
    while (counter > 0) {
      const index = Math.floor(Math.random() * counter);
      counter--;

      const temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }

    return array;
  }


  public onHouseSelected(selectedHouse: SelectableHouse): void {
    this.houses.forEach((house) => house.selected = false);
    selectedHouse.selected = true;
    this.voteService.saveVote(selectedHouse).pipe(take(1)).subscribe((results) => {
      console.log(results);
    });
  }
}
