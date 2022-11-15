import { Component, OnInit, ViewChild } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition, 
  // ...
} from '@angular/animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { InputUserCredentialsComponent } from '../shared/input-user-credentials/input-user-credentials.component';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // animations: [ 
  // // // //   trigger("openClose", [
  // // // //   transition("* => open", [
  // // // //     animate('5s',  style({filter: 'blur(0px)'}))
  // // // //   ]),
  // // // //   transition("open => *", [
  // // // //     animate('5s', style({filter: 'blur(8px)'}))
  // // // //   ])
  // // // // ])]
  // trigger("openClose", [
  // transition('* <=> *', [
  //   style(({ opacity: 0 })),
  //   animate('2s', style(({ opacity: 1})))
  // ])
  // ])]
})
export class LoginComponent implements OnInit {

  @ViewChild('username') usernameInput?: InputUserCredentialsComponent;
  @ViewChild('password') passwordInput?: InputUserCredentialsComponent;

  errorMessage?: string;
  isMobile?: boolean;
  
  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.breakpointObserver.observe(['(min-width: 900px)', Breakpoints.HandsetLandscape])
    .subscribe(result => {
      const breakpoints = result.breakpoints;
      console.log(result);
      //if(breakpoints[Breakpoints.Small] || breakpoints[Breakpoints.Medium] || breakpoints[Breakpoints.WebLandscape]){
      if(breakpoints['(min-width: 900px)']){
        this.isMobile = false;
      }else{
        this.isMobile = true;
      }
    })
  }

  login(){
    let username = this.usernameInput?.InputInfo ? this.usernameInput?.InputInfo : '';
    const password = this.passwordInput?.InputInfo ? this.passwordInput?.InputInfo : '';
    this.authService.login(username, password).subscribe(response => {
      if(response.error){
        if(response.type == 'InvalidCredentials'){
          this.errorMessage = 'Nombre de usuario y/o contraseña incorrectos';
        }else{
          this.errorMessage = 'Lo sentimos no hemos podido procesar su solicitud';
        }
      }else{
        this.router.navigateByUrl('/home');
      }
    });
  }

}
