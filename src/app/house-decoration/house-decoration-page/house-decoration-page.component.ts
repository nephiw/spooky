import { Component, OnInit } from '@angular/core';
import { LoadingState } from 'common/loading-state.enum';

@Component({
  selector: 'bc-house-decoration-page',
  templateUrl: './house-decoration-page.component.html',
  styleUrls: ['./house-decoration-page.component.less']
})
export class HouseDecorationPageComponent implements OnInit {
  public loadingState: LoadingState;
  public States = LoadingState;

  constructor() { }

  ngOnInit() {
    this.loadingState = LoadingState.UNSTARTED;
  }

  public stateChanged(state: LoadingState): void {
    this.loadingState = state;
  }
}
