import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { ResourceResponseData } from '../../auth/auth-response';
import { Storage } from  '@ionic/storage';
import { ActivatedRoute, Router } from  "@angular/router";

@Component({
  selector: 'app-contents',
  templateUrl: './contents.page.html',
  styleUrls: ['./contents.page.scss'],
})
export class ContentsPage implements OnInit {

  resources : ResourceResponseData;
  direktori : string;

  constructor(private  authService:  AuthService, private  storage:  Storage, private  router:  Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.direktori = this.route.snapshot.paramMap.get( 'direktori' );

    this.authService.resources(this.direktori).subscribe((res)=>{
      if(res.data) this.resources = res.data.data;
    });
  }

  back(){
    this.router.navigateByUrl('home');
  }
  
  content(item){
    this.router.navigateByUrl(`content/${item.id}`);
  }
}
