import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-board-modal',
  templateUrl: './detail-board-modal.component.html',
  styleUrls: ['./detail-board-modal.component.scss']
})
export class DetailBoardModalComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
