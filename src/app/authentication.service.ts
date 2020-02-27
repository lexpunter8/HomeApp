import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { LoginResultModel } from './models/login.result.model';


const loggedinUserKeyString : string = 'loggedinuser';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor() { }

  isUerLoggedIn() : boolean {
    let user = localStorage.getItem(loggedinUserKeyString);
    return !user
  }

  getLoggedInUser() : string{
    return localStorage.getItem(loggedinUserKeyString)
  }
  
  login(username: string, password: string) : Observable<LoginResultModel>{
    let loginResult: boolean = true;
    return Observable.create(observable => {
      observable.next({isSucces: loginResult});
      localStorage.setItem(loggedinUserKeyString, username)
      observable.complete();
    });
  }
}