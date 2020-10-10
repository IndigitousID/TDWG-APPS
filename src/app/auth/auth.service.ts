import { Injectable } from  '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { tap } from  'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';

import { Storage } from  '@ionic/storage';
import { User } from  './user';
import { AuthLoginResponse, AuthRegisterResponse } from  './auth-response';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AUTH_SERVER_ADDRESS:  string  =  'http://127.0.0.1:8000/api';
//  AUTH_SERVER_ADDRESS:  string  =  'http://thisdaywithgod.org/index.php/api';
  authSubject  =  new  BehaviorSubject(false);


  constructor(private  httpClient:  HttpClient, private  storage:  Storage) { }

  register(user: User): Observable<AuthRegisterResponse> {
    return this.httpClient.post<AuthRegisterResponse>(`${this.AUTH_SERVER_ADDRESS}/register`, user).pipe(
      tap(async (res:  AuthRegisterResponse ) => {

        if (res.status) {
         // await this.storage.set("ACCESS_TOKEN", res.user.access_token);
          //await this.storage.set("EXPIRES_IN", res.user.expires_in);
          this.authSubject.next(true);
        }
      })

    );
  }

  login(user: User): Observable<AuthLoginResponse> {
    return this.httpClient.post(`${this.AUTH_SERVER_ADDRESS}/login`, user).pipe(
      tap(async (res: AuthLoginResponse) => {

        if (res.status) {
          console.log("userName" , res.data.user.name);
          await this.storage.set('User_Name', res.data.user.name);
          await this.storage.set('ACCESS_TOKEN', res.data.user.api_token);
          //await this.storage.set("ACCESS_TOKEN", res.user.access_token);
         // await this.storage.set("EXPIRES_IN", res.user.expires_in);
          this.authSubject.next(true);
        }
      })
    );
  }

  async logout() {
    await this.storage.remove('User_Name');
    await this.storage.remove("ACCESS_TOKEN");
   // await this.storage.remove("EXPIRES_IN");
    this.authSubject.next(false);
  }

  isLoggedIn() {
    return this.authSubject.asObservable();
  }
}
