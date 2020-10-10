import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  dev_name : string = "iphone";
  constructor(private  authService:  AuthService, private  router:  Router) { }

  ngOnInit() {
  }

  login(form){
    this.authService.login(form.value).subscribe((res)=>{
      this.router.navigateByUrl('settings');
    });
  }

  back(){
    this.router.navigateByUrl('home');
  }
}
