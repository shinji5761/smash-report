import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counterplan',
  templateUrl: './counterplan.component.html',
  styleUrls: ['./counterplan.component.scss']
})
export class CounterplanComponent implements OnInit {


  /** 使用キャラID */
  charId : string = '0';

  constructor() { }

  ngOnInit(): void {
  }

  /** 使用キャラ 変更イベント */
  onSelectChar( id : string ) : void {
    this.charId = id;
  }

}
