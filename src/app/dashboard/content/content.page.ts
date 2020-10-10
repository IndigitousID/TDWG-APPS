import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { ResourceResponseData } from '../../auth/auth-response';
import { Storage } from  '@ionic/storage';
import { ActivatedRoute, Router } from  "@angular/router";

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {

  resource : ResourceResponseData;

  constructor(private  authService:  AuthService, private  storage:  Storage, private  router:  Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get( 'contentId' );

    this.authService.detailResource(id).subscribe((res)=>{
      if(res.data) this.resource = res.data;
    });

    console.log('rs', this.resource);
  }

  back(direktori){
    this.router.navigateByUrl('contents/' + direktori);
  }

  bagikan() {
    alert ("Terima kasih anda telah berkat bagi mereka hari ini");
  }
}
