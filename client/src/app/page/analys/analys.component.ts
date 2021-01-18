import { Component, OnInit } from '@angular/core';
import { IReportAnalys, IReportAnarysOption, IReportDetail, IReportDetailOption } from 'src/app/entity/i-report';
import { ApiFactoryService } from 'src/app/service/api/api-factory.service';
import { AuthService } from 'src/app/service/auth/auth.service';
import { CommonUtilService } from 'src/app/service/common/common-util.service';

@Component({
  selector: 'app-analys',
  templateUrl: './analys.component.html',
  styleUrls: ['./analys.component.scss']
})
export class AnalysComponent implements OnInit {

  cols : any[ ] = [
      { 'header' : '相手', 'field' : 'compCharId', 'get' : ( report : IReportAnalys )=>{ return this.CommonUtil.getCharName( report.compCharId ) }  }
    , { 'header' : '勝',        'field' : 'win', 'get' :  ( report : IReportAnalys )=>{ return report.win; } }
    , { 'header' : '負',        'field' : 'lose', 'get' : ( report : IReportAnalys )=>{ return report.lose; } }
    , { 'header' : '勝率',      'field' : 'rate', 'get' : ( report : IReportAnalys )=>{ return report.rate * 100 + '%'; } }
  ];

  /** レポート一覧 */
  reports : IReportAnalys[ ] = [ ];

  /** 自分ID */
  usedCharId : string = '0';

  /** テーブル ローディング */
  loading : boolean = false;

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
    this.loading = true;
    let option : IReportAnarysOption = {
        'uId' : this.AuthSvc.getUid( )
      , 'usedCharId' : this.usedCharId
    };

    // 情報取得
    this.AF.getReportApi( ).findByUsedCharAnalys( option )
    .then( ( result : IReportAnalys[] ) => {
      console.dir( result ); 
      this.reports = result;
    })
    .finally( () => {
      this.loading = false;
    });
  }

  /** 自分 変更イベント */
  onSelectUsedChar( id : string ) : void {
    this.usedCharId = id;
    this.getInfo( );
  }

  // 詳細
  detailDisp : boolean = false;
  chartData : any = [];
  selectedReport : IReportAnalys;
  
  /** 分析レポート 選択イベント */
  onClickReportBtn( report : IReportAnalys ) : void {
    this.chartData = [];
    this.selectedReport = report;
    let option : IReportDetailOption = {
        'uId' : this.AuthSvc.getUid( )
      , 'usedCharId' : report.usedCharId
      , 'compCharId' : report.compCharId
    };
    
    this.AF.getReportApi().findByUsedCharDetail( option )
    .then(( resultList : IReportDetail[ ] ) => {
      this.detailDisp = true;
      for( let result of resultList ) {
        this.chartData.push(
          {
            'options' : { 'title' : { 'display' : true, 'text' : this.CommonUtil.STAGE[ result.stageId ].name + ' ' + result.rate + '%', 'fontSize' : 14 }, 'legend' : { 'position' : 'right' } },
            'data' : {
              'labels' : ['勝', '負'],
              'datasets' : [
                {
                    'data' : [result.win, result.lose]
                  , 'backgroundColor' : [ "#FF6384", "#36A2EB" ]
                  , 'hoverBackgroundColor' : [ "#FF6384", "#36A2EB" ]
                }
              ]
            }
          }
        );
      }
    });
  }

  onHideDialog( ) : void {
    this.chartData = [];  
  }
}
