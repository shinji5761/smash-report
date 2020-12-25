import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user;

  constructor(
      private auth : AngularFireAuth
  ) {
    this.getUser();
  }

  getUid() : string {
    return this.user.uid;
  }

  async getUser( ) {
    return new Promise( (resolve , reject) => {
      this.auth.authState.subscribe(
        ( user ) => {
          this.user = user;
          resolve( this.user );
        }, e => {
          reject( e );
        }
      )  
    })
  }

  /** Email Address SignIn */
  async emailSignIn( email : string, password : string ) {
    return new Promise( (resolve , reject) => {
      this.auth.signInWithEmailAndPassword( email, password )
      .then( async ( ) => {
        resolve ( await this.getUser() );
      })
      .catch( e => {
        reject ( e );
      });  
    });
  }

   /** Twitter SignIn Firebase */
   async twitterSignIn( ) {
    return new Promise( (resolve , reject) => {
      let provider = new firebase.auth.TwitterAuthProvider();
      this.auth.signInWithPopup( provider )
      .then( async() => {
        resolve ( await this.getUser() );
      })
      .catch( e => {
        reject( e );
      })  
    });
  }

  /** Google SignIn Firebase */
  async googleSignIn( ) {
    return new Promise( (resolve , reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      this.auth.signInWithPopup( provider )
      .then( async() => {
        resolve ( await this.getUser() );
      })
      .catch( e => {
        reject( e );
      })  
    });
  }


  async signOut( ) {
    await this.auth.signOut( )
    .then( ()=>{
      this.user = null;
      return;
    })
    .catch( e => {
      throw e;
    });
  }


}
