import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './Components/login/login.component';
import { PresentationPageComponent } from './Components/presentation-page/presentation-page.component';
import { SearchPageComponent } from './Components/search-page/search-page.component';

const routes: Routes = [
  {path:'', redirectTo:'presentation', pathMatch:"full"},
  {path:'login', component: LoginComponent},
  {path:'presentation', component: PresentationPageComponent},
  {path:'search', component: SearchPageComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
