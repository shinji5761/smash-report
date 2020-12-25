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
    , {'id' : '37', 'name' : 'ゼニガメ' }
    , {'id' : '38', 'name' : 'フシギソウ' }
    , {'id' : '39', 'name' : 'リザードン' }
    , {'id' : '40', 'name' : 'ディディーコング' }
    , {'id' : '41', 'name' : 'リュカ' }
    , {'id' : '42', 'name' : 'ソニック' }
    , {'id' : '43', 'name' : 'デデデ' }
    , {'id' : '44', 'name' : 'ピクミン＆オリマー' }
    , {'id' : '45', 'name' : 'ルカリオ' }
    , {'id' : '46', 'name' : 'ロボット' }
    , {'id' : '47', 'name' : 'トゥーンリンク' }
    , {'id' : '48', 'name' : 'ウルフ' }
    , {'id' : '49', 'name' : 'むらびと' }
    , {'id' : '50', 'name' : 'ロックマン' }
    , {'id' : '51', 'name' : 'Wii Fit トレーナー' }
    , {'id' : '52', 'name' : 'ロゼッタ＆チコ' }
    , {'id' : '53', 'name' : 'リトル・マック' }
    , {'id' : '54', 'name' : 'ゲッコウガ' }
    , {'id' : '55', 'name' : 'Miiファイター（格闘タイプ）' }
    , {'id' : '56', 'name' : 'Miiファイター（剣術タイプ）' }
    , {'id' : '57', 'name' : 'Miiファイター（射撃タイプ）' }
    , {'id' : '58', 'name' : 'パルテナ' }
    , {'id' : '59', 'name' : 'パックマン' }
    , {'id' : '60', 'name' : 'ルフレ' }
    , {'id' : '61', 'name' : 'シュルク' }
    , {'id' : '62', 'name' : 'クッパJr.' }
    , {'id' : '63', 'name' : 'ダックハント' }
    , {'id' : '64', 'name' : 'リュウ' }
    , {'id' : '65', 'name' : 'ケン' }
    , {'id' : '66', 'name' : 'クラウド' }
    , {'id' : '67', 'name' : 'カムイ' }
    , {'id' : '68', 'name' : 'ベヨネッタ' }
    , {'id' : '69', 'name' : 'インクリング' }
    , {'id' : '70', 'name' : 'リドリー' }
    , {'id' : '71', 'name' : 'シモン' }
    , {'id' : '72', 'name' : 'リヒター' }
    , {'id' : '73', 'name' : 'キングクルール' }
    , {'id' : '74', 'name' : 'しずえ' }
    , {'id' : '75', 'name' : 'ガオガエン' }
    , {'id' : '76', 'name' : 'パックンフラワー' }
    , {'id' : '77', 'name' : 'ジョーカー' }
    , {'id' : '78', 'name' : '勇者' }
    , {'id' : '79', 'name' : 'バンジョー&カズーイ' }
    , {'id' : '80', 'name' : 'テリー' }
    , {'id' : '81', 'name' : 'ベレト' }
    , {'id' : '82', 'name' : 'ミェンミェン' }
    , {'id' : '83', 'name' : 'スティーブ' }
    , {'id' : '84', 'name' : 'セフィロス' }
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



  // Table //
  TABLE_LIMIT  : number = 10;

}
