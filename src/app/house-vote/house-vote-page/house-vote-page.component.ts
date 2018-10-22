import { Component, OnInit, Inject } from '@angular/core';
import { SelectableHouse } from 'house-vote/selected-house';
import { StorageService, LOCAL_STORAGE } from 'ngx-webstorage-service';
import { RandomService } from 'common/random.service';

@Component({
  selector: 'bc-house-vote-page',
  templateUrl: './house-vote-page.component.html',
  styleUrls: ['./house-vote-page.component.less']
})
export class HouseVotePageComponent implements OnInit {
  public houses: SelectableHouse[];
  private uuid: string;

  constructor(
    @Inject(LOCAL_STORAGE) private storage: StorageService,
    private randomService: RandomService
  ) { }

  ngOnInit() {
    let currentSelection;
    try {
      const currentString = this.storage.get('selected');
      this.uuid = this.storage.get('uuid') || this.randomService.uuid();
      this.storage.set('uuid', this.uuid);
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
    // TODO: store to the server, move to service.
    this.houses.forEach((house) => house.selected = false);
    this.storage.set('selected', JSON.stringify(selectedHouse));
    selectedHouse.selected = true;
  }
}
