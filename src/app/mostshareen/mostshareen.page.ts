import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { MostshareenService } from 'src/services/mostshareen/mostshareen.service';
import { LoadingController } from "@ionic/angular";

@Component({
  selector: 'app-mostshareen',
  templateUrl: './mostshareen.page.html',
  styleUrls: ['./mostshareen.page.scss'],
})
export class MostshareenPage implements OnInit {
  MostshareenArray: any = [];

  constructor(public loadingCtrl: LoadingController, public mostsharservice: MostshareenService, public navCtrl: NavController, public router: Router) { }

  ngOnInit() {
    this.GetAllconsulators();
  }

  openProfile() {
    this.router.navigateByUrl("/profile")
  }

  openHome() {
    this.router.navigateByUrl("/home")
  }

  openTickets() {
    this.router.navigateByUrl("/tickets")
  }

  gotomessages() {
    this.router.navigateByUrl("/messages")
  }

  gotomenu() {
    this.router.navigateByUrl("/menu");
  }

  goback() {
    this.navCtrl.navigateRoot("/home")
  }

  gotodetails(id: any) {
    this.mostsharservice.id = id;
    console.log(this.mostsharservice.id);
    this.router.navigateByUrl("/details?id=" + id)
  }

  GetAllconsulators() {
    this.loadingCtrl.create().then((loadingElement) => {
      loadingElement.present();
    });
    this.mostsharservice.GetAllConsulators().subscribe(data => {
      console.log(data);
      if (data == undefined || data == null) {
        alert("there is no data try again later")
      }
      else {
        console.log(data);
        this.MostshareenArray = data;
        this.loadingCtrl.dismiss();
      }
    })
  }



}
