import { NgModule } from '@angular/core';
import { SignInComponent } from './page/sign-in/sign-in.component';
import { RouterModule, Routes } from '@angular/router';

import { ForgetPasswordComponent } from './page/forget-password/forget-password.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';

import { AngularFireAuthGuard } from '@angular/fire/auth-guard';

const route : Routes = [
    { 'path' : '', 'redirectTo' : 'sign-in', 'pathMatch' : 'full'  }
  , { 'path' : 'sign-in', 'component' : SignInComponent }
  , { 'path' : 'sign-up', 'component' : SignUpComponent }
  , { 'path' : 'forget-password', 'component' : ForgetPasswordComponent }
  , { 'path' : 'home', 'loadChildren' : () => import( './page/home/home.module' ).then( m => m.HomeModule ), 'canActivate' : [ AngularFireAuthGuard ] }
  , { 'path' : 'list', 'loadChildren' : () => import( './page/list/list.module' ).then( m => m.ListModule ), 'canActivate' : [ AngularFireAuthGuard ] }
  , { 'path' : 'edit', 'loadChildren' : () => import( './page/edit/edit.module' ).then( m => m.EditModule ), 'canActivate' : [ AngularFireAuthGuard ] }
  , { 'path' : 'analys', 'loadChildren' : () => import( './page/analys/analys.module' ).then( m => m.AnalysModule ), 'canActivate' : [ AngularFireAuthGuard ] }
  , { 'path' : 'counterplan', 'loadChildren' : () => import( './page/counterplan/counterplan.module' ).then( m => m.CounterplanModule ), 'canActivate' : [ AngularFireAuthGuard ] }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(route, {
    initialNavigation: 'enabled'
})
  ],
  exports : [ RouterModule ]
})
export class AppRoutingModule { }
