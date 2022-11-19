import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { UserProfileInfoComponent } from './components/user-profile-info/user-profile-info.component';
import { ModalUploadPhotoComponent } from './components/modal-upload-photo/modal-upload-photo.component';


@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    ProfileRoutingModule,
    NgbModule
  ],
  declarations: [
    ProfilePageComponent,
    UserProfileInfoComponent,
    ModalUploadPhotoComponent
  ]
})
export class ProfileModule { }
