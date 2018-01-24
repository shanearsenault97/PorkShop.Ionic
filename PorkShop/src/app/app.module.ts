import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {IonicStorageModule} from '@ionic/storage';

import { MyApp } from './app.component';
import {NavigationService} from "../services/NavigationService";
import { ReservationService } from '../services/ReservationService';
import { BaseGUIDService } from '../services/BaseGUIDService';
import { CacheService } from '../services/CacheService';
import { UUIDService } from '../services/UUIDService';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__porkshop',
      driverOrder: ['localstorage']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    BaseGUIDService,
    CacheService,
    NavigationService,
    ReservationService,
    SplashScreen,
    StatusBar,
    UUIDService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
