import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bc-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {
  public acceptingTrunks = false;
  public acceptingHouses = false;
  public acceptingVotes = false;

  public ngOnInit(): void {
    const now = (new Date()).getTime();

    const houseCutoff = new Date('2019-10-22T23:55:00');
    const trunkCutoff = new Date('2019-10-26T17:00:00');
    const voteCutoff = new Date('2019-10-31T18:00:00');
    const voteStart =  new Date('2019-10-19T23:55:01');

    this.acceptingHouses = now < houseCutoff.getTime();
    this.acceptingTrunks = now < trunkCutoff.getTime();
    this.acceptingVotes = now < voteCutoff.getTime() && now > voteStart.getTime();
  }
}
