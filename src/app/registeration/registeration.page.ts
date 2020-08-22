import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { Router } from '@angular/router';
import { UserService } from "../../services/user/user.service";
import { ToastController, AlertController } from '@ionic/angular';
import { LoadingController } from "@ionic/angular";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.page.html',
  styleUrls: ['./registeration.page.scss'],
})
export class RegisterationPage implements OnInit {

  public apiurl = "http://al-fayroz.com/lawer/api/";

  //user data variables
  fname: string; lname: string; email: string; password: string; phone: string;

  //here is the form group name 
  registerationfrom: FormGroup;

  public method: any = "default";

  public gmailuser: any = {};

  constructor(public alertController: AlertController, public http: HttpClient, public googleplus: GooglePlus, public formbuilder: FormBuilder, public loadingCtrl: LoadingController, public toastCtrl: ToastController, public userservice: UserService, public router: Router) { }

  ngOnInit() {
    // this.registerationfrom = this.formbuilder.group({
    //   fname: ['', Validators.required],
    //   lname: ['', Validators.required],
    //   email: ['', Validators.required],
    //   password: ['', Validators.required],
    //   phone: ['', Validators.required]
    // })
  }

  animateTrianles() {
    $(".triangle").animate({ right: '-150px' }, 500, function () {
      $(".triangle2").animate({ right: '-250px' }, 500);
    });
    $(".k").animate({ right: '-100%' }, 500);
    $(".k1").animate({ left: '0px' }, 500);
    this.OnRegister();
  }

  gotowelcome() {
    this.router.navigateByUrl("/home");
  }

  //here is the function that handels registeration 
  OnRegister() {
    this.method = "default"
    let user_registerdata = {
      fname: this.fname,
      lname: this.fname,
      email: this.email,
      password: this.password,
      phone: this.phone
    }
    this.loadingCtrl.create().then((loadingElement) => {
      loadingElement.present();
    });
    this.userservice.Registeration(user_registerdata).subscribe(data => {
      console.log(data);
      this.DoneRegisteration();
      this.loadingCtrl.dismiss();
      this.router.navigateByUrl("/loign")
    }, error => {
      let errors = error.error.errors;
      let errorMessage = "";
      for (let key in errors) {
        let text = errors[key][0];
        errorMessage += text + '<br>'
      }
      this.loadingCtrl.dismiss();
      this.presentAlert(errorMessage, "هناك خطأ")
      // alert("firstname required , lname required , password required , phone required , email required")

    })
  }

  async presentAlert(x: string, y: string) {
    const alert = await this.alertController.create({
      header: y,
      subHeader: x,
      buttons: ['إلغاء', 'تم']
    });

    await alert.present();
  }


  //here is a function that present a successfull registeration 
  async DoneRegisteration() {
    const toast = await this.toastCtrl.create({
      message: 'تم التسجيل بنجاح , برجاء تسجيل الدخول',
      duration: 2000,
      position: 'middle',
      color: 'dark'
    });
    toast.present();
  }

  // gmailregister() {
  //   this.method = 'google';
  //   this.googleplus.login({}).then(res => {
  //     this.gmailuser = res
  //     this.FillRegisterFormVariables();
  //     alert(JSON.stringify(this.gmailuser))
  //   }).catch(err => console.error(err));
  // }

  // GmailRegisteration() {
  //   let user = {
  //     email: this.gmailuser.email,
  //     fname: this.gmailuser.givenName,
  //     lname: this.gmailuser.familyName,
  //     password: this.password,
  //     phone: this.phone,
  //     accessToken: this.gmailuser.accessToken,
  //   }
  //   alert(JSON.stringify(user.accessToken));
  //   this.http.post(`${this.apiurl}auth/google/callback`, user).subscribe(data => {
  //     // alert("from line 107" + " " + JSON.stringify(user.accessToken))
  //     // alert(JSON.stringify(data));
  //     // alert("doneeeeeeeeeeeeeeeee")
  //     console.log('this');
  //     this.DoneRegisteration()
  //   }, error => {
  //     alert("bazeeeet")
  //     alert(JSON.stringify(error))
  //   })
  // }


  // Register() {
  //   if (this.method == 'default') {
  //     this.animateTrianles();
  //   }
  //   else {
  //     this.GmailRegisteration();
  //   }
  // }
  // FillRegisterFormVariables() {
  //   this.fname = this.gmailuser.givenName
  //   this.lname = this.gmailuser.familyName
  //   this.email = this.gmailuser.email
  // }
}
