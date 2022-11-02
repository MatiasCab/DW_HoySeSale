import { Component, Input, OnInit } from '@angular/core';
import { entertainmentCardPreview } from 'src/app/core/models/entertainmentCardPreview';
import { SearchCardsService } from '../../services/SearchCards.service';

@Component({
  selector: 'app-display-search-info',
  templateUrl: './display-search-info.component.html',
  styleUrls: ['./display-search-info.component.scss']
})
export class DisplaySearchInfoComponent implements OnInit {

  entertainments?: entertainmentCardPreview[];

  @Input() isMobile?: boolean;

  constructor(private searchService: SearchCardsService) { }

  ngOnInit(): void {
    this.getAllEntertainments();
  }

  getAllEntertainments(){
    this.searchService.getAllEntertainments().subscribe(
      entertainments =>  this.entertainments = entertainments
    );
  }

  getFilteredEntertianments(){
    this.searchService;
  }

}
