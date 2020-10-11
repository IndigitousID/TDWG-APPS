import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { ResourceResponseData } from '../../auth/auth-response';
import { Storage } from  '@ionic/storage';
import { ActivatedRoute, Router } from  "@angular/router";
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {

  resource : ResourceResponseData;

  constructor(private  authService:  AuthService, private  storage:  Storage, private  router:  Router, private route: ActivatedRoute, private socialSharing: SocialSharing, private platform: Platform) { }

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
    this.platform.ready().then(() => {
      console.log('konten', this.resource.konten);
      this.socialSharing.share(this.resource.konten, this.resource.judul, null, this.resource.media_url).then(() => {
        console.log('success');
      });
    });
  }
}
