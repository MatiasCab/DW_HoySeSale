import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { SearchCardsService } from 'src/app/search/services/SearchCards.service';
import { Local } from 'src/app/core/models/local';
import { Event } from 'src/app/core/models/event';
import { FavoriteService } from 'src/app/shared/services/favorite.service';

@Component({
  selector: 'app-entertainment-page',
  templateUrl: './entertainment-page.component.html',
  styleUrls: ['./entertainment-page.component.scss']
})
export class EntertainmentPageComponent implements OnInit {

  entertainment?: Local | Event;
  currentIcon?: string;
  prevIcon?: string;
  isAnEvent: boolean = false;
  isMobile: boolean = true;

  public get  Icon() : string {
    if(this.currentIcon){
      return this.currentIcon;
    }
    if(this.entertainment && !this.currentIcon){
      this.currentIcon = this.entertainment.isFavorite ? 'bi-bookmark-fill' : 'bi bi-bookmark';
      return this.currentIcon;
    }
    return this.entertainment?.isFavorite ? 'bi-bookmark-fill' : 'bi bi-bookmark';
  }
  

  constructor(private route: ActivatedRoute,
    private breakpointObserver: BreakpointObserver,
    public searchService: SearchCardsService,
    private favoriteService: FavoriteService,
    private router: Router) { }

  ngOnInit(): void {
    const entertainmentID = Number(this.route.snapshot.paramMap.get('id'));
    const entertainmentType = this.route.snapshot.paramMap.get('type');
    if (entertainmentType == "events") {
      this.searchService.getEventById(entertainmentID).subscribe(event => {
        this.entertainment = event;
        this.isAnEvent = true;
      });
    } else {
      this.searchService.getLocalById(entertainmentID).subscribe(local => {
        this.entertainment = local;
      });
    }

    this.breakpointObserver.observe(['(min-width: 900px)', Breakpoints.HandsetLandscape])
      .subscribe(result => {
        const breakpoints = result.breakpoints;
        //if(breakpoints[Breakpoints.Small]  breakpoints[Breakpoints.Medium]  breakpoints[Breakpoints.WebLandscape]){
        if (breakpoints['(min-width: 900px)']) {
          this.isMobile = false;
        } else {
          this.isMobile = true;
        }
      });
  }

  changFavoriteIcon() {
    const newFavoriteData = this.favoriteService.favoriteAction(this.Icon, this.entertainment!.entertainmentID);
    this.prevIcon = this.currentIcon;
    this.currentIcon = newFavoriteData.icon;
    newFavoriteData.serverStatus.subscribe(response => {
      if(response.error){
        this.currentIcon = this.prevIcon!;
        alert('Lo sentimos no hemos podido procesar su solicitud.');
      }
    })
  }

  
  redirectToChat(){
    this.router.navigateByUrl(`/chat/${this.entertainment?.entertainmentID}`);
  }
}
