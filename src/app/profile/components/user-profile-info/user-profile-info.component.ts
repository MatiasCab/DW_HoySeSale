import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile-info',
  templateUrl: './user-profile-info.component.html',
  styleUrls: ['./user-profile-info.component.scss']
})
export class UserProfileInfoComponent implements OnInit {

  @Input() isMobile?: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
