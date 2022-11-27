import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, tap } from 'rxjs';
import * as moment from "moment";

import { UserService } from 'src/app/profile/services/user.service';

import { API_URL } from 'src/app/core/consts';
import { SignupInfo } from 'src/app/core/models/signupInfo';

const API_AUTH_URL = `${API_URL}/auth`;

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  login(username: string, password: string) {
    return this.http.post<any>(`${API_AUTH_URL}/login`, { username, password }).pipe(
      tap(res => this.setSession(res)),
      map(_res => { return { error: false, type: 'success' } }),
      catchError(this.handleError<any>('login'))
    );
  }

  signup(signupInfo: SignupInfo) {
    return this.http.post<any>(`${API_AUTH_URL}/signup`, signupInfo).pipe(
      catchError(this.handleError<any>('signup'))
    );
  }

  verify(verificationCode: string) {
    return this.http.post<any>(`${API_AUTH_URL}/verify`, { verificationCode }).pipe(
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

  private handleError<T>(operation: String) {
    return (error: any) => {
      console.error(`${operation} failed: ${error.error.message}`);
      if (error.error.name == 'CredentialsAlredyExistsError') {
        return of({ error: true, type: 'RepitedCredentials' });
      } else if (error.error.name == 'InvalidUsernameOrPassword') {
        return of({ error: true, type: 'InvalidCredentials' });
      } else if (error.error.name == 'InvalidVerificationCode') {
        return of({ error: true, type: 'InvalidCode' })
      } else {
        return of({ error: true, type: 'Server' });
      }
    };
  }
}
