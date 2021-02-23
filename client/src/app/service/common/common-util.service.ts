import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonUtilService {
  constructor() { }

  CHAR : any[] = [
      {'id' : '0', 'name' : 'マリオ' }
    , {'id' : '1', 'name' : 'ドンキーコング' }
    , {'id' : '2', 'name' : 'リンク' }
    , {'id' : '3', 'name' : 'サムス' }
    , {'id' : '4', 'name' : 'ダークサムス' }
    , {'id' : '5', 'name' : 'ヨッシー' }
    , {'id' : '6', 'name' : 'カービィ' }
    , {'id' : '7', 'name' : 'フォックス' }
    , {'id' : '8', 'name' : 'ピカチュウ' }
    , {'id' : '9', 'name' : 'ルイージ' }
    , {'id' : '10', 'name' : 'ネス' }
    , {'id' : '11', 'name' : 'キャプテン・ファルコン' }
    , {'id' : '12', 'name' : 'プリン' }
    , {'id' : '13', 'name' : 'ピーチ' }
    , {'id' : '14', 'name' : 'デイジー' }
    , {'id' : '15', 'name' : 'クッパ' }
    , {'id' : '16', 'name' : 'アイスクライマー' }
    , {'id' : '17', 'name' : 'シーク' }
    , {'id' : '18', 'name' : 'ゼルダ' }
    , {'id' : '19', 'name' : 'ドクターマリオ' }
    , {'id' : '20', 'name' : 'ピチュー' }
    , {'id' : '21', 'name' : 'ファルコ' }
    , {'id' : '22', 'name' : 'マルス' }
    , {'id' : '23', 'name' : 'ルキナ' }
    , {'id' : '24', 'name' : 'こどもリンク' }
    , {'id' : '25', 'name' : 'ガノンドロフ' }
    , {'id' : '26', 'name' : 'ミュウツー' }
    , {'id' : '27', 'name' : 'ロイ' }
    , {'id' : '28', 'name' : 'クロム' }
    , {'id' : '29', 'name' : 'Mr.ゲーム＆ウォッチ' }
    , {'id' : '30', 'name' : 'メタナイト' }
    , {'id' : '31', 'name' : 'ピット' }
    , {'id' : '32', 'name' : 'ブラックピット' }
    , {'id' : '33', 'name' : 'ゼロスーツサムス' }
    , {'id' : '34', 'name' : 'ワリオ' }
    , {'id' : '35', 'name' : 'スネーク' }
    , {'id' : '36', 'name' : 'アイク' }
    , {'id' : '37', 'name' : 'ポケモントレーナー' }
    , {'id' : '38', 'name' : 'ディディーコング' }
    , {'id' : '39', 'name' : 'リュカ' }
    , {'id' : '40', 'name' : 'ソニック' }
    , {'id' : '41', 'name' : 'デデデ' }
    , {'id' : '42', 'name' : 'ピクミン＆オリマー' }
    , {'id' : '43', 'name' : 'ルカリオ' }
    , {'id' : '44', 'name' : 'ロボット' }
    , {'id' : '45', 'name' : 'トゥーンリンク' }
    , {'id' : '46', 'name' : 'ウルフ' }
    , {'id' : '47', 'name' : 'むらびと' }
    , {'id' : '48', 'name' : 'ロックマン' }
    , {'id' : '49', 'name' : 'Wii Fit トレーナー' }
    , {'id' : '50', 'name' : 'ロゼッタ＆チコ' }
    , {'id' : '51', 'name' : 'リトル・マック' }
    , {'id' : '52', 'name' : 'ゲッコウガ' }
    , {'id' : '53', 'name' : 'Miiファイター（格闘タイプ）' }
    , {'id' : '54', 'name' : 'Miiファイター（剣術タイプ）' }
    , {'id' : '55', 'name' : 'Miiファイター（射撃タイプ）' }
    , {'id' : '56', 'name' : 'パルテナ' }
    , {'id' : '57', 'name' : 'パックマン' }
    , {'id' : '58', 'name' : 'ルフレ' }
    , {'id' : '59', 'name' : 'シュルク' }
    , {'id' : '60', 'name' : 'クッパJr.' }
    , {'id' : '61', 'name' : 'ダックハント' }
    , {'id' : '62', 'name' : 'リュウ' }
    , {'id' : '63', 'name' : 'ケン' }
    , {'id' : '64', 'name' : 'クラウド' }
    , {'id' : '65', 'name' : 'カムイ' }
    , {'id' : '66', 'name' : 'ベヨネッタ' }
    , {'id' : '67', 'name' : 'インクリング' }
    , {'id' : '68', 'name' : 'リドリー' }
    , {'id' : '69', 'name' : 'シモン' }
    , {'id' : '70', 'name' : 'リヒター' }
    , {'id' : '71', 'name' : 'キングクルール' }
    , {'id' : '72', 'name' : 'しずえ' }
    , {'id' : '73', 'name' : 'ガオガエン' }
    , {'id' : '74', 'name' : 'パックンフラワー' }
    , {'id' : '75', 'name' : 'ジョーカー' }
    , {'id' : '76', 'name' : '勇者' }
    , {'id' : '77', 'name' : 'バンジョー&カズーイ' }
    , {'id' : '78', 'name' : 'テリー' }
    , {'id' : '79', 'name' : 'ベレト' }
    , {'id' : '80', 'name' : 'ミェンミェン' }
    , {'id' : '81', 'name' : 'スティーブ' }
    , {'id' : '82', 'name' : 'セフィロス' }
    , {'id' : '83', 'name' : 'ホムラ' }
  ];

  STAGE : any[] = [
      { 'id' : '0', 'name' : '終点' }
    , { 'id' : '1', 'name' : '戦場' }
    , { 'id' : '2', 'name' : '小戦場' }
    , { 'id' : '3', 'name' : 'ポケスタ2' }
    , { 'id' : '4', 'name' : 'カロス' }
    , { 'id' : '5', 'name' : 'むらまち' }
    , { 'id' : '6', 'name' : 'すまむら' }
  ];

  RESULT : any[] = [
      { 'id' : '0', 'name' : 'WIN' }
    , { 'id' : '1', 'name' : 'LOSE' }
  ];

  ENV : any[] = [
      { 'id' : '0', 'name' : 'オンライン' }
    , { 'id' : '1', 'name' : 'オフライン' }
  ];

  getCharName( id : string ) {
    return this.CHAR[ id ].name;
  }

  getStageName( id : string ) {
    return this.STAGE[ id ].name;
  }

  getResultName( id : string ) {
    return this.RESULT[ id ].name;
  }

  getEnvName( id : string ) {
    return this.ENV[ id ].name;
  }

  getNow( ) : Date {
    return new Date( );
  }


  getFormatDateToString( target : Date , format : string = 'yyyy/MM/dd' ) : string {
    format = format.replace(/yyyy/g, '' + target.getFullYear() );
    format = format.replace(/MM/g, ('0' + (target.getMonth() + 1)).slice(-2));
    format = format.replace(/dd/g, ('0' + target.getDate()).slice(-2));
    format = format.replace(/hh/g, ('0' + target.getHours()).slice(-2));
    format = format.replace(/mm/g, ('0' + target.getMinutes()).slice(-2));
    format = format.replace(/ss/g, ('0' + target.getSeconds()).slice(-2));
    if (format.match(/S/g)) {
      var milliSeconds = ('00' + target.getMilliseconds()).slice(-3);
      var length = format.match(/S/g).length;
      for (var i = 0; i < length; i++) format = format.replace(/S/, milliSeconds.substring(i, i + 1));
    }
    return format;
  }


  // Table //
  TABLE_LIMIT  : number = 10;

}
