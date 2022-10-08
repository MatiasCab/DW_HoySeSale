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

const routes: Routes = [
  {path:'', redirectTo:'presentation', pathMatch:"full"},
  {path:'login', component: LoginComponent, data: {animation: 'b'}},
  {path:'presentation', component: PresentationPageComponent, data: {animation: 'a'}},
  {path:'search', component: SearchPageComponent}];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
