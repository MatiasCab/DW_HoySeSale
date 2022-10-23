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
  selector: 'app-presentation-page',
  templateUrl: './presentation-page.component.html',
  styleUrls: ['./presentation-page.component.scss'],
  // animations: [ 
  //   //   trigger("openClose", [
  //   //   transition("* => open", [
  //   //     animate('5s',  style({filter: 'blur(0px)'}))
  //   //   ]),
  //   //   transition("open => *", [
  //   //     animate('5s', style({filter: 'blur(8px)'}))
  //   //   ])
  //   // ])]
  //   trigger("openClose2", [
  //     transition('* => open', [
  //       style(({ opacity: 1 })),
  //       animate('5s', style(({ opacity: 0})))
  //     ])
  //   ])]

})
export class PresentationPageComponent implements OnInit {

  isMobile?: boolean;
  
  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.Medium, Breakpoints.WebLandscape])
    .subscribe(result => {
      const breakpoints = result.breakpoints;
      console.log(result);
      if(breakpoints[Breakpoints.Small] || breakpoints[Breakpoints.Medium] || breakpoints[Breakpoints.WebLandscape]){
        this.isMobile = false;
        console.log("Cambio");
      }else{
        this.isMobile = true;
      }
    })
  }

}
