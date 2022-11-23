import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from 'src/app/profile/services/user.service';
import { ChatService } from '../../services/chat.service';

import { Message, MessageFullInfo } from 'src/app/core/models/messages';
import { MessageGridComponent } from '../shared/message-grid/message-grid.component';
import { ChatsPreview } from 'src/app/core/models/chatsPreview';
import { BREAK_POINT } from 'src/app/core/consts';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit {

  @ViewChild('messageGrid') messageGrid?: MessageGridComponent;

  isMobile?: boolean;
  chatsPreview?: ChatsPreview[];
  selectedChat?: ChatsPreview;
  messages?: MessageFullInfo[];
  localId?: number;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private chatService: ChatService,
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.breakpointObserver.observe([BREAK_POINT])
      .subscribe(result => {
        const breakpoints = result.breakpoints;
        if (breakpoints[BREAK_POINT]) {
          this.isMobile = false;
        } else {
          this.isMobile = true;
        }
      });
    this.searchChat();
  }

  sendMessage(message: string) {
    this.chatService.sendMessage(message, this.selectedChat!.messageChatId).subscribe(
      message => {
        let user = this.userService.User;
        if (!user) {
          this.userService.getThisUser().subscribe(
            user => this.setMessageInfo(message, user)
          );
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
      recieverIMage: this.selectedChat!.imageLink
    })
  }

  chatSelected(chatId: number) {
    this.selectedChat = this.chatsPreview?.filter((chat) => chat.messageChatId == chatId)[0];
    this.localId = this.selectedChat?.localId;

    this.chatService.getMessages(chatId).subscribe(
      messages => {
        this.userService.getThisUser().subscribe(
          user => {
            const messagesCont: MessageFullInfo[] = []
            messages.forEach(message => {
              const isSender = message.receiver == Number(this.selectedChat?.localId);
              messagesCont?.push({
                message,
                type: isSender ? 'send' : 'recibe',
                senderImage: isSender ? user.imageLink : this.selectedChat!.imageLink,
                recieverIMage: isSender ? this.selectedChat!.imageLink : user.imageLink
              })
            })
            this.messages = messagesCont;
          }
        )
      }
    )
  }

  searchChat(searchInfo?: string) {
    const entertainmentId = this.route.snapshot.queryParamMap.get('entertainment');

    if (entertainmentId) {
      this.chatService.getEspecificChat(Number(entertainmentId)).subscribe(chat => {
        this.selectedChat = chat;
        this.getChatsPreview(false, searchInfo);
      })
    } else {
      this.getChatsPreview(true, searchInfo);
    }
  }

  getChatsPreview(putSelectedChat: boolean, searchInfo?: string) {
    this.chatService.getChatsPreview(searchInfo).subscribe(
      res => {
        this.chatsPreview = res;
        if (this.chatsPreview.length > 0) {
          if (putSelectedChat) {
            this.selectedChat = this.chatsPreview[0];
          }
          this.chatSelected(this.selectedChat!.messageChatId);
        }
      }
    )
  }

}
