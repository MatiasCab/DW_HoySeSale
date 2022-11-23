import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import { SearchCardsService } from '../../services/SearchCards.service';

import { searchInfo, searchView } from 'src/app/core/models/searchInfo';

@Component({
  selector: 'app-display-search-info',
  templateUrl: './display-search-info.component.html',
  styleUrls: ['./display-search-info.component.scss']
})
export class DisplaySearchInfoComponent implements OnInit {

  searchView?: searchView;
  searchIndex: number = 0;
  lastSearchInfo?: searchInfo;
  limitReached: boolean = false;
  noResultText: string = 'No hay más resultados disponibles';

  @Input() isMobile?: boolean;
  @Input() showSearchBar?: boolean = true;
  @Input() onlyFavorites: boolean = false;
  @ViewChild('cardsScroller') cardsScroller?: ElementRef<HTMLDivElement>;

  get limit(){
    return this.limitReached;
  }


  constructor(private searchService: SearchCardsService) { }

  ngOnInit(): void {
  }

  getEntertianments(searchInfo?: searchInfo, searchIndex?: number) {
    let sameSearch = this.lastSearchInfo?.type == searchInfo?.type && this.lastSearchInfo?.searchInput == searchInfo?.searchInput && this.lastSearchInfo;

    if (!searchIndex && this.cardsScroller) {
      this.cardsScroller.nativeElement.scrollTop = 0;
    }

    if (!sameSearch || searchIndex) {
      this.searchService.getEntertainments(searchIndex ? searchIndex : 0, this.onlyFavorites, searchInfo?.type, searchInfo?.searchInput)
        .subscribe(
          response => {
            this.searchIndex = response.searchIndex;

            if (!searchIndex) this.searchView = undefined;
            if (response.entertainments.length == 0) this.limitReached = true;

            this.searchView = {
              action: searchIndex ? 'extends' : 'new',
              oldEntertainments: this.searchView ? [...this.searchView.oldEntertainments, ...response.entertainments] : response.entertainments,
              newEntertainments: response.entertainments
            }

            this.lastSearchInfo = searchInfo;
          });
    }
  }

  scrollInteraction(event: Event) {
    let eventEl: HTMLElement = event.target as HTMLElement;

    if (eventEl.offsetHeight + eventEl.scrollTop >= eventEl.scrollHeight) {
      if (!this.limitReached) {
        this.getEntertianments(this.lastSearchInfo, this.searchIndex);
      }
    }
  }
}
