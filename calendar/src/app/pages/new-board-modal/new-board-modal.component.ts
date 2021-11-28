import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-board-modal',
  templateUrl: './new-board-modal.component.html',
  styleUrls: ['./new-board-modal.component.scss']
})
export class NewBoardModalComponent implements OnInit {
  @Input() data: any;


  currency = (value: number) => value ? '￦' + this.addComma(value) : '';

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {

  }



  addComma(num: number) {
    if (num) {
      const regexp = /\B(?=(\d{3})+(?!\d))/g;
      return num.toString().replace(regexp, ',');
    } else {
      return '';
    }
  }
}
