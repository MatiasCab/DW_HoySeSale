import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageGridComponent } from '../message-grid/message-grid.component';

@Component({
  selector: 'app-display-chat-message',
  templateUrl: './display-chat-message.component.html',
  styleUrls: ['./display-chat-message.component.scss']
})
export class DisplayChatMessageComponent implements OnInit {

  @ViewChild('messageGrid') messageGrid?: MessageGridComponent;

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage(message: string){
    this.messageGrid?.newMessage(message);
  }

}
