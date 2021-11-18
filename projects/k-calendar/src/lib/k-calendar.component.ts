import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-k-calendar',
  template: `
    <div class="navigation-container">
      <div><button (click)="plusMonth(-1)">👈</button></div>
      <div>{{date.getFullYear()}}-{{getMonth()}}({{getMonthName()}})</div>
      <div><button (click)="plusMonth(1)">👉</button></div>
    </div>
    <div class="container">
      <div class="item">{{days[0]}}</div>
      <div class="item">{{days[1]}}</div>
      <div class="item">{{days[2]}}</div>
      <div class="item">{{days[3]}}</div>
      <div class="item">{{days[4]}}</div>
      <div class="item">{{days[5]}}</div>
      <div class="item">{{days[6]}}</div>
      <div class="item" *ngFor="let item of items">{{item?.date?.getDate()}}</div>
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
  items: {date: Date, title: string}[] = [];
  constructor() { }

  ngOnInit(): void {
    this.setItem();
  }

  setItem() {
    const d = new Date(this.date.getFullYear(), this.date.getMonth(), 1)
    const result = new Date(d);


    this.items = Array(d.getDay()).fill(undefined);
    while (d.getMonth() === result.getMonth()) {
      this.items.push({date: new Date(result), title: '--'});
      result.setDate(result.getDate() + 1);
    }
    console.log(this.items)
  }

  getMonthName() {
    return this.months[this.date.getMonth()];
  }

  getMonth() {
    return this.date.getMonth() + 1;
  }

  getDayOfWeekName() {
    return this.days[this.date.getDay()];
  }

  getDay() {
    return this.date.getDay() + 1;
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
