import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }    from '@angular/forms';
import { CommonModule } from '@angular/common';

import { environment } from '../environments/environment';
// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Adsense
import { AdsenseModule } from 'ng2-adsense';


// Page
import { AnalysComponent } from './page/analys/analys.component';
import { CounterplanComponent } from './page/counterplan/counterplan.component';
import { EditComponent } from './page/edit/edit.component';
import { ForgetPasswordComponent } from './page/forget-password/forget-password.component';
import { HomeComponent } from './page/home/home.component';
import { ListComponent } from './page/list/list.component';
import { SignInComponent } from './page/sign-in/sign-in.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';

// Component
import { HeaderComponent } from './comp/header/header.component';
import { SelectButtonEnvComponent } from './comp/select-button-env/select-button-env.component';
import { SelectButtonResultComponent } from './comp/select-button-result/select-button-result.component';
import { SelectCharComponent } from './comp/select-char/select-char.component';
import { SelectStageComponent } from './comp/select-stage/select-stage.component';

// Service
import { AuthService } from './service/auth/auth.service';

// PrimeFace
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { PasswordModule } from 'primeng/password'
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule } from 'primeng/toast';
import { SelectButtonModule } from 'primeng/selectbutton';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    ForgetPasswordComponent,
    ListComponent,
    HeaderComponent,
    EditComponent,
    SelectCharComponent,
    SelectButtonResultComponent,
    SelectButtonEnvComponent,
    SelectStageComponent,
    SignUpComponent,
    AnalysComponent,
    CounterplanComponent,
    HomeComponent
],
  imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' })
      , BrowserAnimationsModule
      , CommonModule
      , FormsModule
      , HttpClientModule
      // Firebase //
      , AngularFireModule.initializeApp( environment.firebaseConfig )
      , AngularFireAuthModule
      // Adsense // 
      , AdsenseModule.forRoot({
        adClient: 'ca-pub-2018656716460271',
        adSlot: 4303129368,
        adtest : 'on',
        fullWidthResponsive : true
      })
      // PrimeNG //
      , AppRoutingModule
      , ButtonModule
      , CardModule
      , ChartModule
      , DataViewModule
      , DialogModule
      , DropdownModule
      , EditorModule
      , InputTextModule
      , MessageModule
      , PasswordModule
      , SelectButtonModule
      , SidebarModule
      , TableModule
      , ToastModule
      , ToolbarModule
  ],
  providers: [ AuthService, MessageService ],
  bootstrap: [ AppComponent ],
  schemas : [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
