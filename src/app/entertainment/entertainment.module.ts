import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { EntertainmentRoutingModule } from './entertainment-routing.module';
import { EntertainmentPageComponent } from './components/entertainment-page/entertainment-page.component';
import { EntertainmentInfoComponent } from './components/entertainment-info/entertainment-info.component';
import { DisplayEntertainmentInfoComponent } from './components/display-entertainment-info/display-entertainment-info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    EntertainmentRoutingModule,
    NgbModule
  ],
  declarations: [
    EntertainmentPageComponent,
    EntertainmentInfoComponent,
    DisplayEntertainmentInfoComponent
  ]
})
export class EntertainmentModule { }
