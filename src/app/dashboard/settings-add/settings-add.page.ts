import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Storage } from  '@ionic/storage';
import { Router } from  "@angular/router";

@Component({
  selector: 'app-settings',
  templateUrl: './settings-add.page.html',
  styleUrls: ['./settings-add.page.scss'],
})
export class SettingsAddPage implements OnInit {

  userName : string = "TDWG";
  direktori : array = [];

  constructor(private  authService:  AuthService, private  storage:  Storage, private  router:  Router) { }

  ngOnInit() {
	  this.storage.get('User_Name').then((result) => {
      if (result) {
        this.userName = result;
      }
    });
    this.authService.direktori().subscribe((res)=>{
       this.direktori = res.data;
    });
  }

  simpan(form){
    this.authService.simpanPreferensi(form.value).subscribe((res)=>{
      this.router.navigateByUrl('settings');
    });
  }

  back(){
    this.router.navigateByUrl('settings');
  }
}
