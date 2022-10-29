import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-entertainment-info',
  templateUrl: './display-entertainment-info.component.html',
  styleUrls: ['./display-entertainment-info.component.scss']
})
export class DisplayEntertainmentInfoComponent implements OnInit {

  //@Input() entertainment!: Entertainment;

  images: string[] = ["../../../assets/images/alex-voulgaris-jfoIIFLw3_Y-unsplash.jpg", "../../../assets/images/tony-pham-FUmDe-Bx1LA-unsplash.jpg"];

  entertainment = {id: 1, name: 'VALIANT', description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) Lorem Ipsum.', qualification: 4, profilePic: 9, gallery: [1, 2]};

  @Input() isAnEvent?: boolean;

  @Input() isMobile?: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

}
