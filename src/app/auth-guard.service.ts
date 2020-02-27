import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  
  constructor(private _router: Router, private authService: AuthenticationService) { 

  }  

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {  
      if (this.authService.isUerLoggedIn){  
          return true;  
      }  
      this._router.navigate(['login']);  
      return false;  
  }  
}
