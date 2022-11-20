import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { appAnimations } from 'src/app/animations';
import { SignupInfo } from 'src/app/core/models/signupInfo';
import { AuthService } from '../../services/auth.service';

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

  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.breakpointObserver.observe(['(min-width: 900px)', Breakpoints.HandsetLandscape])
      .subscribe(result => {
        const breakpoints = result.breakpoints;
        //if(breakpoints[Breakpoints.Small] || breakpoints[Breakpoints.Medium] || breakpoints[Breakpoints.WebLandscape]){
        if (breakpoints['(min-width: 900px)']) {
          this.isMobile = false;
        } else {
          this.isMobile = true;
        }
      })
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
          this.router.navigateByUrl('/presentation/login')
        }
      });
    }
  }

  enableSignupRegulator() {
    if (this.infocontainer.size >= 5) {
      this.enableSignup = '';
    } else {
      this.enableSignup = 'disabled'
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
