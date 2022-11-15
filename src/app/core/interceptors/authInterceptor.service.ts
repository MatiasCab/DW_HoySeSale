import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { API_URL, TOKEN_NAME_LS } from '../consts';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes(API_URL)) {
      const idToken = localStorage.getItem(TOKEN_NAME_LS);

      if (idToken) {
        const cloned = req.clone({
          headers: req.headers.set("Authorization", idToken)
        });
        console.log(cloned);
        return next.handle(cloned).pipe(
          catchError(this.handleError())
        );
      }
    }
    return next.handle(req);
  }

  private handleError() {
    return (error: HttpErrorResponse) => {
      if(error.error.name == 'NoJWT' || error.error.name == 'JWTInvalid'){
        this.router.navigateByUrl('/presentation/login');
      };
      throw error;
    }
  }

}
