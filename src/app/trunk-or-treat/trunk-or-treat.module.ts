import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrunkOrTreatRoutingModule } from './trunk-or-treat-routing.module';
import { TrunkOrTreatPageComponent } from './trunk-or-treat-page/trunk-or-treat-page.component';
import { TrunkOrTreatService } from './trunk-or-treat.service';
import { TrunkOrTreatFormComponent } from './trunk-or-treat-page/trunk-or-treat-form/trunk-or-treat-form.component';
import { TrunkOrTreatCompleteComponent } from './trunk-or-treat-page/trunk-or-treat-complete/trunk-or-treat-complete.component';
import { BcCommonModule } from 'common/bc-common.module';

@NgModule({
  imports: [
    CommonModule,
    TrunkOrTreatRoutingModule,
    BcCommonModule
  ],
  declarations: [
    TrunkOrTreatPageComponent,
    TrunkOrTreatFormComponent,
    TrunkOrTreatCompleteComponent
  ],
  providers: [
    TrunkOrTreatService
  ]
})
export class TrunkOrTreatModule { }
