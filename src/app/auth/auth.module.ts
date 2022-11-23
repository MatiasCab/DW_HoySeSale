import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { PresentationPageComponent } from './components/presentation-page/presentation-page.component';
import { SingUpPageComponent } from './components/sing-up-page/sing-up-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { InputUserCredentialsComponent } from './components/input-user-credentials/input-user-credentials.component';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VerificationCodeModalComponent } from './components/verification-code-modal/verification-code-modal.component';


@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    AuthRoutingModule,
    NgbModule
  ],
  declarations: [
    LoginComponent,
    PresentationPageComponent,
    SingUpPageComponent,
    InputUserCredentialsComponent,
    VerificationCodeModalComponent
  ]
})
export class AuthModule { }
