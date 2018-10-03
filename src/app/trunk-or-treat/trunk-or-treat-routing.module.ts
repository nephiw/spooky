import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrunkOrTreatPageComponent } from './trunk-or-treat-page/trunk-or-treat-page.component';

const routes: Routes = [
  { path: '', component: TrunkOrTreatPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrunkOrTreatRoutingModule { }
