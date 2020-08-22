import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public apiurl = "http://al-fayroz.com/lawer/api/";

  //here is the user data
  id: any;
  name: any;
  phone: any;
  firstname: any;
  lastname: any;
  password: any;
  gender: any;
  email: any;
  api_token: any;
  accessToken: any;



  constructor(public http: HttpClient) {
    console.log("hello , from user service")
  }

  //here is the login function for the user
  Login(userlogin: any): Observable<any> {
    return this.http.post(`${this.apiurl}login`, userlogin);
  }

  //here is the registeration function for the user 
  Registeration(user_register): Observable<any> {
    return this.http.post(`${this.apiurl}register`, user_register)
  }

  //here is a function needed to contact the admin 
  ContactUs(contactdetails: any): Observable<any> {
    const headers = {
      'Authorization': "Bearer " + this.api_token,
    };
    let config = {
      'headers': headers,
    };
    console.log(this.api_token);
    console.log(headers);
    return this.http.post(`${this.apiurl}contacts`, contactdetails, config);
  }

  //here is the function needed to get all files to the user 
  // el function ele htrag3 el files kolha (sewar , pdfs , txt , ... ) ele el user b3tha ll admin  
  // (f saf7t el files)
  GetAllFiles(): Observable<any> {
    const headers = {
      'Authorization': "Bearer " + this.api_token,
    };
    let config = {
      'headers': headers,
    };
    console.log(this.api_token);
    console.log(headers);
    return this.http.get(`${this.apiurl}LawSuit/Files/` + this.id, config);
  }

  //here is the function needed to get all the tickets for the user 
  // el function d hya ele btgyb el 7gozat kolha ll user (f saf7t el tickets)
  GetAllTickets(): Observable<any> {
    const headers = {
      'Authorization': "Bearer " + this.api_token,
    };
    let config = {
      'headers': headers,
    };
    console.log(this.api_token);
    console.log(headers);
    return this.http.get(`${this.apiurl}ticket/` + this.id, config);
  }

  //here is the function needed to get all the messages from admin to the user
  // el function d ele htrag3 el rsayel kolha ele el admin b3tha ll user f saf7t el messages
  GetAllMessages(): Observable<any> {
    const headers = {
      'Authorization': "Bearer " + this.api_token,
    };
    let config = {
      'headers': headers,
    };
    console.log(this.api_token);
    console.log(headers);
    return this.http.get(`${this.apiurl}message/` + this.id, config);
  }

  //here is a function needed to send the fcm token to the backend 
  SendFCMtoken(x: any): Observable<any> {
    let user = {
      fcm_token: x
    }
    const headers = {
      'Authorization': "Bearer " + this.api_token,
    };
    let config = {
      'headers': headers,
    };
    console.log(this.api_token);
    console.log(headers);
    return this.http.post(`${this.apiurl}login/fcm`, user, config);
  }


}
