import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'bc-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.less']
})
export class ContactsComponent implements OnChanges {
  @Input() public contacts: any[];
  public filteredContacts: any[];
  public totalTrunks = 0;
  public totalHouses = 0;

  public showHouses = true;
  public showTrunks = true;

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.contacts && changes.contacts.currentValue) {
      if (this.contacts) {
        this.totalTrunks = this.contacts.reduce((accumulator: number, current: any) => {
          return accumulator + current.numTrunks;
        }, 0);

        this.totalHouses = this.contacts.reduce((accumulator: number, current: any) => {
          return accumulator + (current.streetAddress ? 1 : 0);
        }, 0);
      } else {
        this.totalTrunks = 0;
        this.totalHouses = 0;
      }
      this.updateFilters();
    }
  }

  public updateFilters(): void {
    this.filteredContacts = this.contacts.filter((contact) => {
      const hasTrunks = this.showTrunks && contact.numTrunks > 0;
      const hasHouses = this.showHouses && !!contact.streetAddress;
      return hasTrunks || hasHouses;
    });
  }
}
