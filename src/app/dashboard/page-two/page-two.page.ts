import { Router } from '@angular/router';
import { AuthService } from './../../auth/auth.service';
import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.page.html',
  styleUrls: ['./page-two.page.scss'],
})
export class PageTwoPage implements OnInit {
  userName : string = "Sobat TDWG";

  constructor(private  storage:  Storage,  private authService: AuthService, private router: Router) { }


  ngOnInit() {
    this.storage.get('User_Name').then((result) => {
      //console.log('My result', result);
      if (result) {

        this.userName = result;
      }
    });

  }


  aboutUs() {
    this.router.navigateByUrl('about');
  }
  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  logoutNow() {
  
    this.authService.logout();
  }

  loginNow() {
    this.router.navigateByUrl("login")
  }

  

}
