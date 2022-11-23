import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

import { InputUserCredentialsComponent } from '../input-user-credentials/input-user-credentials.component';
import { appAnimations } from 'src/app/animations';
import { BREAK_POINT } from 'src/app/core/consts';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [appAnimations]
})
export class LoginComponent implements OnInit {

  @ViewChild('username') usernameInput?: InputUserCredentialsComponent;
  @ViewChild('password') passwordInput?: InputUserCredentialsComponent;

  errorMessage?: string;
  isMobile?: boolean;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private router: Router
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



  login() {
    let username = this.usernameInput?.InputInfo ? this.usernameInput?.InputInfo : '';
    const password = this.passwordInput?.InputInfo ? this.passwordInput?.InputInfo : '';

    this.authService.login(username, password).subscribe(response => {
      if (response.error) {
        if (response.type == 'InvalidCredentials') {
          this.errorMessage = 'Nombre de usuario y/o contraseña incorrectos';
        } else {
          this.errorMessage = 'Lo sentimos no hemos podido procesar su solicitud';
        }
      } else {
        this.router.navigateByUrl('/home');
      }
    });
  }

}
