import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalEvent } from 'src/app/core/models/event';
import { Local } from 'src/app/core/models/local';

import { SearchCardsService } from 'src/app/search/services/SearchCards.service';

@Component({
  selector: 'app-entertainment-page',
  templateUrl: './entertainment-page.component.html',
  styleUrls: ['./entertainment-page.component.scss']
})
export class EntertainmentPageComponent implements OnInit {

  entertainment!: Local | LocalEvent;

  favoriteIcon: string = 'bi bi-bookmark';

  isAnEvent: boolean = false;

  constructor(private route: ActivatedRoute, private searchService: SearchCardsService) { }

  ngOnInit(): void {
    const entertainmentID = Number(this.route.snapshot.paramMap.get('id'));
    console.log(entertainmentID);
    this.searchService.getEntertainmentById(entertainmentID).subscribe(
      entertainment => {
        this.isAnEvent = this.instanceOfEntertainment(entertainment);
        this.entertainment = entertainment;
      }
    );
  }

  private instanceOfEntertainment(object: any): object is LocalEvent {
    return 'schedule' in object && 'localSponsorID' in object;
  }

  changFavoriteIcon() {
    if (this.favoriteIcon == 'bi bi-bookmark') {
      this.favoriteIcon = 'bi-bookmark-fill';
    } else {
      this.favoriteIcon = 'bi bi-bookmark';
    }
  }

}
