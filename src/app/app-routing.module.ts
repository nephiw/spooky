import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'trunkOrTreat',    loadChildren: './trunk-or-treat/trunk-or-treat.module#TrunkOrTreatModule' },
  { path: 'booYourNeighbor', loadChildren: './boo-your-neighbor/boo-your-neighbor.module#BooYourNeighborModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }