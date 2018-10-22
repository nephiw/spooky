import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HouseVotePageComponent } from './house-vote-page/house-vote-page.component';

const routes: Routes = [
  { path: '', component: HouseVotePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HouseVoteRoutingModule { }
