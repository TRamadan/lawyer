import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from "../../services/user/user.service";
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.page.html',
  styleUrls: ['./tickets.page.scss'],
})
export class TicketsPage implements OnInit {

  Tickets: [];
  ReadyTickets: boolean = false;


  constructor(public toastCtrl: ToastController, public user_service: UserService, public router: Router) { }

  ngOnInit() {
    this.GetAllTickets();
    // console.log(this.tickets);
  }

  openProfile() {
    this.router.navigateByUrl('/profile');
  }

  openHome() {
    this.router.navigateByUrl('/home');
  }

  gotomessages() {
    this.router.navigateByUrl("/messages");
  }

  gotomenu() {
    this.router.navigateByUrl("/menu");
  }

  GetAllTickets() {
    console.log(this.user_service.id);
    this.user_service.GetAllTickets().subscribe(data => {
      this.Tickets = data;
      this.ReadyTickets = true;
      if (this.Tickets.length == 0) {
        this.ReadyTickets = false;
        this.EmptyTickets();
      }
      console.log(data);
      console.log(this.Tickets);
    })
  }

  async EmptyTickets() {
    const toast = await this.toastCtrl.create({
      message: 'لا يوجد إستشارات لآن',
      duration: 3000,
      position: 'middle',
      color: 'dark'
    });
    toast.present();
  }



  // openTickets() {
  //   this.router.navigateByUrl('/tickets');
  // }




}
