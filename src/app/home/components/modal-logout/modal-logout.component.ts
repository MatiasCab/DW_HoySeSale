import { Component, OnInit } from '@angular/core';
import { NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-modal-logout',
  templateUrl: './modal-logout.component.html',
  providers: [NgbModalConfig],
  styleUrls: ['./modal-logout.component.scss']
})
export class ModalLogoutComponent implements OnInit {

  constructor(config: NgbModalConfig, public modal: NgbActiveModal, private authService : AuthService) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
  }

  close() {
    this.modal.close();
  }

  logout() {
    this.authService.logout();
    this.close();
  }

}
