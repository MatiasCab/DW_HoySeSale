import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { appAnimations } from 'src/app/animations';
import { entertainmentCardPreview } from 'src/app/core/models/entertainmentCardPreview';
import { Local } from 'src/app/core/models/local';

import { Entertainment } from 'src/app/models/entertainment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [appAnimations]
})
export class CardComponent implements OnInit {

  @Input() entertainment?: entertainmentCardPreview;
  currentIcon: string = 'bi bi-bookmark';

  constructor() { }

  ngOnInit(): void {
  }

  changeFavoriteIcon() {
    if (this.currentIcon == 'bi bi-bookmark') {
      this.currentIcon = 'bi-bookmark-fill';
    } else {
      this.currentIcon = 'bi bi-bookmark';
    }
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
