import {Component, Input, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'lib-k-calendar',
  template: `
    <div class="navigation-container">
      <div>
        <button (click)="plusMonth(-1)">👈</button>
      </div>
      <div>{{date.getFullYear()}}-{{getMonth()}}({{getMonthName()}})</div>
      <div>
        <button (click)="plusMonth(1)">👉</button>
      </div>
    </div>
    <div class="container">
      <div class="item">{{days[0]}}</div>
      <div class="item">{{days[1]}}</div>
      <div class="item">{{days[2]}}</div>
      <div class="item">{{days[3]}}</div>
      <div class="item">{{days[4]}}</div>
      <div class="item">{{days[5]}}</div>
      <div class="item">{{days[6]}}</div>
      <div class="item" *ngFor="let item of items" (click)="focusDate(item)">{{item?.date?.getDate()}} <sup
        *ngIf="item?.datas?.length">({{item?.datas?.length}})</sup></div>
    </div>
    <div *ngIf="currentItem">
      <h3>{{getYear(currentItem.date)}}-{{getMonth(currentItem.date)}}-{{getDate(currentItem.date)}}</h3>

      <ul>
        <li *ngFor="let data of currentItem?.datas">
          {{data.title}}
        </li>
      </ul>
    </div>
  `,
  styles: [
    `
      .navigation-container {
        display: flex;
        justify-content: space-between;
      }

      .container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr
      }
    `
  ]
})
export class KCalendarComponent implements OnInit {
  days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  // 일 = ['일', '월', '화', '수', '목', '금', '토'];
  // 수개월 = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
  date = new Date();
  items: { date: Date, datas: { date: Date, title: string }[] }[] = [];

  @Input()
  datas: { date: Date, title: string }[] = [];
  currentItem?: { date: Date; datas: { date: Date; title: string }[] };


  constructor() {
  }

  ngOnInit(): void {
    this.setItem();
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes);
    this.setItem();
    // console.log(changes.myInput.currentValue);
  }

  setItem() {
    const d = new Date(this.date.getFullYear(), this.date.getMonth(), 1)
    const result = new Date(d);


    this.items = Array(d.getDay()).fill(undefined);
    while (d.getMonth() === result.getMonth()) {
      let applayDate = new Date(result);
      const datas = this.datas.filter(it => it.date.getFullYear() === applayDate.getFullYear() && it.date.getMonth() === applayDate.getMonth() && it.date.getDate() === applayDate.getDate())
      this.items.push({date: applayDate, datas: datas});
      result.setDate(result.getDate() + 1);
    }
    // console.log(this.items)
  }

  getYear(date = this.date) {
    return date.getFullYear();
  }

  getMonthName(date = this.date) {
    return this.months[date.getMonth()];
  }

  getMonth(date = this.date) {
    return date.getMonth() + 1;
  }

  getDayOfWeekName(date = this.date) {
    return this.days[date.getDay()];
  }

  getDay(date = this.date) {
    return date.getDay() + 1;
  }

  getDate(date = this.date) {
    return date.getDate();
  }

  focusDate(item: { date: Date, datas: { date: Date, title: string }[] }) {
    this.currentItem = item;
  }

  plusMonth(plus: number) {
    var d = new Date(this.date);
    d.setMonth(d.getMonth() + plus);
    this.date = d;
    this.setItem();
    // var newDate = new Date(date.setMonth(date.getMonth()+8));
  }

  // function addDays(date, days) {
  //   var result = new Date(date);
  //   result.setDate(result.getDate() + days);
  //   return result;
  // }
}
