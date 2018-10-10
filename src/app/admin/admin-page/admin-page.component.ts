import { Component } from '@angular/core';
import { AuthenticationService } from 'common/authentication';
import { Router } from '@angular/router';

@Component({
  selector: 'bc-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.less']
})
export class AdminPageComponent {

  constructor(
    private auth: AuthenticationService,
    private router: Router
  ) { }

  public logout(): void {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
