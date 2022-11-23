import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AuthService } from '../../services/auth.service';

import { appAnimations } from 'src/app/animations';
import { SignupInfo } from 'src/app/core/models/signupInfo';
import { VerificationCodeModalComponent } from '../verification-code-modal/verification-code-modal.component';
import { BREAK_POINT } from 'src/app/core/consts';

@Component({
  selector: 'app-sing-up-page',
  templateUrl: './sing-up-page.component.html',
  styleUrls: ['./sing-up-page.component.scss'],
  animations: [appAnimations]
})
export class SingUpPageComponent implements OnInit {

  isMobile?: boolean;
  infocontainer: Map<string, string> = new Map();
  enableSignup: string = 'disabled';
  errorMessage?: string;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.breakpointObserver.observe([BREAK_POINT])
      .subscribe(result => {
        const breakpoints = result.breakpoints;
        if (breakpoints[BREAK_POINT]) {
          this.isMobile = false;
        } else {
          this.isMobile = true;
        }
      });
  }

  openVerifyCodeModal() {
    this.modalService.open(VerificationCodeModalComponent, {
      windowClass: 'backdrop',
      centered: true
    });
  }

  signup() {
    if (this.enableSignup == '') {

      const user: SignupInfo = {
        name: this.infocontainer.get('name')!,
        lastname: this.infocontainer.get('lastname')!,
        username: this.infocontainer.get('username')!,
        email: this.infocontainer.get('email')!,
        password: this.infocontainer.get('password')!,
      };

      this.authService.signup(user).subscribe(res => {
        if (res.error) {
          if (res.type == 'RepitedCredentials') {
            this.errorMessage = 'El nombre de usuario o email ya se encuentran en nuestra base de datos.';
          } else {
            this.errorMessage = 'Lo sentimos, no hemos podido procesar su solicitud.';
          }
        } else {
          this.openVerifyCodeModal();
        }
      });

    }

  }

  enableSignupRegulator() {
    if (this.infocontainer.size >= 5) {
      this.enableSignup = '';
    } else {
      this.enableSignup = 'disabled';
    }
  }

  reguleGenericInfo(info: string, type: 'name' | 'lastname') {
    if (info != '') {
      this.infocontainer.set(type, info);
    } else {
      this.infocontainer.delete(type);
    }

    this.enableSignupRegulator();
  }

  reguleUsername(info: string) {
    if (info != '' && !info.includes(' ')) {
      this.infocontainer.set('username', info);
    } else {
      this.infocontainer.delete('username');
    }

    this.enableSignupRegulator();
  }

  reguleEmail(info: string) {
    if (info != '' && info.includes('@')) {
      this.infocontainer.set('email', info);
    } else {
      this.infocontainer.delete('email');
    }

    this.enableSignupRegulator();
  }

  regulePassword(info: string) {
    if (info != '' && info.length >= 8) {
      this.infocontainer.set('password', info);
    } else {
      this.infocontainer.delete('password');
    }
    
    this.enableSignupRegulator();
  }
}
