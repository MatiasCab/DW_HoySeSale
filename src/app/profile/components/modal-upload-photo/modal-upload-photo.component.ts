import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-modal-upload-photo',
  templateUrl: './modal-upload-photo.component.html',
  styleUrls: ['./modal-upload-photo.component.scss']
})
export class ModalUploadPhotoComponent implements OnInit {

  @ViewChild("imageInput") imageInput?: ElementRef<HTMLInputElement>;

  constructor(private userService: UserService, private modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  chargeImage(){
    let files = this.imageInput?.nativeElement.files;
    if(files && files[0]){
      var reader = new FileReader();
      reader.addEventListener("load",() => this.uploadImage(reader.result), false);
      
      reader.readAsDataURL(files[0]);
    }
  }

  private uploadImage(base64Img: string | null | ArrayBuffer ){
    if(typeof base64Img == 'string'){
      console.log(base64Img);
      this.userService.uploadProfileImage(base64Img).subscribe(res => {
        if(res.error){
          alert('Lo sentimos, no hemos podido procesarsu solicitud.')
        }else{
          this.userService.imageUploaded.emit(res.imageLink);
        }
        this.modal.close();
      });
    }
  }
}
