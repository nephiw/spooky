import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bc-trunk-table',
  templateUrl: './trunk-table.component.html',
  styleUrls: ['./trunk-table.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrunkTableComponent {
  @Input() public trunks: any[];
}
