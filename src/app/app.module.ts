import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenericButtonComponent } from './Components/generic-button/generic-button.component';
import { AppTitleComponent } from './Components/app-title/app-title.component';
import { PresentationPageComponent } from './Components/presentation-page/presentation-page.component';
import { LoginComponent } from './Components/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HeaderTextComponent } from './Components/header-text/header-text.component';
import { ButtonIconComponent } from './Components/button-icon/button-icon.component';
import { HeaderNavbarComponent } from './Components/header-navbar/header-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    GenericButtonComponent,
    AppTitleComponent,
    PresentationPageComponent,
    LoginComponent,
    NavbarComponent,
    HeaderTextComponent,
    ButtonIconComponent,
    HeaderNavbarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
