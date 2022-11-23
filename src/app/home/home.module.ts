import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ChatRoutingModule } from './home-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ModalLogoutComponent } from '../shared/Components/modal-logout/modal-logout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    ChatRoutingModule,
    NgbModule
  ],
  declarations: [
    HomePageComponent
  ]
})
export class HomeModule { }
