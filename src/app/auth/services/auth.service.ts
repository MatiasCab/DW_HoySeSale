import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from "moment";
import { catchError, map, Observable, of, tap } from 'rxjs';
import { SignupInfo } from 'src/app/core/models/signupInfo';

const API_URL = 'http://localhost:3001/api/v1';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string) {
    return this.http.post<any>(`${API_URL}/login`, { email, password }).pipe(
      tap(data => console.log(data))
    ).subscribe(res => this.setSession(res));
  }

  signup(signupInfo: SignupInfo){
    return this.http.post<any>(`${API_URL}/signup`, signupInfo).pipe(
      catchError( this.handleError<any>('signup'))
    );
  }

  setSession(authResult: any) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration!);
    return moment(expiresAt);
  }

  private handleError<T>(operation: String){
    return (error: any) => {
      console.error(`${operation} failed: ${error.error.message}`);
      if(error.error.name == 'CredentialsAlredyExistsError'){
        return of({error: true, type: 'RepitedCredentials'});
      };
      return of({error: true, type: 'Server'});
    };
  }
}
