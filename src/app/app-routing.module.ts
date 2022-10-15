import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './Components/Login Page/login/login.component';
import { SearchPageComponent } from './Components/SearchPage/search-page/search-page.component';
import { PresentationPageComponent } from './Components/presentation-page/presentation-page.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { ChatPageComponent } from './Components/ChatsPage/chat-page/chat-page.component';
import { ProfilePageComponent } from './Components/Profile/profile-page/profile-page.component';
import { EntertainmentPageComponent } from './Components/entertainment-page/entertainment-page.component';
import { SingUpPageComponent } from './Components/Login Page/sing-up-page/sing-up-page.component';

const routes: Routes = [
  {path:'', redirectTo:'presentation', pathMatch:"full"},
  {path:'login', component: LoginComponent, data: {animation: 'Login'}},
  {path:'presentation', component: PresentationPageComponent, data: {animation: 'Presentation'}},
  {path:'singUp', component: SingUpPageComponent, data: {animation: 'SingUp'}},
  {path:'search', component: SearchPageComponent},
  {path:'entertainment/:id', component: EntertainmentPageComponent},
  {path:'home', component: HomePageComponent},
  {path:'profile', component: ProfilePageComponent},
  {path:'chats', component: ChatPageComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
