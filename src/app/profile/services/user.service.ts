import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { API_URL } from 'src/app/core/consts';
import { User } from 'src/app/core/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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
  private handleError(operation: string) {
    return (error: any): Observable<any> => {
      console.error(`${operation} failed: ${error.error.message}`);
      return of({error: true});
    }
  }
}
