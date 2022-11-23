import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { UserService } from 'src/app/profile/services/user.service';
import { ChatService } from 'src/app/chat/services/chat.service';

import { ChatsPreview } from 'src/app/core/models/chatsPreview';
import { User } from 'src/app/core/models/user';
import { Message, MessageFullInfo } from 'src/app/core/models/messages';
import { MessageGridComponent } from '../../shared/message-grid/message-grid.component';

@Component({
  selector: 'app-display-chat-message',
  templateUrl: './display-chat-message.component.html',
  styleUrls: ['./display-chat-message.component.scss']
})
export class DisplayChatMessageComponent implements OnInit {

  @ViewChild('messageGrid') messageGrid?: MessageGridComponent;
  @Input() chat?: ChatsPreview;
  @Input() messages?: MessageFullInfo[];

  constructor(
    private chatService: ChatService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  sendMessage(message: string) {
    this.chatService.sendMessage(message, this.chat!.messageChatId).subscribe(
      message => {
        let user = this.userService.User
        if (!user) {
          this.userService.getThisUser().subscribe(
            user => this.setMessageInfo(message, user)
          )
        } else {
          this.setMessageInfo(message, user);
        }
      }
    )
  }

  setMessageInfo(message: Message, user: User) {
    this.messageGrid?.newMessage({
      message,
      type: 'send',
      senderImage: user.imageLink,
      recieverIMage: this.chat!.imageLink
    })
  }
}
