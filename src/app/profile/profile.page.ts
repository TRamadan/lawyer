import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  /************User snavigation functions*******************/
  gotomessagedetails() {
    this.router.navigateByUrl('/messages');
  }

  gotofilesdetails() {
    this.router.navigateByUrl('/files');
  }

  /************************Footer navigation functions************** */
  //here is the function that is used to open the tickets with lawyers 
  openTickets() {
    this.router.navigateByUrl('/tickets');
  }

  gotomessages() {
    this.router.navigateByUrl("/messages")
  }

  gotomenu() {
    this.router.navigateByUrl("/menu")
  }

  //here is the function that is used to open the user profile 
  // openProfile()
  // {
  //   console.log("Function is fired");
  // } 

  //here is the function that is used to open home page 
  openHome() {
    this.router.navigateByUrl('/home');
  }

}
