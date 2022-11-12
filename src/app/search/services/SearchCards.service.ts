import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Local } from 'src/app/core/models/local';
import { catchError, Observable, of, tap, throwError } from 'rxjs';
import { LocalEvent } from 'src/app/core/models/event';
import { entertainmentCardPreview } from 'src/app/core/models/entertainmentCardPreview';
import { searchResponse } from 'src/app/core/models/searchInfo';

const API_URL = 'http://localhost:3001/api/v1';

@Injectable({
  providedIn: 'root'
})
export class SearchCardsService {

constructor(private http: HttpClient) { }

  getEntertainments(searchIndex: Number, type?: string, searchInfo?: string){
    let params =`?startIndex=${searchIndex}&`;
    if(type){
      params += `type=${type}&`;
    }
    if(searchInfo){
      params += `searchInfo=${searchInfo}`
    }
    return this.http.get<searchResponse>(`${API_URL}/searchResults${params}`).pipe(
      catchError( this.handleError<searchResponse>('getAllEntertainments', {searchIndex:0, entertainments: []}))
    );
  }

  getLocalById(id:number){
    return this.http.get<Local | LocalEvent>(`${API_URL}/entertainments/${id}`).pipe(
      catchError( this.handleError<Local | LocalEvent>('getEntertainmentById'))
    );
  };

  private handleError<T>(operation: string, result?: T){
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.error.message}`);
      return of(result as T);
    }
  }

}
