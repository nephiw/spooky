import { Component, OnInit } from '@angular/core';
import { AdminService } from 'admin/admin.service';

@Component({
  selector: 'bc-voting-results',
  templateUrl: './voting-results.component.html',
  styleUrls: ['./voting-results.component.less']
})
export class VotingResultsComponent implements OnInit {
  public votingResults$ = this.adminService.getVotes();
  public votesCast: number;

  constructor(
    private adminService: AdminService
  ) { }

  public ngOnInit(): void {
    this.votingResults$.subscribe((results) => {
      this.votesCast = results.reduce((acc, item) => acc = acc + item.count, 0);
    });
  }
}
