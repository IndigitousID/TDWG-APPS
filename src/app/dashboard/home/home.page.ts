import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { ResourceResponseData } from '../../auth/auth-response';
import { Storage } from  '@ionic/storage';
import { Router } from  "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class Home implements OnInit {

  userName : string = "TDWG";
  direktori : Array<string> = [];
  resource : ResourceResponseData;
  notifikasi : ResourceResponseData;
  userLogged : boolean = false;

  constructor(private  authService:  AuthService, private  storage:  Storage, private  router:  Router) { }

  ngOnInit() {
    this.storage.get('User_Name').then((result) => {
      if (result) {
        this.userName = result;
      }
    });

    this.storage.get('ACCESS_TOKEN').then((result) => {
      if (result) {
        this.userLogged = true;

        this.authService.notifikasi().subscribe((res)=>{
          if(res.data && this.userLogged) {
            this.notifikasi = res.data;
          }
          else { this.notifikasi = null; }
        });

      }else{
        this.userLogged = false;
      }
    });

    this.authService.direktori().subscribe((res)=>{
       this.direktori = res.data;
    });
    
    this.authService.resource(4).subscribe((res)=>{
       if(res.data) this.resource = res.data.data;
    });
  }

  daftar(){
    this.router.navigateByUrl('register');
  }

  login(){
    this.router.navigateByUrl('login');
  }

  logout(){
    this.authService.logout().subscribe((res)=>{
      this.ngOnInit();
    });
  }

  pengaturan(){
    this.router.navigateByUrl('settings');
  }

  baca(item){
    this.authService.bacaNotifikasi({jam: item.jam, direktori: item.direktori}).subscribe((res)=>{
      this.router.navigateByUrl(`content/${item.id}`);
    });
  }

  content(item){
    this.router.navigateByUrl(`content/${item.id}`);
  }

  contents(direktori){
    this.router.navigateByUrl(`contents/${direktori}`);
  }
}
