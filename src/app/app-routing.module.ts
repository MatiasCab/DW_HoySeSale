import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorPageComponent } from './core/components/error-page/error-page.component';

const routes: Routes = [
  {path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: 'chats', loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule)},
  {path: 'entertainments', loadChildren: () => import('./entertainment/entertainment.module').then(m => m.EntertainmentModule)},
  {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)},
  {path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule)},
  {path: '**', component: ErrorPageComponent}
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
