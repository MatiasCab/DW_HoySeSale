import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../services/auth.service';
import { InputUserCredentialsComponent } from '../input-user-credentials/input-user-credentials.component';

@Component({
  selector: 'app-verification-code-modal',
  templateUrl: './verification-code-modal.component.html',
  styleUrls: ['./verification-code-modal.component.scss']
})
export class VerificationCodeModalComponent implements OnInit {

  @ViewChild('code') codeInput?: InputUserCredentialsComponent;

  constructor(
    private authService: AuthService,
    private router: Router,
    private modal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  verify() {
    if (this.codeInput?.InputInfo) {
      this.authService.verify(this.codeInput.InputInfo).subscribe(
        response => {
          if (!response.error) {
            this.modal.close();
            this.router.navigateByUrl('/presentation/login');
          }
        }
      )
    }
  }
}
