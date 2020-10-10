import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Storage } from  '@ionic/storage';
import { Router } from  "@angular/router";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  userName : string = "TDWG";
  preferensi : Array<string> = [];

  constructor(private  authService:  AuthService, private  storage:  Storage, private  router:  Router) { }

  ngOnInit() {
	  this.storage.get('User_Name').then((result) => {
      if (result) {
        this.userName = result;
      }
    });
    this.authService.preferensi().subscribe((res)=>{
      if(res.data) this.preferensi = res.data.data;
    });
  }

  tambah(){
    this.router.navigateByUrl('settings-add');
  }

  hapus(id){
    this.authService.hapusPreferensi(id).subscribe((res)=>{
      this.ngOnInit();
    });
  }

  back(){
    this.router.navigateByUrl('home');
  }
}
