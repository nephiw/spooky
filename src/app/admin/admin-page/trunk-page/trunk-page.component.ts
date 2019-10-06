import { Component } from '@angular/core';
import { AdminService } from 'admin/admin.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'bc-trunk-page',
  templateUrl: './trunk-page.component.html',
  styleUrls: ['./trunk-page.component.less']
})
export class TrunkPageComponent {
  public trunks$ = this.admin.getTrunkContacts();
  public totalTrunks$: Observable<number> = this.trunks$.pipe(map(trunks => trunks.length));

  constructor(
    private admin: AdminService
  ) { }
}
