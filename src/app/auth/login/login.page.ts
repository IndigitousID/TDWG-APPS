import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from '../auth.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  dev_name : string = "iphone";
  constructor(private  authService:  AuthService, private  router:  Router, public loadingController: LoadingController) { }

  ngOnInit() {
  }

  async login(form){
    await this.authService.login(form.value).subscribe((res)=>{
      console.log('Halo, ' + res.data.user.name);
    });

    const loading = await this.loadingController.create({
      spinner: null,
      duration: 1000,
      message: 'Mengecek akun Anda...',
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: true
    });
    loading.present();

    setTimeout(() => {
      this.router.navigateByUrl('home');
    }, 1000); 
  }

  back(){
    this.router.navigateByUrl('home');
  }
}
