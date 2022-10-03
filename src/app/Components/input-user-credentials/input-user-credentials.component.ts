import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-user-credentials',
  templateUrl: './input-user-credentials.component.html',
  styleUrls: ['./input-user-credentials.component.scss']
})
export class InputUserCredentialsComponent implements OnInit {

  @Input() inputLabel!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
