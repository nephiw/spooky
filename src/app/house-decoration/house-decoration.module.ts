import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BcCommonModule } from 'common/bc-common.module';
import { HouseDecorationRoutingModule } from './house-decoration-routing.module';
import { HouseDecorationService } from './house-decoration.service';
import {
  HouseDecorationPageComponent,
  HouseDecorationFormComponent,
  HouseDecorationCompleteComponent
} from './house-decoration-page';

@NgModule({
  imports: [
    CommonModule,
    HouseDecorationRoutingModule,
    BcCommonModule
  ],
  declarations: [
    HouseDecorationPageComponent,
    HouseDecorationFormComponent,
    HouseDecorationCompleteComponent
  ],
  providers: [
    HouseDecorationService
  ]
})
export class HouseDecorationModule { }
