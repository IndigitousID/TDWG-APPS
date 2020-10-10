import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Storage } from  '@ionic/storage';
import { Router } from  "@angular/router";
import { ResourcePreference } from  "./../../auth/auth.response";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class Home implements OnInit {

  userName : string = "TDWG";
  direktori : Array<string> = [];
  resource : ResourcePreference = [];
  notifikasi : ResourcePreference = [];
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

    this.authService.notifikasi().subscribe((res)=>{
       if(res.data && this.userLogged) this.notifikasi = res.data;
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
}
