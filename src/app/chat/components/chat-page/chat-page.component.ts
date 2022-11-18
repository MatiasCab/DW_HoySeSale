import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChatsPreview } from 'src/app/core/models/chatsPreview';
import { ChatService } from '../../services/chat.service';
import { MessageGridComponent } from '../shared/message-grid/message-grid.component';

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


  constructor(private breakpointObserver: BreakpointObserver, private chatService: ChatService) { }

  ngOnInit(): void {
    this.breakpointObserver.observe(['(min-width: 900px)', Breakpoints.HandsetLandscape])
    .subscribe(result => {
      const breakpoints = result.breakpoints;
      console.log(result);
      //if(breakpoints[Breakpoints.Small] || breakpoints[Breakpoints.Medium] || breakpoints[Breakpoints.WebLandscape]){
      if(breakpoints['(min-width: 900px)']){
        this.isMobile = false;
      }else{
        this.isMobile = true;
      }
    })
    this.searchChat();
  }

  sendMessage(message: string){
    this.messageGrid?.newMessage(message);
  }

  chatSelected(chatId: number){
    this.selectedChat = this.chatsPreview?.filter((chat) => chat.messageChatId == chatId)[0
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    ];
  }

  searchChat(searchInfo?: string){
    this.chatService.getChatsPreview(searchInfo).subscribe(
      res => {
        this.chatsPreview = res;
        console.log(this.chatsPreview);
        if(this.chatsPreview.length > 0){
          this.selectedChat = this.chatsPreview[0];
        }
      }
    )
  }
}
