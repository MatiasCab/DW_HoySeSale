import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.scss']
})
export class HeaderNavbarComponent implements OnInit {

  @Input() currentIcon1?: string;
  @Input() currentIcon2?: string;
  @Input() currentText?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
