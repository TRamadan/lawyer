import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  Messages: [];
  ReadyMessages: boolean = false;
  constructor(public loadingCtrl: LoadingController, public toastCtrl: ToastController, public user_service: UserService, public router: Router) { }

  ngOnInit() {
    this.GetAllMessagesFromAdmin();
  }
  openProfile() {
    this.router.navigateByUrl("/profile")
  }
  openHome() {
    this.router.navigateByUrl("/home");
  }
  openTickets() {
    this.router.navigateByUrl("/tickets");
  }


  GetAllMessagesFromAdmin() {
    console.log(this.user_service.id);
    this.loadingCtrl.create().then((loadingElement) => {
      loadingElement.present();
    });
    this.user_service.GetAllMessages().subscribe(data => {
      console.log(data);
      this.Messages = data;
      this.ReadyMessages = true;
      this.loadingCtrl.dismiss();
      console.log(this.Messages);
      if (this.Messages.length == 0) {
        this.EmptyMessages();
        this.ReadyMessages = false;
        this.loadingCtrl.dismiss();
      }
    })
  }



  async EmptyMessages() {
    const toast = await this.toastCtrl.create({
      message: 'لا يوجد رسائل  لآن',
      duration: 3000,
      position: 'middle',
      color: 'dark'
    });
    toast.present();
  }


}
