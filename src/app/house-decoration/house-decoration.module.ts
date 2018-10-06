import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HouseDecorationRoutingModule } from './house-decoration-routing.module';
import { HouseDecorationPageComponent } from './house-decoration-page/house-decoration-page.component';
import { HouseDecorationFormComponent } from './house-decoration-page/house-decoration-form/house-decoration-form.component';
import { HouseDecorationCompleteComponent } from './house-decoration-page/house-decoration-complete/house-decoration-complete.component';
import { BcCommonModule } from 'common/bc-common.module';
import { HouseDecorationService } from './house-decoration.service';

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
