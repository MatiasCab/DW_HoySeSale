import { Component, Input, OnInit } from '@angular/core';
import { Entertainment } from 'src/app/models/entertainment';

@Component({
  selector: 'app-display-entertainment-info',
  templateUrl: './display-entertainment-info.component.html',
  styleUrls: ['./display-entertainment-info.component.scss']
})
export class DisplayEntertainmentInfoComponent implements OnInit {

  //@Input() entertainment!: Entertainment;

  entertainment = {id: 1, name: 'VALIANT', description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) Lorem Ipsum.', qualification: 4, profilePic: 9, gallery: [1, 2]};

  constructor() { }

  ngOnInit(): void {
  }

}
