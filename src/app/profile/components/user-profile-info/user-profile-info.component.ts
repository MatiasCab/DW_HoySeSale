import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/core/models/user';
import { UserService } from '../../services/user.service';
import { ModalUploadPhotoComponent } from '../modal-upload-photo/modal-upload-photo.component';

@Component({
  selector: 'app-user-profile-info',
  templateUrl: './user-profile-info.component.html',
  styleUrls: ['./user-profile-info.component.scss']
})
export class UserProfileInfoComponent implements OnInit {

  @Input() isMobile?: boolean;
  @Input() user?: User;
  newImage?: string;

  constructor(private modalService: NgbModal, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.imageUploaded.subscribe(newImage => {
      this.newImage = newImage;
    })
  }

  openUploadModal() {
    this.modalService.open(ModalUploadPhotoComponent, {
      windowClass: 'backdrop',
      centered: true,
    });
  }
}
