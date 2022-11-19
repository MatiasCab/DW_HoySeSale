import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/core/consts';
import { ChatsPreview } from 'src/app/core/models/chatsPreview';
import { Message } from 'src/app/core/models/messages';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  getChatsPreview(searchFilter?: string) {
    let params = '';
    if (searchFilter) {
      params = `?searchInfo=${searchFilter}`;
    }
    return this.http.get<ChatsPreview[]>(`${API_URL}/chats${params}`);
  }

  getEspecificChat(entertainmentId: number) {
    return this.http.get<ChatsPreview>(`${API_URL}/chats/${entertainmentId}`);
  } //HACER EL HANDLER ERROR

  sendMessage(messageContent: string, chatId: number) {
    return this.http.post<any>(`${API_URL}/chats/${chatId}/messages`, {messageContent});
  }

  getMessages(chatId: number) {
    return this.http.get<Message[]>(`${API_URL}/chats/${chatId}/messages`);
  }
}
