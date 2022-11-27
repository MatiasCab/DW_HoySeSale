import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

import { BREAKPOINT } from 'src/app/core/consts';

@Component({
  selector: 'app-presentation-page',
  templateUrl: './presentation-page.component.html',
  styleUrls: ['./presentation-page.component.scss']
})
export class PresentationPageComponent implements OnInit {

  isMobile?: boolean;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver.observe([BREAKPOINT])
      .subscribe(result => {
        const breakpoints = result.breakpoints;
        if (breakpoints[BREAKPOINT]) {
          this.isMobile = false;
        } else {
          this.isMobile = true;
        }
      });
  }

}
