import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { PreferensiResponseData } from '../../auth/auth-response';
import { Storage } from  '@ionic/storage';
import { Router } from  "@angular/router";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  userName : string = "TDWG";
  preferensi : PreferensiResponseData;

  constructor(private  authService:  AuthService, private  storage:  Storage, private  router:  Router) { }
 
  ionViewWillEnter () {
    this.ngOnInit();
  }
  
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
