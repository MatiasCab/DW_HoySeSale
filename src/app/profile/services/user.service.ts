import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { API_URL } from 'src/app/core/consts';
import { User } from 'src/app/core/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  imageUploaded: EventEmitter<string> = new EventEmitter();

  constructor(private http: HttpClient) { }

  getThisUser() {
    return this.http.get<User>(`${API_URL}/users`).pipe(
      catchError(this.handleError('getThisUser'))
    );
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
      catchError(this.handleError('uploadProfileImage'))
    );
  }

  private handleError(operation: string) {
    return (error: any): Observable<any> => {
      console.error(`${operation} failed: ${error.error.message}`);
      return of({error: true});
    }
  }
}
