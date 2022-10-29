import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { Entertainment } from 'src/app/models/entertainment';

@Component({
  selector: 'app-entertainment-page',
  templateUrl: './entertainment-page.component.html',
  styleUrls: ['./entertainment-page.component.scss']
})
export class EntertainmentPageComponent implements OnInit {

  entertainment!: Entertainment;

  favoriteIcon: string = 'bi bi-bookmark';

  isAnEvent: boolean = false;

  isMobile: boolean = true;
  
  constructor(private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    const entertainmentID = parseInt(this.route.snapshot.paramMap.get('id')!);
    console.log(entertainmentID);
    if(entertainmentID > 2){
      this.isAnEvent = true;
    }
    
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.Medium, Breakpoints.WebLandscape])
    .subscribe(result => {
      const breakpoints = result.breakpoints;
      if(breakpoints[Breakpoints.Small] || breakpoints[Breakpoints.Medium] || breakpoints[Breakpoints.WebLandscape]){
        this.isMobile = false;
      }else{
        this.isMobile = true;
      }
    })
  }

  changFavoriteIcon(){
    if(this.favoriteIcon == 'bi bi-bookmark'){
      this.favoriteIcon = 'bi-bookmark-fill';
    }else{
      this.favoriteIcon = 'bi bi-bookmark';
    }
  }

}
