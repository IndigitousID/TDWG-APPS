import { Storage } from '@ionic/storage';
import { AuthService } from './../../auth/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.page.html',
  styleUrls: ['./page-three.page.scss'],
})
export class PageThreePage implements OnInit {

  userName: string = "Sobat TDWG";
  constructor(private  storage:  Storage, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.storage.get('User_Name').then((result) => {
      //console.log('My result', result);
      if (result) {

        this.userName = result;
      }
    });

  }

  kunjungiLink(url) {
    window.open(url, "_blank");
  }
  bagikan() {
    alert ("Terima kasih anda telah berkat bagi mereka hari ini");
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
    this.router.navigateByUrl("login");
  }

  
}
