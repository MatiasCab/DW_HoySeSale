import { Component, Input, OnInit } from '@angular/core';

import { Entertainment } from 'src/app/models/entertainment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() entertainment!: Entertainment;

  constructor() { }

  ngOnInit(): void {
  }

}
