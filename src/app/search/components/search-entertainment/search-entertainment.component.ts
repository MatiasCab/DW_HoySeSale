import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import { searchInfo } from 'src/app/core/models/searchInfo';
import { FilterComponent } from 'src/app/shared/Components/filter/filter.component';
import { SearchInputComponent } from 'src/app/shared/Components/search-input/search-input.component';

@Component({
  selector: 'app-search-entertainment',
  templateUrl: './search-entertainment.component.html',
  styleUrls: ['./search-entertainment.component.scss']
})
export class SearchEntertainmentComponent implements OnInit {

  @ViewChild('searchBar') searchBar?: SearchInputComponent;
  @ViewChild('filter') filter?: FilterComponent;
  @Input() showSearchBar?: boolean;
  @Output() searchEvent: EventEmitter<searchInfo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitSearchEvent(info: string | undefined, type: string | undefined){
    let searchInfo: searchInfo = {type: type, searchInput: info};
    this.searchEvent.emit(searchInfo);
  }

  searchByInput(searchInfo: string){
    const filterType = this.filter?.getType();
    this.emitSearchEvent(searchInfo, filterType)
  }

  searchByFilters(filterType: string) {
    const searchBarValue = this.searchBar?.getSearchInfo;
    this.emitSearchEvent(searchBarValue, filterType);
  }
}
