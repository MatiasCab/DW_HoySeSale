import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Entertaiment } from 'src/app/core/models/entertainment';
import { SearchCardsService } from 'src/app/search/services/SearchCards.service';

@Component({
  selector: 'app-entertainment-page',
  templateUrl: './entertainment-page.component.html',
  styleUrls: ['./entertainment-page.component.scss']
})
export class EntertainmentPageComponent implements OnInit {

  entertainment!: Entertaiment;

  favoriteIcon: string = 'bi bi-bookmark';

  isAnEvent: boolean = false;
  isMobile: boolean = true;
  
  constructor(private route: ActivatedRoute, private breakpointObserver: BreakpointObserver, searchService: SearchCardsService) {}

  ngOnInit(): void {
    const entertainmentID = Number(this.route.snapshot.paramMap.get('id'));
    const entertainmentType = this.route.snapshot.paramMap.get('type');
    if(entertainmentType == "event"){

    }else{
      
    }
    
    this.breakpointObserver.observe(['(min-width: 900px)', Breakpoints.HandsetLandscape])
    .subscribe(result => {
      const breakpoints = result.breakpoints;
      console.log(result);
      //if(breakpoints[Breakpoints.Small]  breakpoints[Breakpoints.Medium]  breakpoints[Breakpoints.WebLandscape]){
      if(breakpoints['(min-width: 900px)']){
        this.isMobile = false;
      }else{
        this.isMobile = true;
      }
    })
  }

  changFavoriteIcon() {
    if (this.favoriteIcon == 'bi bi-bookmark') {
      this.favoriteIcon = 'bi-bookmark-fill';
    } else {
      this.favoriteIcon = 'bi bi-bookmark';
    }
  }

  private instanceOfEntertainment(object: any) {
    return 'schedule' in object && 'localSponsorID' in object;
  }
}
