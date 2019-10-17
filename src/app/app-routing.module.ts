import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthenticationPageComponent } from 'common/authentication';

const routes: Routes = [
  { path: 'authentication',  component: AuthenticationPageComponent },
  { path: 'admin',           loadChildren: './admin/admin.module#AdminModule' },
  { path: 'trunkOrTreat',    loadChildren: './trunk-or-treat/trunk-or-treat.module#TrunkOrTreatModule' },
  { path: 'trunkortreat',    redirectTo: 'trunkOrTreat' },
  { path: 'booYourNeighbor', loadChildren: './boo-your-neighbor/boo-your-neighbor.module#BooYourNeighborModule' },
  { path: 'booyourneighbor', redirectTo: 'booYourNeighbor' },
  { path: 'houseDecoration', loadChildren: './house-decoration/house-decoration.module#HouseDecorationModule' },
  { path: 'housedecoration', redirectTo: 'houseDecoration' },
  { path: 'houseVote',       loadChildren: './house-vote/house-vote.module#HouseVoteModule' },
  { path: 'housevote',       redirectTo: 'houseVote' },
  { path: '', component: HomePageComponent },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
