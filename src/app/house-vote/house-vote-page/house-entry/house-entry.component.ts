import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SelectableHouse } from 'house-vote/selected-house';

@Component({
  selector: 'bc-house-entry',
  templateUrl: './house-entry.component.html',
  styleUrls: ['./house-entry.component.less']
})
export class HouseEntryComponent {
  @Input() house: SelectableHouse;
  @Output() select: EventEmitter<SelectableHouse> = new EventEmitter();

  public hideMe(event): void {
    event.target.setAttribute('hidden', 'hidden');
  }
}
