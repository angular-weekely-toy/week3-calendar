import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { isSameDay } from 'date-fns';
import { NzModalService } from 'ng-zorro-antd/modal';
import { DetailBoardModalComponent } from './detail-board-modal/detail-board-modal.component';
import { NewBoardModalComponent } from './new-board-modal/new-board-modal.component';


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

  constructor(
    private nzModalService: NzModalService,
  ) { }

  ngOnInit() {
    this.events = [{
      title: '<p>하하하</p>',
      start: new Date(),
    }]
  }


  dayClicked(event, { date, events }: { date: Date; events: CalendarEvent[] }): void {
    
    // 검은색 경기정보 나오는 화면보이기 감추기
    this.activeDayIsOpen = (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0 ? false : true;

    // 현재 view날짜 변경
    this.viewDate = date;
  }

  calendarEvent(action: string, event: CalendarEvent): void {
    this.onOpenDetailModal();
  }


  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  setToday() {
    this.activeDayIsOpen = false;
    if (this.prevViewMonth == (this.viewDate.getUTCMonth() + 1)) return;
  }

  onOpenNewModal() {
    const modal = this.nzModalService.create({
      nzTitle: '지출',
      nzContent: NewBoardModalComponent,
      nzComponentParams: {
        data: {
        }
      },
      nzFooter: null,
      nzWidth: 360,
      // nzClosable: false,
      // nzMaskClosable: false
    });
  }

  onOpenDetailModal() {
    const modal = this.nzModalService.create({
      nzTitle: '지출',
      nzContent: DetailBoardModalComponent,
      nzComponentParams: {
        data: {
        }
      },
      nzFooter: null,
      nzWidth: 360,
      // nzClosable: false,
      // nzMaskClosable: false
    });
  }
}
