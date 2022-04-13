import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { ApiRequestsService } from './services/api-requests/api-requests.service';
import { SharedDataService } from './services/shared-data/shared-data.service';
import { PageTransition } from './animations/page-transition';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  exports: [],
  imports: [BrowserModule, IonicModule.forRoot({ navAnimation: PageTransition}), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ApiRequestsService, SharedDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
