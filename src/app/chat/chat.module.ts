import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DisplayChatMessageComponent } from './components/chat-message-page/display-chat-message/display-chat-message.component';
import { ChatMessagePageComponent } from './components/chat-message-page/chat-message-page.component';
import { ChatPageComponent } from './components/chat-page/chat-page.component';
import { DesktopChatPageComponent } from './components/desktop-chat-page/desktop-chat-page.component';
import { ChatComponent } from './components/shared/chat-grid/chat/chat.component';
import { ChatGridComponent } from './components/shared/chat-grid/chat-grid.component';
import { InputMessageComponent } from './components/shared/input-message/input-message.component';
import { MessageComponent } from './components/shared/message-grid/message/message.component';
import { MessageGridComponent } from './components/shared/message-grid/message-grid.component';
import { ChatRoutingModule } from './chat-routing.module';


@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    ChatRoutingModule
  ],
  declarations: [
    DisplayChatMessageComponent,
    ChatMessagePageComponent,
    ChatPageComponent,
    DesktopChatPageComponent,
    ChatComponent,
    ChatGridComponent,
    InputMessageComponent,
    MessageComponent,
    MessageGridComponent
  ]
})
export class ChatModule { }
