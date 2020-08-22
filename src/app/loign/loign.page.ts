import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { Router } from '@angular/router';
import { UserService } from "../../services/user/user.service";
import { LoadingController } from "@ionic/angular";
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-loign',
  templateUrl: './loign.page.html',
  styleUrls: ['./loign.page.scss'],
})
export class LoignPage implements OnInit {
  public apiurl = "http://al-fayroz.com/lawer/api/";

  //user login data 
  email: any;
  password: any;

  //here is the formgroup 
  public loginform: FormGroup;

  //here is a variable used to check if user is loggined or not 
  public isLoggedIn: boolean = false;

  //here is the variable for firebase device token
  fcm_token: any;

  gmailuserresponse: any = {};

  constructor(public http: HttpClient, public toastCtrl: ToastController, public firebaseX: FirebaseX, public googleplus: GooglePlus, public loadingCtrl: LoadingController, public userservice: UserService, public router: Router) { }

  ngOnInit() {
    // to load data from local storage
    if (window.localStorage.getItem('userdata') != null || window.localStorage.getItem('userdata') != undefined) {
      let data = JSON.parse(window.localStorage.getItem('userdata'));
      this.setdata(data);
      this.router.navigateByUrl("/home");
    }
    // else if (window.localStorage.getItem('usergmaildata') != null || window.localStorage.getItem('usergmaildata') != undefined) {
    //   let data = JSON.parse(window.localStorage.getItem('usergmaildata'));
    //   this.setdata2(data);
    //   this.router.navigateByUrl("/home");
    // }
  }

  animateTrianles() {
    $(".triangle").animate({ right: '-150px' }, 500, function () {
      $(".triangle2").animate({ right: '-250px' }, 500);
    });
    $(".k").animate({ right: '-100%' }, 500);
    $(".k1").animate({ left: '0px' }, 500);
    this.OnLogin();
  }

  OnLogin() {
    const user_login_data = {
      email: this.email,
      password: this.password,
    }
    this.loadingCtrl.create().then((loadingElement) => {
      loadingElement.present();
    });
    this.userservice.Login(user_login_data).subscribe(data => {
      //get the token
      this.firebaseX.getToken().then(token => {
        this.userservice.api_token = data.api_token;
        this.userservice.id = data.id;
        this.fcm_token = token
        // alert(this.fcm_token)
        this.userservice.SendFCMtoken(this.fcm_token).subscribe(Data => {
          console.log(Data);
          // alert("this request is doneeeeee");
          // alert(JSON.stringify(Data));
        }, error => {
          alert("error" + " " + JSON.stringify(error));
        })
      })
      console.log(data);
      //store user in the storage 
      window.localStorage.setItem("userdata", JSON.stringify(data));
      this.setdata(data);
      //end for storage   
      this.loadingCtrl.dismiss();
      this.router.navigateByUrl("/home")
    }, error => {
      if (error.status === 422) {
        this.loadingCtrl.dismiss()
        this.EmptyMessages()
      }

      else if (error.status === 404) {
        this.loadingCtrl.dismiss()
        this.ErrorMessages()
      }
    })

  }

  gotoregisteration() {
    this.router.navigateByUrl("/registeration")
  }

  setdata(x: any) {
    this.userservice.api_token = x.api_token;
    this.userservice.id = x.id;
    this.userservice.email = x.email;
    this.userservice.password = x.password;
    this.userservice.firstname = x.firstname;
    this.userservice.lastname = x.lastname;
    this.userservice.phone = x.phone;
  }

  //here is a function needed to set the data when used gmail
  // setdata2(x: any) {
  //   this.userservice.accessToken = x.accessToken;
  //   this.userservice.email = this.gmailuserresponse.email;
  //   this.userservice.password = x.password;
  //   this.userservice.firstname = this.gmailuserresponse.givenName;
  //   this.userservice.lastname = this.gmailuserresponse.familyName;
  //   this.userservice.phone = x.phone;
  // }

  // //here will be the function for the gmail login
  // gmaillogin() {
  //   this.googleplus.login({}).then(res => {
  //     this.gmailuserresponse = res
  //     alert(JSON.stringify(this.gmailuserresponse));
  //     this.Filloginformvariables();
  //   })
  //     .catch(err => console.error(err));
  // }

  // Filloginformvariables() {
  //   this.email = this.gmailuserresponse.email;
  // }

  async EmptyMessages() {
    const toast = await this.toastCtrl.create({
      message: 'الأيميل أو كلمة المرور فارغين , حاول مرة أخري',
      duration: 3000,
      position: 'middle',
      color: 'dark'
    });
    toast.present();
  }

  async ErrorMessages() {
    const toast = await this.toastCtrl.create({
      message: 'يوجد خطأ في كلمة المرور أوالأيميل , حاول مرة أخري',
      duration: 3000,
      position: 'middle',
      color: 'dark'
    });
    toast.present();
  }

  // Gmaillogin() {
  //   let googleuser = {
  //     email: this.gmailuserresponse.email,
  //     accessToken: this.gmailuserresponse.accessToken
  //   }
  //   alert(JSON.stringify(googleuser));
  //   this.http.post(`${this.apiurl}auth/google/callback`, googleuser).subscribe((data2) => {
  //     alert(JSON.stringify(data2));
  //     alert("doneeeeeeeeeeeeeeeee")
  //     //store user in the storage 
  //     window.localStorage.setItem("usergmaildata", JSON.stringify(data2));
  //     this.setdata2(data2);
  //     //end for storage  
  //   }, error => {
  //     alert("bazeeeet")
  //     alert(JSON.stringify(error))
  //   })
  // }


}
