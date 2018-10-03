import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bc-trunk-or-treat-complete',
  templateUrl: './trunk-or-treat-complete.component.html',
  styleUrls: ['./trunk-or-treat-complete.component.less']
})
export class TrunkOrTreatCompleteComponent {
  @Output() public reset = new EventEmitter<void>();
}
