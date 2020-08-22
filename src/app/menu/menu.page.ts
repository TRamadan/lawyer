import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(public navCtrl: NavController, public router: Router) { }

  ngOnInit() {
  }

  gototickets() {
    this.router.navigateByUrl("tickets");
  }

  gotomessages() {
    this.router.navigateByUrl("/messages")
  }

  logout() {
    // console.log("this function is pressed"); 
    window.localStorage.removeItem('userdata');
    this.navCtrl.navigateForward("/loign");

  }

  gotoprofile() {
    this.router.navigateByUrl("/profile")
  }

  gotocontact() {
    this.router.navigateByUrl("/contact")
  }
}
