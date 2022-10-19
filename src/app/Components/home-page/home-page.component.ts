import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { appAnimations } from 'src/app/animations';
import { ModalLogoutComponent } from './modal-logout/modal-logout.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [NgbModalConfig, NgbModal],
  animations: [appAnimations]
})
export class HomePageComponent implements OnInit {

  constructor(private modalService: NgbModal) {  }

  ngOnInit(): void {
  }


  openLogoutModal() {
    this.modalService.open(ModalLogoutComponent, {
      windowClass: 'backdrop',
      centered: true,
    });
  }

  logout(){
    console.log("kzdnflsndfdf")
  }

}
