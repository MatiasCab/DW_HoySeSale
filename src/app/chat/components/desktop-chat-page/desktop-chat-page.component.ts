import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageGridComponent } from '../shared/message-grid/message-grid.component';

@Component({
  selector: 'app-desktop-chat-page',
  templateUrl: './desktop-chat-page.component.html',
  styleUrls: ['./desktop-chat-page.component.scss']
})
export class DesktopChatPageComponent implements OnInit {

  @ViewChild('messageGrid') messageGrid?: MessageGridComponent;

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage(message: string){
    this.messageGrid?.newMessage(message);
  }

}
