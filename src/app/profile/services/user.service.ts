import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { API_URL } from 'src/app/core/consts';
import { User } from 'src/app/core/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  imageUploaded: EventEmitter<string> = new EventEmitter();

  private userInfo?: User;

  constructor(private http: HttpClient) { 
  }
  
  get User(){
    return this.userInfo;
  }

  SetUser(user: User | undefined){
    this.userInfo = user;
  }

  getThisUser() {
    if(this.User){
      return of(this.User);
    }else{
      return this.http.get<User>(`${API_URL}/users`).pipe(
        tap(user => this.SetUser(user)),
        catchError(this.handleError('getThisUser'))
      );
    }
  }

  addToFavorite(entertainmentId: number){
    return this.http.post<any>(`${API_URL}/users/favoriteEntertainments`, {entertainmentId}).pipe(
      catchError(this.handleError('getThisUser'))
    );
  }

  quitToFavorite(entertainmentId: number){
    return this.http.delete<any>(`${API_URL}/users/favoriteEntertainments/${entertainmentId}`).pipe(
      catchError(this.handleError('getThisUser'))
    );
  }

  uploadProfileImage(base64Img: string){
    base64Img = base64Img.split(';base64,')[1];
    return this.http.post<any>(`${API_URL}/users/uploadImage`, {base64Img}).pipe(
      catchError(this.handleError('uploadProfileImage')),
      tap(_ => this.userInfo = undefined)
    );
  }

  private handleError(operation: string) {
    return (error: any): Observable<any> => {
      console.error(`${operation} failed: ${error.error.message}`);
      return of({error: true});
    }
  }
}
