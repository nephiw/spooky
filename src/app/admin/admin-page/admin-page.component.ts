import { Component } from '@angular/core';
import { AuthenticationService } from 'common/authentication';
import { Router } from '@angular/router';
import { AdminService } from 'admin/admin.service';

@Component({
  selector: 'bc-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.less']
})
export class AdminPageComponent {
  public allContacts$ = this.admin.getAllContacts();

  constructor(
    private auth: AuthenticationService,
    private admin: AdminService,
    private router: Router
  ) { }

  public logout(): void {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
