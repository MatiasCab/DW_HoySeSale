import { Component, OnInit } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition, 
  // ...
} from '@angular/animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

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

  isMobile?: boolean;
  
  constructor(private breakpointObserver: BreakpointObserver) { }

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

}
