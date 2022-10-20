import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-profile-favorite-info',
  templateUrl: './display-profile-favorite-info.component.html',
  styleUrls: ['./display-profile-favorite-info.component.scss']
})
export class DisplayProfileFavoriteInfoComponent implements OnInit {

  @Input() isMobile?: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
