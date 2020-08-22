import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { MostshareenService } from 'src/services/mostshareen/mostshareen.service';
import { LoadingController } from "@ionic/angular";

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  details = [];

  constructor(public loadingCtrl: LoadingController, public mostsharservice: MostshareenService, public navCtrl: NavController, public router: Router) { }

  ngOnInit() {
    this.GetConsulatorDetails();
  }


  GetConsulatorDetails() {
    this.loadingCtrl.create().then((loadingElement) => {
      loadingElement.present();
    });
    this.mostsharservice.GetSpecificConsulatorData().subscribe(data => {
      console.log(data);
      this.details = data;
      this.loadingCtrl.dismiss();
      console.log(this.details)
    })
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

  goback() {
    this.navCtrl.navigateRoot("/mostshareen")
  }

  gotomessages() {
    this.router.navigateByUrl("/messages")
  }

  gotomenu() {
    this.router.navigateByUrl("/menu")
  }


}
