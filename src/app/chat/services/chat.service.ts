import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/core/consts';
import { ChatsPreview } from 'src/app/core/models/chatsPreview';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

constructor(private http: HttpClient) { }

getChatsPreview(searchFilter?: string) {
  let params = '';
  if(searchFilter){
    params = `?searchInfo=${searchFilter}`;
  }
  return this.http.get<ChatsPreview[]>(`${API_URL}/chats${params}`);
}

getChatById(chatId:number) {
  return this.http.get<ChatsPreview>(`${API_URL}/chats/${chatId}`);
} //HACER EL HANDLER ERROR

}
