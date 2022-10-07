import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './../app/services/in-memory-data.service';

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
import { CardComponent } from './Components/card/card.component';
import { FilterComponent } from './Components/filter/filter.component';
import { SearchInputComponent } from './Components/search-input/search-input.component';
import { SearchEntertainmentComponent } from './Components/search-entertainment/search-entertainment.component';
import { InputUserCredentialsComponent } from './Components/input-user-credentials/input-user-credentials.component';
import { SearchPageComponent } from './Components/search-page/search-page.component';
import { DisplaySearchInfoComponent } from './Components/display-search-info/display-search-info.component';
import { CardsGridComponent } from './Components/cards-grid/cards-grid.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { ChatPageComponent } from './Components/chat-page/chat-page.component';
import { DisplayChatInfoComponent } from './Components/display-chat-info/display-chat-info.component';
import { ChatGridComponent } from './Components/chat-grid/chat-grid.component';
import { ChatComponent } from './Components/chat/chat.component';
import { UserPhotoComponent } from './Components/user-photo/user-photo.component';
import { ChatMessagePageComponent } from './Components/chat-message-page/chat-message-page.component';
import { DisplayChatMessageComponent } from './Components/display-chat-message/display-chat-message.component';
import { InputMessageComponent } from './Components/input-message/input-message.component';
import { MessageGridComponent } from './Components/message-grid/message-grid.component';
import { MessageComponent } from './Components/message/message.component';
import { ProfilePageComponent } from './Components/profile-page/profile-page.component';
import { UserProfileInfoComponent } from './Components/user-profile-info/user-profile-info.component';
import { DisplayProfileFavoriteInfoComponent } from './Components/display-profile-favorite-info/display-profile-favorite-info.component';

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
    HeaderNavbarComponent,
    CardComponent,
    FilterComponent,
    SearchInputComponent,
    SearchEntertainmentComponent,
    InputUserCredentialsComponent,
    SearchPageComponent,
    DisplaySearchInfoComponent,
    CardsGridComponent,
    HomePageComponent,
    ChatPageComponent,
    DisplayChatInfoComponent,
    ChatGridComponent,
    ChatComponent,
    UserPhotoComponent,
    ChatMessagePageComponent,
    DisplayChatMessageComponent,
    InputMessageComponent,
    MessageGridComponent,
    MessageComponent,
    ProfilePageComponent,
    UserProfileInfoComponent,
    DisplayProfileFavoriteInfoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
