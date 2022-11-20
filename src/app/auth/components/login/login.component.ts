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
import { UserService } from 'src/app/profile/services/user.service';
import { appAnimations } from 'src/app/animations';

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
  
  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.breakpointObserver.observe(['(min-width: 900px)', Breakpoints.HandsetLandscape])
    .subscribe(result => {
      const breakpoints = result.breakpoints;
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
        this.userService.getThisUser().subscribe(
          user => {
          }
        )
        this.router.navigateByUrl('/home');
      }
    });
  }

}
