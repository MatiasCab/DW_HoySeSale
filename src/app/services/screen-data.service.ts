import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenDataService {

  isMobile?: boolean;

  constructor(private breakpointObserver: BreakpointObserver) { }

  getIsMobileScreenType() {
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.Medium, Breakpoints.WebLandscape])
      .subscribe(result => {
        const breakpoints = result.breakpoints;
        if (breakpoints[Breakpoints.Small] || breakpoints[Breakpoints.Medium] || breakpoints[Breakpoints.WebLandscape]) {
          this.isMobile = false;
        } else{
          this.isMobile = true;
        }
      })
    return of(this.isMobile);
  }
}
