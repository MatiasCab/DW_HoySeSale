import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { SearchCardsService } from 'src/app/search/services/SearchCards.service';
import { Local } from 'src/app/core/models/local';
import { Event } from 'src/app/core/models/event';

@Component({
  selector: 'app-entertainment-page',
  templateUrl: './entertainment-page.component.html',
  styleUrls: ['./entertainment-page.component.scss']
})
export class EntertainmentPageComponent implements OnInit {

  entertainment?: Local | Event;

  favoriteIcon: string = 'bi bi-bookmark';

  isAnEvent: boolean = false;
  isMobile: boolean = true;

  constructor(private route: ActivatedRoute,
    private breakpointObserver: BreakpointObserver,
    public searchService: SearchCardsService) { }

  ngOnInit(): void {
    const entertainmentID = Number(this.route.snapshot.paramMap.get('id'));
    const entertainmentType = this.route.snapshot.paramMap.get('type');
    if (entertainmentType == "events") {
      this.searchService.getEventById(entertainmentID).subscribe(event => {
        console.log(event);
        this.entertainment = event;
        this.isAnEvent = true;
      });
    } else {
      this.searchService.getLocalById(entertainmentID).subscribe(local => {
        console.log(local);
        this.entertainment = local;
      });
    }

    this.breakpointObserver.observe(['(min-width: 900px)', Breakpoints.HandsetLandscape])
      .subscribe(result => {
        const breakpoints = result.breakpoints;
        console.log(result);
        //if(breakpoints[Breakpoints.Small]  breakpoints[Breakpoints.Medium]  breakpoints[Breakpoints.WebLandscape]){
        if (breakpoints['(min-width: 900px)']) {
          this.isMobile = false;
        } else {
          this.isMobile = true;
        }
      });
  }

  changFavoriteIcon() {
    if (this.favoriteIcon == 'bi bi-bookmark') {
      this.favoriteIcon = 'bi-bookmark-fill';
    } else {
      this.favoriteIcon = 'bi bi-bookmark';
    }
  }
}
