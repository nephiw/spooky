import { Component } from '@angular/core';
import { AdminService } from 'admin/admin.service';

@Component({
  selector: 'bc-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.less']
})
export class ContactsPageComponent {
  public allContacts$ = this.admin.getAllContacts();

  constructor(
    private admin: AdminService
  ) { }
}
