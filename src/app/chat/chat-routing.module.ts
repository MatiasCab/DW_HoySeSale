import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatPageComponent } from './components/chat-page/chat-page.component';
import { ChatMessagePageComponent } from './components/chat-message-page/chat-message-page.component';
import { DesktopChatPageComponent } from './components/desktop-chat-page/desktop-chat-page.component';

const routes: Routes = [
    {
        path: '',
        component: ChatPageComponent,
        data: { animation: 'ChatsPage' }
    },
    {
        path: ':username',
        component: ChatMessagePageComponent,
        data: { animation: 'MessagePage' }
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChatRoutingModule { }
