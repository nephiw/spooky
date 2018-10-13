import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { HomePageComponent } from './home-page/home-page.component';

import { AppRoutingModule } from './app-routing.module';
import { ContactService } from 'common';
import { AuthenticationPageComponent, PasswordChangePageComponent } from 'common/authentication';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BcCommonModule } from 'common/bc-common.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AuthenticationPageComponent,
    PasswordChangePageComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    BcCommonModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
