import { Component } from '@angular/core';
import { AdminService } from 'admin/admin.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'bc-house-page',
  templateUrl: './house-page.component.html',
  styleUrls: ['./house-page.component.less']
})
export class HousePageComponent {
  public houses$ = this.admin.getHouseContacts();
  public totalHouses$: Observable<number> = this.houses$.pipe(map(houses => houses.length));

  constructor(
    private admin: AdminService
  ) { }
}
