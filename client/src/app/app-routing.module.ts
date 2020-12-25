import { NgModule } from '@angular/core';
import { SignInComponent } from './page/sign-in/sign-in.component';
import { RouterModule, Routes } from '@angular/router';

import { AnalysComponent } from './page/home/analys/analys.component';
import { EditComponent } from './page/home/edit/edit.component';
import { ForgetPasswordComponent } from './page/forget-password/forget-password.component';
import { HomeComponent } from './page/home/home.component';
import { ListComponent } from './page/home/list/list.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';

import { AngularFireAuthGuard } from '@angular/fire/auth-guard';

const route : Routes = [
    { 'path' : '', 'redirectTo' : 'sign-in', 'pathMatch' : 'full'  }
  , { 'path' : 'sign-in', 'component' : SignInComponent }
  , { 'path' : 'sign-up', 'component' : SignUpComponent }
  , { 'path' : 'forget-password', 'component' : ForgetPasswordComponent }
  , { 'path' : 'home', 'component' : HomeComponent, 'canActivate' : [ AngularFireAuthGuard ] ,'children' : [
      { 'path' : '', 'redirectTo' : 'list', 'pathMatch' : 'full'  }
    , { 'path' : 'list', 'component' : ListComponent, 'outlet' : 'content' }
    , { 'path' : 'edit', 'component' : EditComponent, 'outlet' : 'content' }
    , { 'path' : 'analys', 'component' : AnalysComponent, 'outlet' : 'content' }
  ]}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( route )
  ],
  exports : [ RouterModule ]
})
export class AppRoutingModule { }
