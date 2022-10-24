import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { appAnimations } from 'src/app/animations';
import { Entertainment } from 'src/app/models/entertainment';

@Component({
  selector: 'app-desktop-card-carousel',
  templateUrl: './desktop-card-carousel.component.html',
  styleUrls: ['./desktop-card-carousel.component.scss'],
  animations: [appAnimations]
})
export class DesktopCardCarouselComponent implements OnInit {

  entertainments: Entertainment[] = [
    {id: 1, name: 'Valiant', description: 'Toro', qualification: 4, profilePic: 9, gallery: [1, 2]},
    {id: 2, name: 'Ginebra', description: 'Barrios', qualification: 4.5, profilePic: 13, gallery: [3, 4]},
    {id: 3, name: 'Dulas', description: 'Sarabia', qualification: 3, profilePic: 10, gallery: [5, 6]},
    {id: 4, name: 'Reynaldo', description: 'Rincón', qualification: 3.5, profilePic: 12, gallery: [7, 8]},
    {id: 5, name: 'Valiant', description: 'Toro', qualification: 4, profilePic: 9, gallery: [1, 2]},
    {id: 6, name: 'Ginebra', description: 'Barrios', qualification: 4.5, profilePic: 13, gallery: [3, 4]},
    {id: 7, name: 'Dulas', description: 'Sarabia', qualification: 3, profilePic: 10, gallery: [5, 6]},
    {id: 8, name: 'Reynaldo', description: 'Rincón', qualification: 3.5, profilePic: 12, gallery: [7, 8]}
  ];

  reduceCards?: boolean;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver.observe(['(max-width: 940px)', Breakpoints.HandsetLandscape])
    .subscribe(result => {
      const breakpoints = result.breakpoints;
      console.log(result);
      //if(breakpoints[Breakpoints.Small] || breakpoints[Breakpoints.Medium] || breakpoints[Breakpoints.WebLandscape]){
      if(breakpoints['(max-width: 940px)'] || breakpoints[Breakpoints.HandsetLandscape]){
        this.reduceCards = true;
      }else{
        this.reduceCards = false;
      }
    })
  }

}
