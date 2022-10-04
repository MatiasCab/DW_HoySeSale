import { Component, Input, OnInit } from '@angular/core';

import { Entretainment } from 'src/app/models/entretainment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() entretainment!: Entretainment;

  currentName = this.entretainment.name;
  currentPicture = this.entretainment.profilePic;

  constructor() { }

  ngOnInit(): void {
  }

}
