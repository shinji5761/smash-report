import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonUtilService } from 'src/app/service/common/common-util.service';

@Component({
  selector: 'app-select-char',
  templateUrl: './select-char.component.html',
  styleUrls: ['./select-char.component.scss']
})
export class SelectCharComponent implements OnInit {
  @Input( )
  initValue : string;

  @Input()
  header : string;

  @Output( )
  selectEvent : EventEmitter<string> = new EventEmitter( );

  options : any = JSON.parse(JSON.stringify(this.CommonUtil.CHAR));
  
  selected : string;

  constructor(
    private CommonUtil : CommonUtilService
  ) {
  }

  ngOnInit(): void {
    this.selected = this.initValue;
  }


  onChangeChar( event ) {
    this.selectEvent.emit( event.value );
  }


}
