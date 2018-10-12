import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BcCommonModule } from 'common/bc-common.module';

import { TrunkOrTreatRoutingModule } from './trunk-or-treat-routing.module';
import { TrunkOrTreatService } from './trunk-or-treat.service';
import {
  TrunkOrTreatPageComponent,
  TrunkOrTreatFormComponent,
  TrunkOrTreatCompleteComponent
} from './trunk-or-treat-page';

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
