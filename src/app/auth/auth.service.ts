import { Injectable } from  '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { tap } from  'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';

import { Storage } from  '@ionic/storage';
import { User } from  './user';
import { Preferensi } from  './preferensi';
import { Notifikasi } from  './notifikasi';
import { AuthLoginResponse, AuthRegisterResponse, PreferensiResponse, DirektoriResponse, ResourceResponse, NotifikasiResponse } from  './auth-response';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
//  AUTH_SERVER_ADDRESS:  string  =  'http://127.0.0.1:8000/api';
  AUTH_SERVER_ADDRESS:  string  =  'http://thisdaywithgod.org/index.php/api';
  authSubject  =  new  BehaviorSubject(false);

  constructor(private  httpClient:  HttpClient, private  storage:  Storage) { }

  buildHeaders(){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'withCredentials': 'true'
    });

    return this.storage.get('ACCESS_TOKEN').then((token) => {
        if(token){
          console.log('token', token);
          headers.append('Authorization', 'Bearer ' + token);
          return headers;
        }
      }
    )
  }

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

  preferensi(): Observable<PreferensiResponse> {
    return this.httpClient.get(`${this.AUTH_SERVER_ADDRESS}/saya/preferensi`).pipe(
      tap(async (res: PreferensiResponse) => {

        if (res.status) {
          console.log("pref" , res.data);
        }
      })
    );
  }

  simpanPreferensi(preferensi: Preferensi): Observable<PreferensiResponse> {
    return this.httpClient.post(`${this.AUTH_SERVER_ADDRESS}/saya/preferensi`, preferensi).pipe(
      tap(async (res: PreferensiResponse) => {

        if (res.status) {
          console.log("pref" , res.data);
        }
      })
    );
  }

  hapusPreferensi(id: string): Observable<PreferensiResponse> {
    return this.httpClient.delete(`${this.AUTH_SERVER_ADDRESS}/saya/preferensi/`+id).pipe(
      tap(async (res: PreferensiResponse) => {

        if (res.status) {
          console.log("pref" , res.data);
        }
      })
    );
  }

  direktori(): Observable<DirektoriResponse> {
    return this.httpClient.get(`${this.AUTH_SERVER_ADDRESS}/pengaturan/direktori`).pipe(
      tap(async (res: DirektoriResponse) => {

        if (res.status) {
          console.log("pref" , res.data);
        }
      })
    );
  }

  resource(per_page: number): Observable<ResourceResponse> {
    return this.httpClient.get(`${this.AUTH_SERVER_ADDRESS}/pengaturan/resource?per_page=` + per_page).pipe(
      tap(async (res: ResourceResponse) => {

        if (res.status) {
          console.log("pref" , res.data);
        }
      })
    );
  }

  resources(direktori: string): Observable<ResourceResponse> {
    return this.httpClient.get(`${this.AUTH_SERVER_ADDRESS}/pengaturan/resource?direktori=` + direktori).pipe(
      tap(async (res: ResourceResponse) => {

        if (res.status) {
          console.log("pref" , res.data);
        }
      })
    );
  }

  detailResource(id: number): Observable<NotifikasiResponse> {
    return this.httpClient.get(`${this.AUTH_SERVER_ADDRESS}/pengaturan/resource/`+id).pipe(
      tap(async (res: NotifikasiResponse) => {

        if (res.status) {
          console.log("pref" , res.data);
        }
      })
    );
  }

  notifikasi(): Observable<NotifikasiResponse> {
    return this.httpClient.get(`${this.AUTH_SERVER_ADDRESS}/saya/notifikasi`).pipe(
      tap(async (res: NotifikasiResponse) => {

        if (res.status) {
          console.log("pref" , res.data);
        }
      })
    );
  }

  bacaNotifikasi(input: Notifikasi): Observable<NotifikasiResponse> {
    return this.httpClient.post(`${this.AUTH_SERVER_ADDRESS}/saya/notifikasi`, input).pipe(
      tap(async (res: NotifikasiResponse) => {

        if (res.status) {
          console.log("pref" , res.data);
        }
      })
    );
  }

  logout(): Observable<AuthRegisterResponse> {
    return this.httpClient.post(`${this.AUTH_SERVER_ADDRESS}/saya/logout`, []).pipe(
      tap(async (res: AuthRegisterResponse) => {

        if (res.status) {
          this.storage.remove('User_Name');
          this.storage.remove("ACCESS_TOKEN");
          // await this.storage.remove("EXPIRES_IN");
          // this.authSubject.next(false);
        }
      })
    );
  }

  isLoggedIn() {
    return this.authSubject.asObservable();
  }
}
