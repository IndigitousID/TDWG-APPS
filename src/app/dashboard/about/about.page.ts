import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Router } from  "@angular/router";

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(private _location: Location, private router: Router) { }

  ngOnInit() {
  }

  back() {
    this.router.navigateByUrl('home');
  }
}
