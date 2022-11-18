import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatPageComponent } from './components/chat-page/chat-page.component';
import { ChatMessagePageComponent } from './components/chat-message-page/chat-message-page.component';
import { DesktopChatPageComponent } from './components/desktop-chat-page/desktop-chat-page.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: ChatPageComponent,
        canActivate: [AuthGuard],
        data: { animation: 'ChatsPage' }
    },
    {
        path: ':chatId',
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
