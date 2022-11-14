import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ButtonIconComponent } from './Components/button-icon/button-icon.component';
import { FilterComponent } from './Components/filter/filter.component';
import { GenericButtonComponent } from './Components/generic-button/generic-button.component';
import { SearchInputComponent } from './Components/search-input/search-input.component';
import { UserPhotoComponent } from './Components/user-photo/user-photo.component';
import { HeaderNavbarComponent } from './Components/header-navbar/header-navbar.component';
import { HeaderTextComponent } from './Components/header-navbar/header-text/header-text.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CardNameComponent } from './Components/cards-grid/card/card-name/card-name.component';
import { CardComponent } from './Components/cards-grid/card/card.component';
import { CardsGridComponent } from './Components/cards-grid/cards-grid.component';
import { DesktopCardCarouselComponent } from './Components/desktop-card-carousel/desktop-card-carousel.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [
    ButtonIconComponent,
    FilterComponent,
    GenericButtonComponent,
    SearchInputComponent,
    UserPhotoComponent,
    HeaderNavbarComponent,
    HeaderTextComponent,
    CardNameComponent,
    CardComponent, 
    CardsGridComponent,
    DesktopCardCarouselComponent
  ],
  exports: [
    GenericButtonComponent,
    HeaderNavbarComponent,
    ButtonIconComponent,
    FilterComponent,
    SearchInputComponent,
    UserPhotoComponent,
    CardsGridComponent,
    DesktopCardCarouselComponent,
    CardComponent
  ]
})
export class SharedModule { }
