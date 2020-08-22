import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CourtsService } from "../../services/courts/courts.service";
import { HttpClient } from "@angular/common/http";
import * as $ from 'jquery';
import { LoadingController } from "@ionic/angular";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public apiurl = "http://al-fayroz.com/lawer/api/";
  CourtsArray: any = [];

  searchTerm = '';

  FilteredArray: any = [];

  //here is the id of the selected court 
  courtid: any;

  constructor(public loadingCtrl: LoadingController, public http: HttpClient, public courtsservices: CourtsService, public router: Router) {
    console.log("hello , from home page");
    // this.getallcourts()
  }

  ionViewDidEnter() {
    this.getallcourts();

  }
  //here is the function needed to fill the home page with the needed services 
  getallcourts() {
    // this.loadingCtrl.create().then((loadingElement) => {
    //   loadingElement.present();
    // });
    this.courtsservices.GetAllCourts().subscribe(data => {

      // alert("Done")
      console.log(data);
      if (data == null || data == undefined) {
        alert("لا يوجد بيانات برجاء المحاولة مرة أخرى")
      }
      this.CourtsArray = data;
      console.log(this.FilteredArray);
      // this.loadingCtrl.dismiss();
      console.log(this.CourtsArray);
    }, error => {
      console.log(error);
    })
  }
  /************************Footer navigation functions************** */
  //here is the function that is used to open the tickets with lawyers 
  openTickets() {
    this.router.navigateByUrl('/tickets');
  }

  //here is the function that is used to open the user profile 
  openProfile() {
    this.router.navigateByUrl('/profile');
  }

  //here is the function that is used to open home page 
  gotomessages() {
    this.router.navigateByUrl('/messages');
  }

  gotomenu() {
    this.router.navigateByUrl('/menu')
  }

  gotomostshareen() {
    this.router.navigateByUrl("/mostshareen")
  }

  gotoaksam(id: any, name: any) {
    this.router.navigateByUrl("/aksam?id=" + id);
    //3mlt instance mn el service w sawet el id bl id ele fl service
    this.courtsservices.id = id;
    this.courtsservices.name = name;
    console.log(this.courtsservices.id);
    console.log(this.courtsservices.name);
  }

}
