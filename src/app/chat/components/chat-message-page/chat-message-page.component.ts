import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from 'src/app/profile/services/user.service';
import { ChatService } from '../../services/chat.service';

import { appAnimations } from 'src/app/animations';
import { ChatsPreview } from 'src/app/core/models/chatsPreview';
import { MessageFullInfo } from 'src/app/core/models/messages';

@Component({
  selector: 'app-chat-message-page',
  templateUrl: './chat-message-page.component.html',
  styleUrls: ['./chat-message-page.component.scss'],
  animations: [appAnimations]
})
export class ChatMessagePageComponent implements OnInit {

  chat?: ChatsPreview;
  messages?: MessageFullInfo[];

  constructor(
    private chatService: ChatService,
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    const entertainmentId = this.route.snapshot.paramMap.get('entertainmentId');

    if (+entertainmentId! == NaN) return;

    this.chatService.getEspecificChat(Number(entertainmentId)).subscribe(
      res => {
        this.chat = res;
        this.chatService.getMessages(this.chat!.messageChatId).subscribe(
          messages => {
            this.userService.getThisUser().subscribe(
              _user => {
                const messagesCont: MessageFullInfo[] = []
                messages.forEach(message => {
                  const isSender = message.receiver == Number(entertainmentId);
                  messagesCont?.push({
                    message,
                    type: isSender ? 'send' : 'recibe',
                    senderImage: isSender ? this.userService.User!.imageLink : this.chat!.imageLink,
                    recieverIMage: isSender ? this.chat!.imageLink : this.userService.User!.imageLink
                  })
                });
                this.messages = messagesCont;
              });
          });
      });
  }
  
}
