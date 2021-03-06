import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooYourNeighborRoutingModule } from './boo-your-neighbor-routing.module';
import { BooYourNeighborPageComponent } from './boo-your-neighbor-page';

@NgModule({
  imports: [
    CommonModule,
    BooYourNeighborRoutingModule
  ],
  declarations: [
    BooYourNeighborPageComponent
  ]
})
export class BooYourNeighborModule { }
