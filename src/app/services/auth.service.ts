import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _authenticated = false;

  constructor() { }

  public isAuthenticated(): boolean {
    return this._authenticated;
  }

  public login() {
    this._authenticated = true;
  }
}
