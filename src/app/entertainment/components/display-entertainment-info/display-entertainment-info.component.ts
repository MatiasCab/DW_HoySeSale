import { Component, Input, OnInit } from '@angular/core';

import { Local } from 'src/app/core/models/local';
import { Event } from 'src/app/core/models/event';

@Component({
  selector: 'app-display-entertainment-info',
  templateUrl: './display-entertainment-info.component.html',
  styleUrls: ['./display-entertainment-info.component.scss']
})
export class DisplayEntertainmentInfoComponent implements OnInit {

  @Input() entertainment?: Local | Event;
  @Input() isAnEvent?: boolean;
  @Input() isMobile?: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

}
