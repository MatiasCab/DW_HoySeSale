import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap, throwError } from 'rxjs';
import { API_URL } from 'src/app/core/consts';
import { searchResponse } from 'src/app/core/models/searchInfo';

@Injectable({
  providedIn: 'root'
})
export class SearchCardsService {

constructor(private http: HttpClient) { }

  getEntertainments(searchIndex: Number, onlyFavorites: boolean, type?: string, searchInfo?: string){
    let params =`?startIndex=${searchIndex}&onlyFavorites=${onlyFavorites}&`;
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

  getEventById(id: number){
    return this.http.get<any>(`${API_URL}/events/${id}`).pipe(
      catchError( this.handleError<any>('getEventById'))
    );
  }

  getLocalById(id: number){
    return this.http.get<any>(`${API_URL}/locals/${id}`).pipe(
      catchError( this.handleError<any>('getLocalById'))
    );
  }

  private handleError<T>(operation: string, result?: T){
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.error.message}`);
      return of(result as T);
    }
  }

}
