import { Injectable } from  '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { tap } from  'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';

import { Storage } from  '@ionic/storage';
import { NotifikasiSayaResponse } from './dashboard';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {


  //DASHBOARD_SERVER_ADDRESS:  string  =  'http://127.0.0.1:8000/api';
  DASHBOARD_SERVER_ADDRESS:  string  =  'http://thisdaywithgod.org/index.php/api';
  dbSubject  =  new  BehaviorSubject(false);

  constructor(private  httpClient: HttpClient, private  storage: Storage) { }

  getNotifikasiSaya(header: any): Observable<NotifikasiSayaResponse> {
    return this.httpClient.get<NotifikasiSayaResponse>(`${this.DASHBOARD_SERVER_ADDRESS}/saya`, ).pipe(
      tap(async (res:  NotifikasiSayaResponse) => {
        if (res.status) {
          await this.storage.set('Notifica', res.data);
          this.dbSubject.next(true);
        }
      })
    );
  }

  // getListDirectory

  // login(user: User): Observable<AuthLoginResponse> {
  //   return this.httpClient.post(`${this.AUTH_SERVER_ADDRESS}/login`, user).pipe(
  //     tap(async (res: AuthLoginResponse) => {

  //       if (res.status) {
  //         console.log("userName" , res.data.user.name);
  //         await this.storage.set('User_Name', res.data.user.name);
  //         await this.storage.set('ACCESS_TOKEN', res.data.user.api_token);
  //         //await this.storage.set("ACCESS_TOKEN", res.user.access_token);
  //        // await this.storage.set("EXPIRES_IN", res.user.expires_in);
  //         this.authSubject.next(true);
  //       }
  //     })
  //   );
  // }


}
