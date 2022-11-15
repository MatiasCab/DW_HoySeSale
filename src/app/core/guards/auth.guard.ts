import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TOKEN_NAME_LS } from '../consts';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const idToken = localStorage.getItem(TOKEN_NAME_LS);
      console.log(idToken);
      if(idToken){
        return true;
      }
      this.router.navigateByUrl('/presentation/login');
    return false;
  }
  
}
