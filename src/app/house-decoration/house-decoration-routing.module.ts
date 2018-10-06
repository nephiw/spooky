import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HouseDecorationPageComponent } from './house-decoration-page/house-decoration-page.component';

const routes: Routes = [
  { path: '', component: HouseDecorationPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HouseDecorationRoutingModule { }
