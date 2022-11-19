import { Component, Inject, Input, OnInit } from '@angular/core';
import { Local } from 'src/app/core/models/local';
import { Event } from 'src/app/core/models/event';
import { appAnimations } from 'src/app/animations';
import { searchView } from '../../../core/models/searchInfo'
import { FavoriteService } from 'src/app/shared/services/favorite.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entertainment-info',
  templateUrl: './entertainment-info.component.html',
  styleUrls: ['./entertainment-info.component.scss'],
  animations: [appAnimations]
})

export class EntertainmentInfoComponent implements OnInit {

  @Input() entertainment?: Event | Local;
  @Input() isAnEvent?: boolean;
  @Input() isMobile?: boolean;

  rate?: number;
  currentIcon?: string;
  prevIcon?: string;

  get Rate() {
    if (!this.isAnEvent && this.entertainment) {
      if (this.rate) {
        return this.rate;
      }
      return (this.entertainment as Local).qualification;
    }
    return 0;
  }

  set Rate(rate: number) {
    this.rate = rate;
  }

  get entertainmentEvents() {
    if (this.entertainment) {
      return (this.entertainment as Local).localEvents;
    }
    return [];
  }


  public get EntertainmentEventsMobile(): searchView {
    return { action: 'new', newEntertainments: this.entertainmentEvents, oldEntertainments: this.entertainmentEvents };
  }


  public get Icon(): string {
    if (this.currentIcon) {
      return this.currentIcon;
    }
    if (this.entertainment && !this.currentIcon) {
      this.currentIcon = this.entertainment.isFavorite ? 'bi-bookmark-fill' : 'bi bi-bookmark';
      return this.currentIcon;
    }
    return this.entertainment?.isFavorite ? 'bi-bookmark-fill' : 'bi bi-bookmark';
  }

  constructor(private favoriteService: FavoriteService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.entertainment);
    
  }


  openMap() {
    window.open(`http://www.google.com/maps/place/${this.entertainment?.lat}, ${this.entertainment?.lon}`, '_blank', 'location=yes');
  }

  getDate() {
    return (this.entertainment as Event).schedule;
  }

  changFavoriteIcon() {
    const newFavoriteData = this.favoriteService.favoriteAction(this.Icon, this.entertainment!.entertainmentID);
    this.prevIcon = this.currentIcon;
    this.currentIcon = newFavoriteData.icon;
    newFavoriteData.serverStatus.subscribe(response => {
      if (response.error) {
        this.currentIcon = this.prevIcon!;
        alert('Lo sentimos no hemos podido procesar su solicitud.');
      }
    })
  }

  redirectToChat() {
    this.router.navigateByUrl(`/chat?entertainment=${this.entertainment?.entertainmentID}`);
  }

}
