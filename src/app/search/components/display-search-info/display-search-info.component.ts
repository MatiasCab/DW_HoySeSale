import { Component, Input, OnInit } from '@angular/core';
import { entertainmentCardPreview } from 'src/app/core/models/entertainmentCardPreview';
import { searchInfo, searchView } from 'src/app/core/models/searchInfo';
import { SearchCardsService } from '../../services/SearchCards.service';

@Component({
  selector: 'app-display-search-info',
  templateUrl: './display-search-info.component.html',
  styleUrls: ['./display-search-info.component.scss']
})
export class DisplaySearchInfoComponent implements OnInit {

  searchView?: searchView;
  searchIndex: number = 0;
  lastSearchInfo?: searchInfo;
  prevEntertainmentsCount: number = 0;

  @Input() isMobile?: boolean;

  constructor(private searchService: SearchCardsService) { }

  ngOnInit(): void {
  }

  getEntertianments(searchInfo?: searchInfo, searchIndex?: number) {
    this.lastSearchInfo = searchInfo;
    this.searchService.getEntertainments(searchIndex ? searchIndex : 0, searchInfo?.type, searchInfo?.searchInput).subscribe(
      response => {
        console.log(response);
        this.searchIndex = response.searchIndex;
        this.searchView = {
          action: searchIndex ? 'extends' : 'new',
          entertainments: this.searchView ? [...this.searchView.entertainments,...response.entertainments] : response.entertainments
        }
      }
    );
  }

  scrollInteraction(event: Event){
    let eventEl: HTMLElement = event.target as HTMLElement;
    if (eventEl.offsetHeight + eventEl.scrollTop >= eventEl.scrollHeight) {
      this.getEntertianments(this.lastSearchInfo, this.searchIndex); //Asegurarse de que no este llamando cuando se acaben los entretenimeintos pero se siga usando el scroll.
    }
  }
}
