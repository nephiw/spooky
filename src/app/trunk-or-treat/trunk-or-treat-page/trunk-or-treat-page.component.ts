import { Component, OnInit } from '@angular/core';

export enum LoadingState {
  UNSTARTED = 'unstarted',
  LOADING = 'loading',
  ERROR = 'error',
  COMPLETED = 'completed'
}

@Component({
  selector: 'bc-trunk-or-treat-page',
  templateUrl: './trunk-or-treat-page.component.html',
  styleUrls: ['./trunk-or-treat-page.component.less']
})
export class TrunkOrTreatPageComponent implements OnInit{
  public loadingState: LoadingState;
  public States: any = LoadingState;

  constructor() { }

  public ngOnInit(): void {
    this.loadingState = LoadingState.UNSTARTED;
  }

  public stateChanged(state: LoadingState): void {
    this.loadingState = state;
  }
}
