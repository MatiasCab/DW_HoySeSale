import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/chat/services/chat.service';
import { ChatsPreview } from 'src/app/core/models/chatsPreview';

@Component({
  selector: 'app-display-chat-info',
  templateUrl: './display-chat-info.component.html',
  styleUrls: ['./display-chat-info.component.scss']
})
export class DisplayChatInfoComponent implements OnInit {

  chatsPreview?: ChatsPreview[];

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.getChatsPreview().subscribe(
      res => {
        this.chatsPreview = res;
        console.log(this.chatsPreview);
      }
    )
  }



}
