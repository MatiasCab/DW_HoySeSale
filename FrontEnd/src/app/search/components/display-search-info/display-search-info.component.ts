import { Component, Input, OnInit } from '@angular/core';
import { Local } from 'src/app/core/models/local';
import { SearchCardsService } from '../../services/SearchCards.service';

@Component({
  selector: 'app-display-search-info',
  templateUrl: './display-search-info.component.html',
  styleUrls: ['./display-search-info.component.scss']
})
export class DisplaySearchInfoComponent implements OnInit {

  entertainments?: Local[];

  @Input() isMobile?: boolean;

  constructor(private searchService: SearchCardsService) { }

  ngOnInit(): void {
    this.searchService.getAllLocals().subscribe(
      locals => this.entertainments = locals
    )
  }

}
