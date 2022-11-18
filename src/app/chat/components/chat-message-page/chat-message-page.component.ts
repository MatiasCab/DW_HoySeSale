import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { appAnimations } from 'src/app/animations';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat-message-page',
  templateUrl: './chat-message-page.component.html',
  styleUrls: ['./chat-message-page.component.scss'],
  animations: [appAnimations]
})
export class ChatMessagePageComponent implements OnInit {
  

  constructor(private chatService: ChatService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const chatId = this.route.snapshot.paramMap.get('chatId');

    if(+chatId! == NaN) return;

    this.chatService.getChatById(Number(chatId)).subscribe( 
      res => {

    })
  }
}
