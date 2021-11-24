import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-project';
  datas: {date: Date, title: string}[] = [
    {date: new Date(2021, 10, 20), title: '20day'},
    {date: new Date(2021, 10, 24), title: 'data1'},
    {date: new Date(), title: 'now data'}
  ]

  changeData() {
    this.datas = [
      {date: new Date(2021, 10, 2), title: '20day'},
      {date: new Date(2021, 10, 4), title: 'data1'},
      {date: new Date(), title: 'now dataaaaaa'}
    ]
  }
}

