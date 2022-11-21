import { Component, Inject, Input, OnInit } from '@angular/core';
import { Local } from 'src/app/core/models/local';
import { Event } from 'src/app/core/models/event';
import { appAnimations } from 'src/app/animations';
import { searchView } from '../../../core/models/searchInfo'
import { FavoriteService } from 'src/app/shared/services/favorite.service';
import { Router } from '@angular/router';
import { ClockService } from '../../services/clock.service';
import { Subscription } from 'rxjs';

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
  timerSubscription?: Subscription;
  countdown = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }

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

  public get Schedule(): Date | undefined {
    const event = (this.entertainment as Event);
    if(event.schedule){
      return new Date(event.schedule);
    }
    return undefined;
  }

  constructor(
    private favoriteService: FavoriteService,
    private router: Router,
    private clockService: ClockService) { }

  ngOnInit(): void {
    if (this.Schedule) {
      this.timerSubscription = this.clockService.time(this.Schedule).subscribe(
        countdown => this.countdown = countdown
      )
    }
  }

  ngOnDestroy(): void {
    this.timerSubscription?.unsubscribe();
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

  getFormatedSchedule(){
    return `${this.Schedule?.getFullYear()}/${this.Schedule?.getMonth()}/${this.Schedule?.getDay()} - ${this.Schedule?.getHours()}:${this.Schedule?.getMinutes()} hs`
  }

  redirectToChat() {
    this.router.navigateByUrl(`/chats?entertainment=${this.entertainment?.entertainmentID}`);
  }

}
