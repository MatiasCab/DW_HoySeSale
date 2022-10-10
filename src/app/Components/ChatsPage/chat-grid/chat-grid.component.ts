import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChatMessagePageComponent } from '../ChatView/chat-message-page/chat-message-page.component';
import { ChatComponent } from '../chat/chat.component';

@Component({
  selector: 'app-chat-grid',
  templateUrl: './chat-grid.component.html',
  styleUrls: ['./chat-grid.component.scss']
})
export class ChatGridComponent implements OnInit {

  @Input() chatsArray: string[] = ["0","1","2", "3","0","1","2", "3", "0","1","2", "3", "0","1","2", "3", "0","1","2", "3"];

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('hiddenElement') chatMessagePage?: ChatMessagePageComponent;

  display: boolean = false;

  openChat(d: ChatComponent){
    this.display = true;
    this.chatMessagePage?.show();
  }

}
