import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

import { BREAKPOINT } from 'src/app/core/consts';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

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
