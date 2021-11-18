import { NgModule } from '@angular/core';
import { KCalendarComponent } from './k-calendar.component';
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [
    KCalendarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    KCalendarComponent
  ]
})
export class KCalendarModule { }
