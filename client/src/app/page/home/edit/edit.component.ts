import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { IReport } from 'src/app/entity/i-report';
import { ApiFactoryService } from 'src/app/service/api/api-factory.service';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  report : IReport = {
      'uId' : ''
    , 'usedCharId' : '0'
    , 'compCharId' : '0'
    , 'stageId'    : '0'
    , 'result'     : '0'
    , 'env'        : '0'
  };

  constructor(
    private AuthSvc : AuthService
    , private AF : ApiFactoryService
    , private MessageSvc : MessageService
  ) { }

  ngOnInit(): void {
    this.AuthSvc.getUser( )
    .then( () => {
      this.report.uId = this.AuthSvc.getUid( );
    })
  }

  onSelectUseChar( char : string ) : void {
    this.report.usedCharId = char;
  }

  onSelectCompChar( char : string ) : void {
    this.report.compCharId = char;
  }

  onSelectStage( stage : string ) : void {
    this.report.stageId = stage;
  }

  onSelectResult( result : string ) : void {
    this.report.result = result;
  }

  onSelectEnv( env : string ) : void {
    this.report.env = env;
  }


  onClickSaveBtn( ) : void {
    this.AF.getReportApi().create( this.report )
    .then( () => {
      // 登録しました｡
      this.MessageSvc.add({'severity' : 'success', 'detail' : '登録しました｡'})
    });
  }

}
