import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DisplayProfileFavoriteInfoComponent } from './components/display-profile-favorite-info/display-profile-favorite-info.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { UserProfileInfoComponent } from './components/user-profile-info/user-profile-info.component';
import { DisplaySearchInfoComponent } from '../search/components/display-search-info/display-search-info.component';


@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    ProfileRoutingModule,
    NgbModule
  ],
  declarations: [
    DisplayProfileFavoriteInfoComponent,
    ProfilePageComponent,
    UserProfileInfoComponent
  ]
})
export class ProfileModule { }
