import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoundProgressModule } from 'angular-svg-round-progressbar';

import { AppComponent } from './app.component';
import { Circle } from './Circle';
import { CircleComponent } from './circle/circle.component';
import { CircleService } from './services/circle.service';
import { StartCirclesService } from './services/start-circles.service';
import { StartCirclesComponent } from './start-circles/start-circles.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, RoundProgressModule, HttpClientModule],
  providers: [CircleService, StartCirclesService, Circle],
  declarations: [AppComponent, CircleComponent, StartCirclesComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/