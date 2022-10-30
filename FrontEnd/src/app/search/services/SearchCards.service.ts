import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Local } from 'src/app/core/models/local';
import { catchError, Observable, of, tap, throwError } from 'rxjs';
import { LocalEvent } from 'src/app/core/models/event';

const API_URL = 'http://localhost:3001/api/v1';

@Injectable({
  providedIn: 'root'
})
export class SearchCardsService {

constructor(private http: HttpClient) { }

  getAllLocals(){
    return this.http.get<Local[]>(`${API_URL}/entertainments`).pipe(
      catchError( this.handleError<Local[]>('getAllLocals', []))
    );
  };

  getEntertainmentById(id:number){
    return this.http.get<Local | LocalEvent>(`${API_URL}/entertainments/${id}`).pipe(
      catchError( this.handleError<Local | LocalEvent>('getEntertainmentById'))
    );
  }

  private handleError<T>(operation: string, result?: T){
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

}
