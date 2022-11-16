import { Component, Inject, Input, OnInit } from '@angular/core';
import { Local } from 'src/app/core/models/local';
import { Event } from 'src/app/core/models/event';
import { appAnimations } from 'src/app/animations';
import { UserService } from 'src/app/profile/services/user.service';
import { FavoriteService } from 'src/app/shared/services/favorite.service';

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

  mapAPIURL?: string;
  rate?: number;

  get Rate(){
    if(!this.isAnEvent && this.entertainment){
      if(this.rate){
        return this.rate;
      }
      return (this.entertainment as Local).qualification;
    }
    return 0;
  }

  set Rate(rate: number){
    this.rate = rate;
  }

  get entertainmentEvents(){
    if(this.entertainment){
      return (this.entertainment as Local).localEvents;
    }
    return [];
  }
  currentIcon: string = 'bi bi-bookmark';
  prevIcon?: string;

  constructor(private favoriteService: FavoriteService) { }

  ngOnInit(): void {
  }
  

  openMap(){
    window.open(`http://www.google.com/maps/place/${this.entertainment?.lat}, ${this.entertainment?.lon}`,'_blank', 'location=yes');
  }

  getDate(){
    return (this.entertainment as Event).schedule;
  }

  changFavoriteIcon(){
    const newFavoriteData = this.favoriteService.favoriteAction(this.currentIcon, this.entertainment!.entertainmentID);
    this.prevIcon = this.currentIcon;
    this.currentIcon = newFavoriteData.icon;
    newFavoriteData.serverStatus.subscribe(response => {
      if(response.error){
        this.currentIcon = this.prevIcon!;
        alert('Lo sentimos no hemos podido procesar su solicitud.');
      }
    })
  }

}
