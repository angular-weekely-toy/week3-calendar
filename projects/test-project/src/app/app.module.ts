import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {KCalendarModule} from "k-calendar";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    KCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
