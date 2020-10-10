import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Storage } from  '@ionic/storage';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.page.html',
  styleUrls: ['./page-one.page.scss'],
})
export class PageOnePage implements OnInit {

  userName : string = "TDWG";
  constructor( private  storage:  Storage, private splashScreen: SplashScreen) { }

  ngOnInit() {
    this.splashScreen.show();
    this.storage.get('User_Name').then((result) => {
      //console.log('My result', result);
      if (result) {
        this.userName = result;
      }
    });


  }

}
