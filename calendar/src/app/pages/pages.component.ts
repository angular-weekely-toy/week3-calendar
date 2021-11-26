import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { Subject } from 'rxjs';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})

export class PagesComponent implements OnInit {

  locale = 'ko';
  prevViewMonth: number;

  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;

  activeDayIsOpen: boolean = true;

  events: CalendarEvent[] = [];

  constructor() { }

  ngOnInit() {
    this.events =[ {
      title: '<p>하하하</p>',
      start: new Date(),
    }]
  }


  dayClicked(event, { date, events }: { date: Date; events: CalendarEvent[] }): void {
    // 현재 view날짜 변경
    this.viewDate = date;
  }

  calendarEvent(action: string, event: CalendarEvent): void {
  }


  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  setToday() {
    this.activeDayIsOpen = false;
    if (this.prevViewMonth == (this.viewDate.getUTCMonth() + 1)) return;
  }
}
