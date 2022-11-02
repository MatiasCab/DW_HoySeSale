import { Component, Input, OnInit } from '@angular/core';
import { LocalEvent } from 'src/app/core/models/event';
import { Local } from 'src/app/core/models/local';

@Component({
  selector: 'app-display-entertainment-info',
  templateUrl: './display-entertainment-info.component.html',
  styleUrls: ['./display-entertainment-info.component.scss']
})
export class DisplayEntertainmentInfoComponent implements OnInit {

  @Input() entertainment?: Local | LocalEvent;

  @Input() isAnEvent?: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

}
