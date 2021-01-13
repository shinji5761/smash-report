import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { IReport, IReportFindAllOption } from 'src/app/entity/i-report';
import { ApiFactoryService } from 'src/app/service/api/api-factory.service';
import { AuthService } from 'src/app/service/auth/auth.service';
import { CommonUtilService } from 'src/app/service/common/common-util.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  cols : any[ ] = [
      { 'header' : '自分', 'field' : 'usedCharId', 'get' : ( id : string )=>{ return this.CommonUtil.getCharName( id ) } }
    , { 'header' : '相手', 'field' : 'compCharId', 'get' : ( id : string )=>{ return this.CommonUtil.getCharName( id ) }  }
    // , { 'header' : 'ステージ',   'field' : 'stageId', 'get' : ( id : string )=>{ return this.CommonUtil.getStageName( id ) }  }
    , { 'header' : '結果',      'field' : 'result', 'get' : ( id : string )=>{ return this.CommonUtil.getResultName( id ) }  }
    , { 'header' : '環境',      'field' : 'env', 'get' : ( id : string )=>{ return this.CommonUtil.getEnvName( id ) }  }
  ];

  /** レポート件数 */
  totalReports : number = 0;

  /** レポートリスト */
  reportList : IReport[] = [];

  /** レポート表示件数 */
  rows : number = this.CommonUtil.TABLE_LIMIT;

  /** テーブル ローディング */
  loading : boolean = false;

  /** 取得位置 */
  offset : number = 0;

  constructor(
    private CommonUtil : CommonUtilService
    , private AuthSvc  : AuthService
    , private AF : ApiFactoryService
    , private MessageSvc : MessageService
  ) { }

  ngOnInit( ): void {
    if( !this.AuthSvc.user ) {
      this.AuthSvc.getUser()
      .then( ()=> {
        // レコードの取得
        this.getReport( );
      });  
    }
  }

  /** レポートの取得 */
  getReport( ) : void {
    this.loading = true;
    let option : IReportFindAllOption = {'uId' : this.AuthSvc.getUid( ), 'offset' : this.offset, 'limit' : this.CommonUtil.TABLE_LIMIT };
    this.AF.getReportApi().findAll( option )
    .then( ( result : any[] ) =>{
      this.totalReports = result[1] || 0;
      this.reportList = result[0] || [];

      if ( this.totalReports == 0 ) {
        this.MessageSvc.add({'severity' : 'warn', 'detail' : '記録がありません｡' });
      }
    })
    .catch( e => {
      this.MessageSvc.add({ 'severity' : 'error', 'detail' : '取得エラー' });
      console.error( e );
    })
    .finally( () => {
      this.loading = false;
    });
  }

  /** ページ変更 */
  changePage( event ) {
    this.offset = event.first;
    if( this.AuthSvc.user )
      this.getReport( );
  }

  /** ダイアログ */
  /** ダイアログ */
  editDisp : boolean = false;

  /** 編集対象のレポート */
  editReport : IReport;

  /** レポート クリックイベント */
  onClickReportBtn( report : IReport ) {
    // 編集画面へ繊維
    this.editReport = Object.assign({}, report);
    this.editDisp = true;
  }

  /** 自分 変更イベント */
  onSelectUsedChar( char : string ) : void {
    this.editReport.usedCharId = char;
  }

  /** 相手 変更イベント */
  onSelectCompChar( char : string ) : void {
    this.editReport.compCharId = char;
  }

  /** ステージ 変更イベント */
  onSelectStage( stage : string ) : void {
    this.editReport.stageId = stage;
  }
  /** 結果 変更イベント */
  onSelectResult( result : string ) : void {
    this.editReport.result = result;
  }

  /** 環境 変更イベント */
  onSelectEnv( env : string ) : void {
    this.editReport.env = env;
  }

  /** 保存ボタン クリックイベント */
  onClickSaveBtn( ) : void {
    this.AF.getReportApi().update( this.editReport )
    .then( () => {
      this.MessageSvc.add({'severity' : 'success', 'detail' : '更新しました。' });
      this.editDisp = false;
    });
  }

  /** 削除ボタン クリックイベント */
  onClickDeleteBtn( ) : void {
    this.AF.getReportApi().delete( this.editReport )
    .then( () => {
      this.MessageSvc.add({'severity' : 'success', 'detail' : '削除しました｡' });
      this.editDisp = false;
    });
  }

  /** ダイアログ Hideイベント */
  onHideEditDialog() : void {
    this.editReport = null;
    if( this.AuthSvc.user )
      this.getReport( );
  }
}

