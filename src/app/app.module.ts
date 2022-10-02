import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenericButtonComponent } from './Components/generic-button/generic-button.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HeaderTextComponent } from './Components/header-text/header-text.component';
import { ButtonIconComponent } from './Components/button-icon/button-icon.component';
import { HeaderNavbarComponent } from './Components/header-navbar/header-navbar.component';
import { CardComponent } from './Components/card/card.component';
import { FilterComponent } from './Components/filter/filter.component';
import { SearchInputComponent } from './Components/search-input/search-input.component';
import { SearchEntertainmentComponent } from './Components/search-entertainment/search-entertainment.component';

@NgModule({
  declarations: [
    AppComponent,
    GenericButtonComponent,
    NavbarComponent,
    HeaderTextComponent,
    ButtonIconComponent,
    HeaderNavbarComponent,
    CardComponent,
    FilterComponent,
    SearchInputComponent,
    SearchEntertainmentComponent
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
