import { Component, OnInit } from '@angular/core';
import { IReportToDates, IReportToDatesOption } from 'src/app/entity/i-report';
import { ApiFactoryService } from 'src/app/service/api/api-factory.service';
import { AuthService } from 'src/app/service/auth/auth.service';
import { CommonUtilService } from 'src/app/service/common/common-util.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  todayData : IReportToDates;

  weekDatas : IReportToDates[] = [];

  chartData;

  constructor(
    private AF : ApiFactoryService
    , private AuthSvc : AuthService
    , private CommonUtil : CommonUtilService
  ) {
    let from : Date = this.CommonUtil.getNow()
    let to   : Date = this.CommonUtil.getNow();
    from.setDate( to.getDate() - 6 );
    to.setDate( to.getDate() + 1 );
    if( !this.AuthSvc.user ) {
      this.AuthSvc.getUser()
      .then( () => {
        // 過去1週間分のデータを取得
        this.doGetData( from , to )
        .then( (datas : IReportToDates[] ) => {
          this.weekDatas = datas;
          this.setTodayData();
          this.setChartData( );
        });
      });
    }
    else {
        // 過去1週間分のデータを取得
        this.doGetData( from , to )
        .then( (datas : IReportToDates[] ) => {
          this.weekDatas = datas;
          this.setTodayData( );
          this.setChartData( );
        });
    }
  }

  ngOnInit(): void {
  
  }

  /** FromからToまでの戦績データの取得 */
  async doGetData( from : Date, to : Date ) {
    let option : IReportToDatesOption = {
      'uId' : this.AuthSvc.getUid( )
      , 'from' : this.CommonUtil.getFormatDateToString( from )
      , 'to' : this.CommonUtil.getFormatDateToString( to )
    };
    return await this.AF.getReportApi( ).findToDates( option );
  }

  /** 当日用のデータを設定 */
  setTodayData( ) {
    let today = this.CommonUtil.getFormatDateToString( this.CommonUtil.getNow( ) );
    this.weekDatas.forEach( ( data : IReportToDates, ) => {
      if( data.date == today ) this.todayData = data;
    });
  }

  /** チャート用データの設定 */
  setChartData( ) {
    this.chartData = {
      'options' : {
        'scales' : {
          'yAxes' : [{
            'ticks' : {
              'min' : 0
            }
          }]
        }
      },
      'data' : {
        'labels' : [],
        'datasets' : [
          {
            'label' : 'Win',
            'order' : 0,
            'backgroundColor' : '#FF0000',
            'data' : []
          },
          {
            'label' : 'Lose',
            'order' : 0,
            'backgroundColor' : '#0000FF',
            'data' : []
          }
        ]
      }
    };
    this.weekDatas.forEach( (data) => {
      this.chartData.data.labels.push( data.date );
      this.chartData.data.datasets[0].data.push( data.win );
      this.chartData.data.datasets[1].data.push( data.lose );
    })
  }

}
