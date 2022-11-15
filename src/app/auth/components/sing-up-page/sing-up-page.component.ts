import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { SignupInfo } from 'src/app/core/models/signupInfo';
import { AuthService } from '../../services/auth.service';
import { InputUserCredentialsComponent } from '../shared/input-user-credentials/input-user-credentials.component';

@Component({
  selector: 'app-sing-up-page',
  templateUrl: './sing-up-page.component.html',
  styleUrls: ['./sing-up-page.component.scss']
})
export class SingUpPageComponent implements OnInit {

  isMobile?: boolean;
  infocontainer: Map<string, string> = new Map();
  enableSignup: string = 'disabled';
  
  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.breakpointObserver.observe(['(min-width: 900px)', Breakpoints.HandsetLandscape])
      .subscribe(result => {
        const breakpoints = result.breakpoints;
        console.log(result);
        //if(breakpoints[Breakpoints.Small] || breakpoints[Breakpoints.Medium] || breakpoints[Breakpoints.WebLandscape]){
        if (breakpoints['(min-width: 900px)']) {
          this.isMobile = false;
        } else {
          this.isMobile = true;
        }
      })
      console.log(this.infocontainer);
  }

  signup(){
    if(this.enableSignup == ''){
      const user: SignupInfo = {
        name: this.infocontainer.get('name')!,
        lastname: this.infocontainer.get('lastname')!,
        username: this.infocontainer.get('username')!,
        email: this.infocontainer.get('email')!,
        password: this.infocontainer.get('password')!,
      };
      this.authService.signup(user).subscribe(res => {
        if(res.error){
          
        }else{

        }
      });
    }
  }

  enableSignupRegulator(){
    console.log(this.infocontainer);
    if(this.infocontainer.size >= 5){
      this.enableSignup = '';
    }else{
      this.enableSignup = 'disabled'
    }
  }

  reguleGenericInfo(info: string, type: 'name' | 'lastname') {
    if (info != '') {
      this.infocontainer.set(type,info);
    }else{
      this.infocontainer.delete(type);
    }
    this.enableSignupRegulator();
  }

  reguleUsername(info: string) {
    if (info != '' && !info.includes(' ')) {
      this.infocontainer.set('username',info);
    }else{
      this.infocontainer.delete('username');
    }
    this.enableSignupRegulator();
  }

  reguleEmail(info: string) {
    if (info != '' && info.includes('@')) {
      this.infocontainer.set('email',info);
    }else{
      this.infocontainer.delete('email');
    }
    this.enableSignupRegulator();
  }

  regulePassword(info: string) {
    if (info != '' && info.length >= 8) {
      this.infocontainer.set('password',info);
    }else{
      this.infocontainer.delete('password');
    }
    this.enableSignupRegulator();
  }
}
