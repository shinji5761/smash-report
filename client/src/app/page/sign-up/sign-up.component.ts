import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ApiFactoryService } from 'src/app/service/api/api-factory.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  email : string;

  password : string;

  password_ : string;

  constructor(
    private router : Router
    , private auth : AngularFireAuth
    , private AF : ApiFactoryService
  ) { }

  ngOnInit(): void {
  }

  onClickSignUpBtn( email : string, password : string, password_ : string ) : void {
    if( password !== password_ )
      return;
    
    this.auth.createUserWithEmailAndPassword( email, password )
    .then( ( user ) => {
      this.router.navigate( [ 'list' ] );
    })
    .catch( e => {
      console.error( e );
    })

  }


  /** Back Btn Click Event */
  onClickBackBtn( ) : void {
    this.router.navigate( ['sign-in'] );
  }

}
