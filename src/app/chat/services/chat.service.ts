import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { API_URL } from 'src/app/core/consts';
import { ChatsPreview } from 'src/app/core/models/chatsPreview';
import { Message } from 'src/app/core/models/messages';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private readonly CHAT_API_URL = `${API_URL}/chats`;

  constructor(private http: HttpClient) { }

  getChatsPreview(searchFilter?: string) {
    let params = '';
    if (searchFilter) {
      params = `?searchInfo=${searchFilter}`;
    }
    return this.http.get<ChatsPreview[]>(`${this.CHAT_API_URL}${params}`).pipe(
      catchError(this.handleError<ChatsPreview[]>('getEspecificChat', []))
    );
  }

  getEspecificChat(entertainmentId: number) {
    return this.http.get<ChatsPreview>(`${this.CHAT_API_URL}/${entertainmentId}`).pipe(
      catchError(this.handleError<ChatsPreview>('getEspecificChat'))
    );
  }

  sendMessage(messageContent: string, chatId: number) {
    return this.http.post<any>(`${this.CHAT_API_URL}/${chatId}/messages`, {messageContent}).pipe(
      catchError(this.handleError<any>('sendMessage'))
    );
  }

  getMessages(chatId: number) {
    return this.http.get<Message[]>(`${this.CHAT_API_URL}/${chatId}/messages`).pipe(
      catchError(this.handleError<Message[]>('getMessages', []))
    );
  }

  private handleError<T>(operation: string, result?: T){
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.error.message}`);
      return of(result as T);
    }
  }
}
