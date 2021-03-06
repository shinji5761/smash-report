import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonUtilService } from 'src/app/service/common/common-util.service';

@Component({
  selector: 'app-select-stage',
  templateUrl: './select-stage.component.html',
  styleUrls: ['./select-stage.component.scss']
})
export class SelectStageComponent implements OnInit {
  @Input( )
  initValue : string;

  @Input()
  header : string;

  @Output( )
  selectEvent : EventEmitter<string> = new EventEmitter( );

  options : any = JSON.parse(JSON.stringify(this.CommonUtil.STAGE));

  selected : string;

  constructor(
    private CommonUtil : CommonUtilService
  ) {
  }

  ngOnInit( ): void {
    this.selected = this.initValue;
  }

  onChange( event ) : void {
    this.selectEvent.emit( this.selected );
  }

}
