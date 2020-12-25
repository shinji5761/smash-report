import { Component, OnInit } from '@angular/core';
import { IReportAnalys, IReportAnarysOption } from 'src/app/entity/i-report';
import { ApiFactoryService } from 'src/app/service/api/api-factory.service';
import { AuthService } from 'src/app/service/auth/auth.service';
import { CommonUtilService } from 'src/app/service/common/common-util.service';

@Component({
  selector: 'app-analys',
  templateUrl: './analys.component.html',
  styleUrls: ['./analys.component.scss']
})
export class AnalysComponent implements OnInit {
  /** レポート一覧 */
  reports : IReportAnalys[ ] = [ ];

  /** 使用キャラID */
  usedCharId : string = '0';

  constructor(
      private AuthSvc : AuthService
    , private AF : ApiFactoryService
    , private CommonUtil : CommonUtilService
  ) { }

  ngOnInit(): void {
    if( !this.AuthSvc.user )
      this.AuthSvc.getUser()
      .then( () => { this.getInfo( ); });
    else {
      this.getInfo( );
    }
  }

  /** 情報取得 */
  getInfo( ) : void {
    let option : IReportAnarysOption = {
        'uId' : this.AuthSvc.getUid( )
      , 'usedCharId' : this.usedCharId
    };

    // 情報取得
    this.AF.getReportApi( ).findByUsedCharAnalys( option )
    .then( ( result : IReportAnalys[] ) => {
      console.dir( result ); 
      this.reports = result;
    });
  }

  /** 使用キャラ 変更イベント */
  onSelectUseChar( id : string ) : void {
    this.usedCharId = id;
    this.getInfo( );
  }



}
