import { Component, Input } from '@angular/core';

@Component({
  selector: 'bc-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.less']
})
export class ContactsComponent {
  @Input() public contacts: any[];
}
