import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HouseVoteRoutingModule } from './house-vote-routing.module';
import { HouseVotePageComponent } from './house-vote-page/house-vote-page.component';
import { HouseEntryComponent } from './house-vote-page/house-entry/house-entry.component';
import { BcCommonModule } from 'common/bc-common.module';

@NgModule({
  imports: [
    CommonModule,
    BcCommonModule,
    HouseVoteRoutingModule
  ],
  declarations: [
    HouseVotePageComponent,
    HouseEntryComponent
  ]
})
export class HouseVoteModule { }
