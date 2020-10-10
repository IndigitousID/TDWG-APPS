import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Storage } from  '@ionic/storage';
import { Router } from '@angular/router';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.page.html',
  styleUrls: ['./page-one.page.scss'],
})
export class PageOnePage implements OnInit {

  userName : string = "Sobat TDWG";
  loggedIn : boolean =false;
  constructor( private  storage:  Storage, private splashScreen: SplashScreen, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.splashScreen.show();
    this.storage.get('User_Name').then((result) => {
      //console.log('My result', result);
      if (result) {
        this.loggedIn = true;
        this.userName = result;
      }
    });


  }
  aboutUs() {
    this.router.navigateByUrl('about');
  }
  isLoggedIn() {
    return this.loggedIn;
  }

  logoutNow() {
    this.loggedIn = false;
    this.authService.logout();
  }

  loginNow() {
    this.router.navigateByUrl("login")
  }

  

}
