import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FavoriteService } from 'src/app/shared/services/favorite.service';

import { entertainmentCardPreview } from 'src/app/core/models/entertainmentCardPreview';
import { appAnimations } from 'src/app/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [appAnimations]
})
export class CardComponent implements OnInit {

  @Input() entertainment?: entertainmentCardPreview;

  currentIcon?: string;
  prevIcon?: string;

  constructor(
    private favoriteService: FavoriteService,
    private router: Router
  ) { }

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


  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  changeFavoriteIcon() {
    const newFavoriteData = this.favoriteService.favoriteAction(this.Icon, this.entertainment!.entertainmentID);
    this.prevIcon = this.currentIcon;
    this.currentIcon = newFavoriteData.icon;

    newFavoriteData.serverStatus.subscribe(response => {
      if (response.error) {
        this.currentIcon = this.prevIcon!;
        alert('Lo sentimos no hemos podido procesar su solicitud.');
      }
    });
  }

  getEntertainmentType() {
    switch (this.entertainment?.type) {
      case 'event':
        return 'EVENTO';
      case 'bar':
        return 'BAR';
      case 'pub':
        return 'PUB';
      case 'dancingParty':
        return 'BAILE';
    }
    return;
  }
}
