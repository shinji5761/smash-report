import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonUtilService } from 'src/app/service/common/common-util.service';

@Component({
  selector: 'app-select-button-result',
  templateUrl: './select-button-result.component.html',
  styleUrls: ['./select-button-result.component.scss']
})
export class SelectButtonResultComponent implements OnInit {

  @Input( )
  initValue : string;

  @Output( )
  selectedResult : EventEmitter<string> = new EventEmitter( );

  options : any = this.CommonUtil.RESULT;
  
  selected : string;

  constructor(
    private CommonUtil : CommonUtilService
  ) {
  }
  
  ngOnInit(): void {
    this.selected = this.initValue;
  }

  onChangeResult( event ) {
    this.selectedResult.emit( event.value );
  }

}
