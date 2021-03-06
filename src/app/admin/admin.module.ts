import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPageComponent, ContactsComponent, PasswordChangePageComponent } from './admin-page';
import { BcCommonModule } from 'common/bc-common.module';
import { ContactsPageComponent } from './admin-page/contacts-page/contacts-page.component';
import { VotingResultsComponent } from './admin-page/voting-results/voting-results.component';
import { TrunkPageComponent } from './admin-page/trunk-page/trunk-page.component';
import { HousePageComponent } from './admin-page/house-page/house-page.component';
import { HouseTableComponent } from './admin-page/house-page/house-table/house-table.component';
import { TrunkTableComponent } from './admin-page/trunk-page/trunk-table/trunk-table.component';
import { NumberInputComponent } from './admin-page/house-page/house-table/number-input/number-input.component';
import { HouseDetailPageComponent } from './admin-page/house-page/house-detail-page/house-detail-page.component';
import { PhotoEditorComponent } from './admin-page/house-page/house-detail-page/photo-editor/photo-editor.component';
import { LoadingComponent } from './admin-page/house-page/house-detail-page/loading/loading.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    BcCommonModule,
    FormsModule
  ],
  declarations: [
    AdminPageComponent,
    ContactsComponent,
    PasswordChangePageComponent,
    ContactsPageComponent,
    VotingResultsComponent,
    TrunkPageComponent,
    HousePageComponent,
    HouseTableComponent,
    TrunkTableComponent,
    NumberInputComponent,
    HouseDetailPageComponent,
    PhotoEditorComponent,
    LoadingComponent
  ]
})
export class AdminModule { }
