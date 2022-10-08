import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-message-page',
  templateUrl: './chat-message-page.component.html',
  styleUrls: ['./chat-message-page.component.scss']
})
export class ChatMessagePageComponent implements OnInit {

  isDisplaying: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  show(){
    this.isDisplaying = true;
  }


}
