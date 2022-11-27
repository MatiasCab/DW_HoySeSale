import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { FavoriteService } from 'src/app/shared/services/favorite.service';

import { searchView } from '../../../core/models/searchInfo';
import { appAnimations } from 'src/app/animations';
import { Local } from 'src/app/core/models/local';
import { Event } from 'src/app/core/models/event';

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
  noResultText: string = 'Este local no tiene eventos disponibles';


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
    return {
      action: 'new',
      newEntertainments: this.entertainmentEvents,
      oldEntertainments: this.entertainmentEvents
    };
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

  constructor(
    private favoriteService: FavoriteService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  openMap() {
    window.open(`http://www.google.com/maps/place/${this.entertainment?.lat}, ${this.entertainment?.lon}`, '_blank', 'location=yes');
  }

  getDate() {
    const event = (this.entertainment as Event);
    if (event.schedule) {
      return new Date(event.schedule);
    }
    return undefined;
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

  getFormatedSchedule() {
    let month = this.getDate()?.getMonth()!;
    let day = this.getDate()?.getDay()!;
    let hours = this.getDate()?.getHours()!;
    let minutes = this.getDate()?.getMinutes()!;

    return `${this.getDate()?.getFullYear()}/
    ${month < 10 ? "0" + month : month}/
    ${day < 10 ? "0" + day : day} - 
    ${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes} hs`
  }

  redirectToChat() {
    this.router.navigateByUrl(`/chats?entertainment=${this.entertainment?.entertainmentID}`);
  }

}
