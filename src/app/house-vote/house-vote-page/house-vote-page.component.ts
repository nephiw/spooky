import { Component, OnInit, Inject } from '@angular/core';
import { take } from 'rxjs/operators';
import { SelectableHouse } from 'house-vote/selectable-house';
import { StorageService, LOCAL_STORAGE } from 'ngx-webstorage-service';
import { HouseVoteService } from 'house-vote/house-vote.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'bc-house-vote-page',
  templateUrl: './house-vote-page.component.html',
  styleUrls: ['./house-vote-page.component.less']
})
export class HouseVotePageComponent implements OnInit {
  public houses: SelectableHouse[];

  constructor(
    @Inject(LOCAL_STORAGE) private storage: StorageService,
    private voteService: HouseVoteService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.voteService.getHouses()
      .pipe(take(1))
      .subscribe((houses) => {
        this.houses = houses.sort((a, b) => {
          if (a.number < b.number) { return -1; }
          if (a.number === b.number) { return 0; }
          if (a.number > b.number) { return 1; }
        });
        const currentString = this.storage.get('selected');
        const currentSelection = currentString ? JSON.parse(currentString) : null;

        if (currentSelection) {
          const previousSelection = this.houses.find((house) => house.address === currentSelection.address);
          previousSelection.selected = true;
        }
    });
  }

  public onHouseSelected(selectedHouse: SelectableHouse): void {
    this.houses.forEach((house) => house.selected = false);
    selectedHouse.selected = true;
    this.voteService.saveVote(selectedHouse)
      .pipe(take(1))
      .subscribe((_results) => {
        this.toastr.success(
          `You have successfully voted for ${ selectedHouse.address }. ` +
          `Clicking another address will update your vote.`
        );
      });
  }
}
