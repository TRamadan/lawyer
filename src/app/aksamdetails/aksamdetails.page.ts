import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery'
import { CourtsService } from '../../services/courts/courts.service';
import { UserService } from "../../services/user/user.service";
import { HttpClient } from "@angular/common/http";
import { ToastController } from '@ionic/angular';
import { LoadingController } from "@ionic/angular";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-aksamdetails',
  templateUrl: './aksamdetails.page.html',
  styleUrls: ['./aksamdetails.page.scss'],
})
export class AksamdetailsPage implements OnInit {

  rostatFile: any;
  public apiurl = "http://al-fayroz.com/lawer/api/";
  // file = [];
  // results = [];
  public files = new Array()

  //lawsuit needed variables 
  /**
   * 1- court id
   * 2- sub_court id
   * 3- lawsuit_title
   * 4- lawsuit_des
   * 5- files[]
   * 6- phone
   * 7- law_suit id
   * 8- user_id
   */

  public lawsuitform: FormGroup;

  court: any; sub_court: any; lawsuit_title: any; lawsuit_des: any; phone: any; law_suit: any; user_id: any;
  constructor(public fb: FormBuilder, public loadingCtrl: LoadingController, public toastctrl: ToastController, public http: HttpClient, public userservice: UserService, public courts_service: CourtsService, public router: Router) {
    this.court = this.courts_service.id
    console.log(this.court);

    this.sub_court = this.courts_service.subcourt_id
    console.log(this.sub_court);
  }

  ngOnInit() {
    // this.lawsuitform = this.fb.group({
    //   court: ['', Validators.required],
    //   sub_court: ['', Validators.required],
    //   phone: ['', Validators.required],
    //   lawsuit_title: ['', Validators.required],
    // })

    $("#uploadImage").click(function () {
      $("#uploadInput").click();
    })
  }

  gotomenu() {
    this.router.navigateByUrl("/menu")
  }

  gotomessages() {
    this.router.navigateByUrl("/messages")
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
    this.router.navigateByUrl("/aksam")
  }

  send() {
    // this.router.navigateByUrl("/filescode")
  }


  // uploadfiles() {
  //   console.log("function is fired")
  //   if (!this.rostatFile) {
  //     alert("برجاء اختيار الملفات")
  //     return;
  //   }
  //   this.loadingCtrl.create().then((loadingElement) => {
  //     loadingElement.present();
  //   });
  //   const body = new FormData();
  //   body.append('court', this.courts_service.id);
  //   body.append('sub_court', this.courts_service.subcourt_id)
  //   body.append('lawsuit_title', this.lawsuit_title);
  //   body.append('lawsuit_des', this.lawsuit_des);
  //   body.append('phone', this.phone);
  //   body.append('user_id', this.userservice.id);
  //   body.append('file[]', this.rostatFile);

  //   for (var pair of body.entries()) {
  //     console.log(pair[0] + ', ' + pair[1]);
  //   }
  //   const headers = {
  //     'Authorization': "Bearer " + this.userservice.api_token,
  //   };
  //   let config = {
  //     'headers': headers,
  //   };
  //   console.log(headers);
  //   console.log(this.userservice.api_token);
  //   return this.http.post(`${this.apiurl}LawSuit`, body, config).subscribe((data: any) => {
  //     for (var i = 0; i < this.results.length; i++);
  //     {
  //       const filess = this.results[i];
  //       this.file.push(filess);
  //       console.log(filess);
  //       this.file.push(data.path)
  //     }
  //     // console.log(this.file.push(data.path))
  //     console.log(data);
  //     this.Donemessage();
  //     this.loadingCtrl.dismiss();
  //     this.router.navigateByUrl("/home");
  //   });
  // }

  async Donemessage() {
    const toast = await this.toastctrl.create({
      message: 'تم إرسال طلبك سيتم الرد خلال 24 ساعة',
      duration: 3000,
      position: 'middle',
      color: 'dark'
    });
    toast.present();
  }

  async ErrorMessage() {
    console.log('this')
    const toast = await this.toastctrl.create({
      message: 'برجاء اختيار الصور أو الملفات',
      duration: 3000,
      position: 'middle',
      color: 'dark'
    });
    toast.present();
  }

  async ServiceErrorMessage() {
    const toast = await this.toastctrl.create({
      message: 'حدث خطأ , حاول مرة أخري',
      duration: 3000,
      position: 'middle',
      color: 'dark'
    });
    toast.present();
  }

  changeListener(files) {
    this.rostatFile = files.item(0);
    console.log(files);
    // this.uploadfiles();
    // for (let i = 0; i < files.length; i++) {
    //   this.rostatFile = files.item(i);
    //   console.log("adjkajfhjkahfjkahfkjhj", this.rostatFile)
    //   console.log("from line 79", files);
    //   this.uploadfiles();
    // }
  }

  SendFormData() {
    const headers = {
      'Authorization': "Bearer " + this.userservice.api_token,
    };
    let config = {
      'headers': headers,
    };
    let formdata = {
      court: this.courts_service.id,
      sub_court: this.courts_service.subcourt_id,
      user_id: this.userservice.id,
      lawsuit_des: this.lawsuit_des,
      files: this.files // el field dh array 
    }
    // console.log(formdata.files)
    console.log(formdata)
    this.http.post(`${this.apiurl}LawSuit/`, formdata, config).subscribe(data => {
      if (formdata.files.length == 0) {
        this.FormDataErrorMessage()
      }
      else {
        console.log(data);
        this.Donemessage();
      }
    }, error => {
      this.ServiceErrorMessage();
      console.log("error", error);
    }
    )
  }

  uploadfiles() {
    console.log('inside the function')
    if (!this.rostatFile) {
      this.ErrorMessage()
      return;
    }
    this.loadingCtrl.create().then((loadingElement) => {
      loadingElement.present();
    });
    const headers = {
      'Authorization': "Bearer " + this.userservice.api_token,
    };
    let config = {
      'headers': headers,
    };
    console.log(headers);
    console.log(this.userservice.api_token);
    const x = new FormData()
    x.append('file', this.rostatFile, this.rostatFile.name);
    for (var pair of x.entries()) {
      console.log(pair[0] + ', ' + pair[0]);
    }
    this.http.post(`${this.apiurl}LawSuit/Files`, x, config).subscribe((data: any) => {
      this.files.push(data);
      console.log(this.files);
      console.log(this.files.length);
      // console.log(this.files.push(data.path));
      this.loadingCtrl.dismiss()
      this.DoneSendFilesMessage();
    })
  }



  async FormDataErrorMessage() {
    const toast = await this.toastctrl.create({
      message: 'برجاء إختيار الملفات أولاً',
      duration: 3000,
      position: 'middle',
      color: 'dark'
    });
    toast.present();
  }

  async DoneSendFilesMessage() {
    const toast = await this.toastctrl.create({
      message: 'تم إرسال الملفات بنجاح , برجاء ارسال موضوع الدعوة',
      duration: 3000,
      position: 'middle',
      color: 'dark'
    });
    toast.present();
  }



}
