import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from "moment";
import { catchError, map, Observable, of, tap } from 'rxjs';
import { API_URL } from 'src/app/core/consts';
import { SignupInfo } from 'src/app/core/models/signupInfo';
import { UserService } from 'src/app/profile/services/user.service';

const API_AUTH_URL = `${API_URL}/auth`;

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService) {
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${API_AUTH_URL}/login`, { username, password }).pipe(
      tap(res => this.setSession(res)),
      map(res => { return { error: false, type: 'success' } }),
      catchError(this.handleError<any>('login'))
    );
  }

  signup(signupInfo: SignupInfo) {
    return this.http.post<any>(`${API_AUTH_URL}/verify`, signupInfo).pipe(
      catchError(this.handleError<any>('signup'))
    );
  }

  verify(verificationCode: string){
    return this.http.post<any>(`${API_AUTH_URL}/signup`, {verificationCode}).pipe(
      catchError(this.handleError<any>('verify'))
    );
  }

  setSession(authResult: any) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');
    localStorage.setItem('id_token', authResult.token);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
    localStorage.setItem("user_ID", authResult.userID);
  }

  logout() {
    this.userService.SetUser(undefined);
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("user_ID");
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration!);
    return moment(expiresAt);
  }

  private handleError<T>(operation: String) {
    return (error: any) => {
      console.error(`${operation} failed: ${error.error.message}`); //Esto no se es lo mejor, capaz en ver de hacer if aca devolve solo el tipo y error true y fue.
      if (error.error.name == 'CredentialsAlredyExistsError') {
        return of({ error: true, type: 'RepitedCredentials' });
      } else if (error.error.name == 'InvalidUsernameOrPassword') {
        return of({ error: true, type: 'InvalidCredentials' });
      } else {
        return of({ error: true, type: 'Server' });
      }
    };
  }
}
