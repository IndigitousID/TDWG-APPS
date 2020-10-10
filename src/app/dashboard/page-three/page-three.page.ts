import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.page.html',
  styleUrls: ['./page-three.page.scss'],
})
export class PageThreePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  kunjungiLink(url) {
    window.open(url, "_blank");
  }
  bagikan() {
    alert ("Terima kasih anda telah berkat bagi mereka hari ini");
  }
}
