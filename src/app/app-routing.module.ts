import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './Components/login/login.component';
import { SearchPageComponent } from './Components/search-page/search-page.component';
import { PresentationPageComponent } from './Components/presentation-page/presentation-page.component';
import { EntertainmentPageComponent } from './Components/entertainment-page/entertainment-page.component';

const routes: Routes = [
  {path:'', redirectTo:'presentation', pathMatch:"full"},
  {path:'login', component: LoginComponent, data: {animation: 'b'}},
  {path:'presentation', component: PresentationPageComponent, data: {animation: 'a'}},
  {path:'search', component: SearchPageComponent},
  {path:'entertainment/:id', component: EntertainmentPageComponent}];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
