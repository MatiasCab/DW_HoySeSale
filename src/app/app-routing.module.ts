import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {path:'', redirectTo:'presentation', pathMatch:"full"},
  {path: 'presentation', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: 'chat', loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule)},
  {path: 'entertainment', loadChildren: () => import('./entertainment/entertainment.module').then(m => m.EntertainmentModule)},
  {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)},
  {path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule)}
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
