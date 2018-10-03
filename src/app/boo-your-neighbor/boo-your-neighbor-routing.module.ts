import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooYourNeighborPageComponent } from './boo-your-neighbor-page/boo-your-neighbor-page.component';

const routes: Routes = [
  { path: '', component: BooYourNeighborPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooYourNeighborRoutingModule { }
