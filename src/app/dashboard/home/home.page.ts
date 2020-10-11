import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { ResourceResponseData, BerandaResponseData } from '../../auth/auth-response';
import { Storage } from  '@ionic/storage';
import { Router } from  "@angular/router";
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class Home implements OnInit {

  userName : string = "TDWG";
  beranda : BerandaResponseData;
  notifikasi : ResourceResponseData;
  userLogged : boolean = false;

  constructor(private  authService:  AuthService, private  storage:  Storage, private  router:  Router, public loadingController: LoadingController) { }
 
  ionViewWillEnter () {
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

    this.authService.beranda().subscribe((res)=>{
       this.beranda = res.data;
    });
  }
 
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
        this.notifikasi = null;
      }
    });

    this.authService.beranda().subscribe((res)=>{
       this.beranda = res.data;
    });
  }

  daftar(){
    this.router.navigateByUrl('register');
  }

  login(){
    this.router.navigateByUrl('login');
  }

  async logout(){
    await this.authService.logout().subscribe((res)=>{
      console.log('Bye');
    });

    const loading = await this.loadingController.create({
      spinner: null,
      duration: 1000,
      message: 'Keluar dari akun Anda...',
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: true
    });
    loading.present();

    setTimeout(() => {
      this.ngOnInit();
    }, 1000); 
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

  tentang(){
    this.router.navigateByUrl('about');
  }
}
