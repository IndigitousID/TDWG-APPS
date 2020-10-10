import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Storage } from  '@ionic/storage';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  userName : string = "TDWG";
  preferensi : array = [];

  constructor(private  authService:  AuthService, private  storage:  Storage) { }

  ngOnInit() {
	  this.storage.get('User_Name').then((result) => {
      if (result) {
        this.userName = result;
      }
    });
    this.authService.preferensi().subscribe((res)=>{
       this.preferensi = res.data.data;
    });
  }
}
