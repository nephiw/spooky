import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoadingState } from 'common/loading-state.enum';

@Component({
  selector: 'bc-house-decoration-complete',
  templateUrl: './house-decoration-complete.component.html',
  styleUrls: ['./house-decoration-complete.component.less']
})
export class HouseDecorationCompleteComponent {
  @Output() public reset = new EventEmitter<LoadingState>();
}
