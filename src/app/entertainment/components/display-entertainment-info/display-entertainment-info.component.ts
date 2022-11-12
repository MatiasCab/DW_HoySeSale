import { Component, Input, OnInit } from '@angular/core';
import { Entertaiment } from 'src/app/core/models/entertainment';

@Component({
  selector: 'app-display-entertainment-info',
  templateUrl: './display-entertainment-info.component.html',
  styleUrls: ['./display-entertainment-info.component.scss']
})
export class DisplayEntertainmentInfoComponent implements OnInit {

  @Input() entertainment?: Entertaiment;

  @Input() isAnEvent?: boolean;

  @Input() isMobile?: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

}
