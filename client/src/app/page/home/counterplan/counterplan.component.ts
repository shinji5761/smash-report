import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ICounterplan, ICounterplanDto } from 'src/app/entity/i-counterplan';
import { ApiFactoryService } from 'src/app/service/api/api-factory.service';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-counterplan',
  templateUrl: './counterplan.component.html',
  styleUrls: ['./counterplan.component.scss']
})
export class CounterplanComponent implements OnInit {

  plan : ICounterplan = { 'uId' : '', 'charId' : '0', 'text' : ''};

  /** C : Create   U : Update */
  type : string = 'C';

  constructor(
      private AuthSvc : AuthService
    , private AF : ApiFactoryService
    , private MessageSvc : MessageService
  ) { }

  ngOnInit(): void {
    if( !this.AuthSvc.user ) {
      this.AuthSvc.getUser()
      .then( ()=> {
        // レコードの取得
        this.onSelectChar( this.plan.charId );
      });  
    } else {
      // レコードの取得
      this.onSelectChar( this.plan.charId );
    }
  }

  /** 使用キャラ 変更イベント */
  onSelectChar( id : string ) : void {
    this.plan.charId = id;
    let option : ICounterplanDto = {
      'uId' : this.AuthSvc.getUid()
      , 'charId' : id
    };

    // データの取得
    this.AF.getCounterplanApi( ).find( option )
    .then( ( data : ICounterplan[] ) => {
      console.dir( data );
      if( !data.length ) {
        this.type = 'C';
        this.plan.text = '';
      } else {
        this.type = 'U';
        this.plan = data[0];
      }
    });
  }

  /** 保存ボタン クリックイベント */
  onClickSaveBtn() : void {
    this.plan['uId'] = this.AuthSvc.getUid()
    console.log( this.plan.text );
    // データの保存
    switch ( this.type ) {
      case 'C' :
        this.AF.getCounterplanApi( ).create( this.plan )
        .then( () => {
          this.type = 'U';
          this.MessageSvc.add({'severity' : 'success', 'detail' : '登録しました｡'})
        });
        break;
      case 'U' :
        this.AF.getCounterplanApi( ).update( this.plan )
        .then( () => {
          this.MessageSvc.add({'severity' : 'success', 'detail' : '登録しました｡'})
        });
        break;
    }
  }

}
