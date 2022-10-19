import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-profile-favorite-info',
  templateUrl: './display-profile-favorite-info.component.html',
  styleUrls: ['./display-profile-favorite-info.component.scss']
})
export class DisplayProfileFavoriteInfoComponent implements OnInit {

  @Input() isMobile?: boolean;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.Medium, Breakpoints.WebLandscape])
    .subscribe(result => {
      const breakpoints = result.breakpoints;
      if (breakpoints[Breakpoints.Small] || breakpoints[Breakpoints.Medium] || breakpoints[Breakpoints.WebLandscape]) {
        this.isMobile = false;
      } else{
        this.isMobile = true;
      }
    })
  }

}
