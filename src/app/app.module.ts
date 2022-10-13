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
import { GenericButtonComponent } from './Components/ReusedComponents/generic-button/generic-button.component';
import { AppTitleComponent } from './Components/presentation-page/app-title/app-title.component';
import { PresentationPageComponent } from './Components/presentation-page/presentation-page.component';
import { LoginComponent } from './Components/Login Page/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HeaderTextComponent } from './Components/ReusedComponents/header-navbar/header-text/header-text.component';
import { ButtonIconComponent } from './Components/ReusedComponents/button-icon/button-icon.component';
import { HeaderNavbarComponent } from './Components/ReusedComponents/header-navbar/header-navbar.component';
import { CardComponent } from './Components/card/card.component';
import { FilterComponent } from './Components/ReusedComponents/filter/filter.component';
import { SearchInputComponent } from './Components/ReusedComponents/search-input/search-input.component';
import { SearchEntertainmentComponent } from './Components/SearchPage/search-entertainment/search-entertainment.component';
import { InputUserCredentialsComponent } from './Components/Login Page/input-user-credentials/input-user-credentials.component';
import { SearchPageComponent } from './Components/SearchPage/search-page/search-page.component';
import { DisplaySearchInfoComponent } from './Components/SearchPage/display-search-info/display-search-info.component';
import { CardsGridComponent } from './Components/cards-grid/cards-grid.component';
import { CardNameComponent } from './Components/card-name/card-name.component';
import { EntertainmentInfoComponent } from './Components/entertainment-info/entertainment-info.component';
import { ImagesCarouselComponent } from './Components/images-carousel/images-carousel.component';
import { EntertainmentPageComponent } from './Components/entertainment-page/entertainment-page.component';
import { DisplayEntertainmentInfoComponent } from './Components/display-entertainment-info/display-entertainment-info.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { ChatPageComponent } from './Components/ChatsPage/chat-page/chat-page.component';
import { DisplayChatInfoComponent } from './Components/ChatsPage/chat-page/display-chat-info/display-chat-info.component';
import { ChatGridComponent } from './Components/ChatsPage/chat-page/display-chat-info/chat-grid/chat-grid.component';
import { ChatComponent } from './Components/ChatsPage/chat-page/display-chat-info/chat-grid/chat/chat.component';
import { UserPhotoComponent } from './Components/ReusedComponents/user-photo/user-photo.component';
import { ChatMessagePageComponent } from './Components/ChatsPage/chat-page/display-chat-info/chat-grid/chat-message-page/chat-message-page.component';
import { DisplayChatMessageComponent } from './Components/ChatsPage/chat-page/display-chat-info/chat-grid/chat-message-page/display-chat-message/display-chat-message.component';
import { InputMessageComponent } from './Components/ChatsPage/chat-page/display-chat-info/chat-grid/chat-message-page/display-chat-message/input-message/input-message.component';
import { MessageGridComponent } from './Components/ChatsPage/chat-page/display-chat-info/chat-grid/chat-message-page/display-chat-message/message-grid/message-grid.component';
import { MessageComponent } from './Components/ChatsPage/chat-page/display-chat-info/chat-grid/chat-message-page/display-chat-message/message-grid/message/message.component';
import { ProfilePageComponent } from './Components/Profile/profile-page/profile-page.component';
import { UserProfileInfoComponent } from './Components/Profile/user-profile-info/user-profile-info.component';
import { DisplayProfileFavoriteInfoComponent } from './Components/Profile/display-profile-favorite-info/display-profile-favorite-info.component';

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
    CardNameComponent,
    EntertainmentInfoComponent,
    ImagesCarouselComponent,
    EntertainmentPageComponent,
    DisplayEntertainmentInfoComponent,
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
