import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'common/authentication';

@Component({
  selector: 'bc-admin-button',
  templateUrl: './admin-button.component.html',
  styleUrls: ['./admin-button.component.less']
})
export class AdminButtonComponent implements OnInit {
  public loggedIn = false;

  constructor(
    private authService: AuthenticationService
  ) { }

  public ngOnInit(): void {
    this.authService.isLoggedIn().subscribe((val: boolean) => {
      this.loggedIn = val;
    });
  }
}
