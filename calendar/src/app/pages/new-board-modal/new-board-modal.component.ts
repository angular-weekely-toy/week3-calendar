import { Account } from './../../cores/models/account.model';
import { Component, Input, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-new-board-modal',
  templateUrl: './new-board-modal.component.html',
  styleUrls: ['./new-board-modal.component.scss']
})
export class NewBoardModalComponent implements OnInit {
  @Input() data: any;

  account = new Account();

  currency = (value: number) => value ? '￦' + this.addComma(value) : '';

  constructor(
    private nzModalRef: NzModalRef,
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.account);
    this.nzModalRef.destroy(this.account);
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
