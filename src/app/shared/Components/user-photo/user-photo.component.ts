import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-photo',
  templateUrl: './user-photo.component.html',
  styleUrls: ['./user-photo.component.scss']
})
export class UserPhotoComponent implements OnInit {

  @Input() imageURL?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
