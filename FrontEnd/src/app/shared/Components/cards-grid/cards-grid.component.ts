import { Component, Input, OnInit } from '@angular/core';
import { appAnimations } from 'src/app/animations';
import { Local } from 'src/app/core/models/local';

import { Entertainment } from 'src/app/models/entertainment';

@Component({
  selector: 'app-cards-grid',
  templateUrl: './cards-grid.component.html',
  styleUrls: ['./cards-grid.component.scss'],
  animations: [appAnimations]
})

export class CardsGridComponent implements OnInit {

  //entretainments: Entretainment[] = [];

  // entertainments: Entertainment[] = [
  //   {id: 1, name: 'Valiant', description: 'Toro', qualification: 4, profilePic: 9, gallery: [1, 2]},
  //   {id: 2, name: 'Ginebra', description: 'Barrios', qualification: 4.5, profilePic: 13, gallery: [3, 4]},
  //   {id: 3, name: 'Dulas', description: 'Sarabia', qualification: 3, profilePic: 10, gallery: [5, 6]},
  //   {id: 4, name: 'Reynaldo', description: 'Rincón', qualification: 3.5, profilePic: 12, gallery: [7, 8]},
  //   {id: 5, name: 'Valiant', description: 'Toro', qualification: 4, profilePic: 9, gallery: [1, 2]},
  //   {id: 6, name: 'Ginebra', description: 'Barrios', qualification: 4.5, profilePic: 13, gallery: [3, 4]},
  //   {id: 7, name: 'Dulas', description: 'Sarabia', qualification: 3, profilePic: 10, gallery: [5, 6]},
  //   {id: 8, name: 'Reynaldo', description: 'Rincón', qualification: 3.5, profilePic: 12, gallery: [7, 8]}
  // ];

  @Input() entertainments?: Local[];

  constructor() { }

  ngOnInit(): void {
  }

}