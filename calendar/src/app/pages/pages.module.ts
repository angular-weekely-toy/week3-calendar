import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from "@ant-design/icons-angular";
import { PlusOutline } from "@ant-design/icons-angular/icons";
import { NewBoardModalComponent } from "./new-board-modal/new-board-modal.component";
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputModule } from 'ng-zorro-antd/input';
import { DetailBoardModalComponent } from './detail-board-modal/detail-board-modal.component';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { FormsModule } from '@angular/forms';


const icons: IconDefinition[] = [ PlusOutline ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    NzButtonModule,
    NzIconModule.forRoot(icons),
    NzModalModule,
    NzDatePickerModule,
    NzInputModule,
    NzInputNumberModule
  ],
  declarations: [
    PagesComponent,
    NewBoardModalComponent,
    DetailBoardModalComponent
  ],
  entryComponents: [
    NewBoardModalComponent,
    DetailBoardModalComponent
  ]
})
export class PagesModule { }
