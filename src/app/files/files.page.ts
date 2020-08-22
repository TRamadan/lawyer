
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { UserService } from "../../services/user/user.service";

@Component({
  selector: 'app-files',
  templateUrl: './files.page.html',
  styleUrls: ['./files.page.scss'],
})
export class FilesPage implements OnInit {

  Files: boolean = false;
  FilesArray = [];
  files: any;

  constructor(public toastCtrl: ToastController, public user_service: UserService, public navCtrl: NavController, public router: Router) { }

  ngOnInit() {
    this.GetAllFiles();
  }

  openProfile() {
    this.router.navigateByUrl('/profile');
  }

  openHome() {
    this.router.navigateByUrl('/home');
  }

  openTickets() {
    this.router.navigateByUrl("/tickets")
  }

  goback() {
    this.navCtrl.navigateRoot("/profile")
  }

  gotomessages() {
    this.router.navigateByUrl("/messages");
  }

  GetAllFiles() {
    this.user_service.GetAllFiles().subscribe(data => {
      console.log(data);
      this.FilesArray = data;
      // this.files = this.FilesArray['file']
      console.log(this.files)
      console.log(this.FilesArray['file'])
      this.Files = true;
      console.log(this.FilesArray);
      if (this.FilesArray.length == 0) {
        this.EmptyFiles();
        this.Files = false;
      }
    })
  }

  gotomenu() {
    this.router.navigateByUrl("/menu")
  }

  async EmptyFiles() {
    const toast = await this.toastCtrl.create({
      message: 'لا يوجد ملفات مرفوعة  لآن',
      duration: 3000,
      position: 'middle',
      color: 'dark'
    });
    toast.present();
  }


}
