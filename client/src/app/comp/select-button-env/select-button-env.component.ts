import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonUtilService } from 'src/app/service/common/common-util.service';

@Component({
  selector: 'app-select-button-env',
  templateUrl: './select-button-env.component.html',
  styleUrls: ['./select-button-env.component.scss']
})
export class SelectButtonEnvComponent implements OnInit {
  @Input( )
  initValue : string;

  @Output( )
  selectedEnv : EventEmitter<string> = new EventEmitter( );

  options : any = this.CommonUtil.ENV;
  
  selected : string;

  constructor(
    private CommonUtil : CommonUtilService
  ) {
  }

  ngOnInit(): void {
    this.selected = this.initValue;
  }

  onChange( event : any ) : void {
    this.selectedEnv.emit( this.selected );
  }

}
