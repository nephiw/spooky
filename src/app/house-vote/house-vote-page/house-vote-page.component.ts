import { Component, OnInit, Inject } from '@angular/core';
import { SelectableHouse } from 'house-vote/selected-house';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'bc-house-vote-page',
  templateUrl: './house-vote-page.component.html',
  styleUrls: ['./house-vote-page.component.less']
})
export class HouseVotePageComponent implements OnInit {
  public houses: SelectableHouse[];

  constructor(
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) { }

  ngOnInit() {
    let currentSelection;
    try {
      const currentString = this.storage.get('selected');
      currentSelection = currentString ? JSON.parse(currentString) : null;
    } catch (_error) {
      console.log('There was a problem fetching the selected choice, ' + _error);
    }

    this.houses = [
      { selected: false, address: '10827 Beeler St', path: 'assets/images/9676E105thPl.jpg' },
      { selected: false, address: '9465 E 108th Pl', path: 'assets/images/9676E105thPl.jpg' },
      { selected: false, address: '10824 Belle Creek Blvd', path: 'assets/images/9676E105thPl.jpg' },
      { selected: false, address: '9498 E 108th Ave', path: 'assets/images/9676E105thPl.jpg' },
      { selected: false, address: '10755 Boston St', path: 'assets/images/9676E105thPl.jpg' },
      { selected: false, address: '10774 Belle Creek Blvd #117', path: 'assets/images/9676E105thPl.jpg' },
      { selected: false, address: '9253 E 108th Ave', path: 'assets/images/9676E105thPl.jpg' },
      { selected: false, address: '10864 Belle Creek Blvd', path: 'assets/images/9676E105thPl.jpg' },
      { selected: false, address: '9451 East 106th Ave', path: 'assets/images/9676E105thPl.jpg' },
      { selected: false, address: '9676 E. 105th Pl', path: 'assets/images/9676E105thPl.jpg' },
      { selected: false, address: '9271 East 107th Pl', path: 'assets/images/9676E105thPl.jpg' }
    ];

    if (currentSelection) {
      const previousSelection = this.houses.find((house) => house.address === currentSelection.address);
      previousSelection.selected = true;
    }
  }

  public onHouseSelected(selectedHouse: SelectableHouse): void {
    // save to local storage and store to the server.
    this.houses.forEach((house) => house.selected = false);
    this.storage.set('selected', JSON.stringify(selectedHouse));
    selectedHouse.selected = true;
  }
}
