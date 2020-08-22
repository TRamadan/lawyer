import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CourtsService } from 'src/services/courts/courts.service';
import { LoadingController } from "@ionic/angular";

@Component({
  selector: 'app-aksam',
  templateUrl: './aksam.page.html',
  styleUrls: ['./aksam.page.scss'],
})
export class AksamPage implements OnInit {


  public SubCourts: any = [];
  sub_court_id: any;

  public ReadyCats: boolean = false;

  constructor(public loadingCtrl: LoadingController, public courts_service: CourtsService, public navtCtrl: NavController, public router: Router) { }

  ngOnInit() {
    this.getallsubcourts();
  }

  getallsubcourts() {
    this.loadingCtrl.create().then((loadingElement) => {
      loadingElement.present();
    });
    this.courts_service.GetAllSubCourts().subscribe(data => {
      console.log(data);
      this.SubCourts = data;
      this.loadingCtrl.dismiss();
      this.ReadyCats = true;
      this.sub_court_id = this.SubCourts.subcourt_id;
      if (this.SubCourts.length == 0) {
        this.ReadyCats = false;
      }
      console.log(this.SubCourts);
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

  gotomessages() {
    this.router.navigateByUrl("/messages")
  }

  gotomenu() {
    this.router.navigateByUrl("/menu")
  }

  goback() {
    this.navtCtrl.navigateRoot("/home")
  }

  gotodetails(name: any, subcourt_id: any) {
    this.courts_service.subcourt_id = subcourt_id;
    console.log(this.courts_service.subcourt_id);
    this.courts_service.name = name;
    console.log(this.courts_service.name);
    this.router.navigateByUrl("/aksamdetails")
  }


}
