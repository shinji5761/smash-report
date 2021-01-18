import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  email;

  password;

  constructor(
        private router : Router
      , private authSvc : AuthService
  ) { }

  ngOnInit() {
    this.authSvc.getUser().then(
      () => {
        this.router.navigate( [ 'list' ] );
      }
    )
  }

  /** Sign In button Click Event */
  onClickSignInBtn( email : string, password : string ) {
    this.authSvc.emailSignIn( email, password )
    .then( () => {
      this.router.navigate( [ 'list' ] );
    })
    .catch( e => {
      console.error( e )
    });
  }

  onClickSigninTwitterBtn() : void {
    this.authSvc.twitterSignIn()
    .then( () => {
      this.router.navigate( [ 'list' ] );
    })
    .catch( e => {
      console.error( e )
    });
  }

  onClickSigninGoogleBtn() : void {
    this.authSvc.googleSignIn()
    .then( () => {
      this.router.navigate( [ 'list' ] );
    })
    .catch( e => {
      console.error( e )
    });
  }

  /** Sign Up Btn Click Event */
  onClickSignUpBtn( ) {
    this.router.navigate( ['sign-up'] );
  }

}
