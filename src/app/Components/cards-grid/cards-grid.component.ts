import { Component, OnInit } from '@angular/core';

import { Entretainment } from 'src/app/models/entretainment';

@Component({
  selector: 'app-cards-grid',
  templateUrl: './cards-grid.component.html',
  styleUrls: ['./cards-grid.component.scss']
})

export class CardsGridComponent implements OnInit {

  entretainments: Entretainment[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}