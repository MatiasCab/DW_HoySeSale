import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ButtonIconComponent } from './Components/button-icon/button-icon.component';
import { FilterComponent } from './Components/filter/filter.component';
import { GenericButtonComponent } from './Components/generic-button/generic-button.component';
import { SearchInputComponent } from './Components/search-input/search-input.component';
import { UserPhotoComponent } from './Components/user-photo/user-photo.component';
import { HeaderNavbarComponent } from './Components/header-navbar/header-navbar.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './Components/cards-grid/card/card.component';
import { CardsGridComponent } from './Components/cards-grid/cards-grid.component';
import { DesktopCardCarouselComponent } from './Components/desktop-card-carousel/desktop-card-carousel.component';
import { DisplaySearchInfoComponent } from '../search/components/display-search-info/display-search-info.component';
import { SearchEntertainmentComponent } from '../search/components/search-entertainment/search-entertainment.component';
import { NoResultsComponent } from './Components/no-results/no-results.component';
import { ModalLogoutComponent } from './Components/modal-logout/modal-logout.component';

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
    CardComponent, 
    CardsGridComponent,
    DesktopCardCarouselComponent,
    DisplaySearchInfoComponent,
    SearchEntertainmentComponent,
    NoResultsComponent,
    ModalLogoutComponent
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
    CardComponent,
    DisplaySearchInfoComponent,
    SearchEntertainmentComponent,
    NoResultsComponent,
    ModalLogoutComponent
  ]
})
export class SharedModule { }
