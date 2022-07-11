import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  private _loggedIn = false;
  constructor() { 
    if(localStorage.getItem('token')) {
      this._loggedIn = true;
    }
  }

  login(login: string, password: string) {
    if (login === 'admin' && password === 'admin') {
      localStorage.setItem('token', 'admin');
      this._loggedIn = true;
      return true;
    }else {
      localStorage.removeItem('token');
      this._loggedIn = false;
      return false;
    }
    
  }

  isLoggedIn() {
    return this._loggedIn;
  }
}
