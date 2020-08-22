import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from "../../services/user/user.service";
import { ToastController } from '@ionic/angular';
import { LoadingController } from "@ionic/angular";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  id: any;
  message: any;
  constructor(public loadingCtrl: LoadingController, public toastController: ToastController, public user_service: UserService, public router: Router) { }

  ngOnInit() {
  }

  send() {
    let contactdetails = {
      user_id: this.user_service.id,
      message: this.message
    }
    this.loadingCtrl.create().then((loadingElement) => {
      loadingElement.present();
    });
    console.log(contactdetails.user_id);
    console.log(contactdetails.message);
    this.user_service.ContactUs(contactdetails).subscribe(data => {
      console.log(data);
      this.loadingCtrl.dismiss();
      this.presentToast();
      this.router.navigateByUrl("/home");
    })
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'تم ارسال الرسالة بنجاح.',
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

  gotomenu() {
    this.router.navigateByUrl("/menu")
  }

  gotomessages() {
    this.router.navigateByUrl("/messages")
  }


}
