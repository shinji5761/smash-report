import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sidebarDisp : boolean = false;

  constructor(
    private router : Router
    , private authSvc : AuthService
  ) { }

  ngOnInit(): void {
  }

  /** リンクボタン クリックイベント */
  onClickLinkBtn( url : string ) : void {
    this.router.navigate( [ 'home', { 'outlets' : { 'content' : url } } ] );
    this.sidebarDisp = false;
  }


  onClickSignOutBtn( ) : void {
    this.authSvc.signOut()
    .then( () => {
      this.router.navigate( ['sign-in'] );
    });
  }

}
