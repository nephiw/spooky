import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { HomePageComponent } from './home-page/home-page.component';
import { ContactService } from 'common';
import { AuthenticationPageComponent } from 'common/authentication';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { BcCommonModule } from 'common/bc-common.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AuthenticationPageComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    BrowserAnimationsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    StorageServiceModule,
    BcCommonModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
