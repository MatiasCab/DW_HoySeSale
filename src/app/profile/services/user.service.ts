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
    return this.http.get<any>(`${API_URL}/users`).pipe(
      catchError(this.handleError<User>('getThisUser'))
    );
  }

  private handleError<User>(operation: string) {
    return (error: any): Observable<undefined> => {
      console.error(`${operation} failed: ${error.error.message}`);
      return of(undefined);
    }
  }
}
