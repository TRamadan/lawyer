import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class CourtsService {
  public apiurl = "http://al-fayroz.com/lawer/api/";

  public id;

  //here is the name of the selected sub court
  public name;

  //here is the id of the subcourt
  public subcourt_id;

  // public CoutrtsArray = [];
  constructor(public userservice: UserService, public http: HttpClient) {
    console.log("hello from courts service");
  }

  //here is the function needed to get the services for the user 
  GetAllCourts(): Observable<any> {
    const headers = {
      'Authorization': "Bearer " + this.userservice.api_token,
    };
    let config = {
      'headers': headers,
    };
    console.log(headers);
    console.log(this.userservice.api_token);
    return this.http.get(`${this.apiurl}courts`, config);
  }

  //here is the function needed to get the sub categories under the courts main category
  //it will take the id of the selected cort 
  GetAllSubCourts(): Observable<any> {
    const headers = {
      'Authorization': "Bearer " + this.userservice.api_token,
    };
    let config = {
      'headers': headers,
    };
    console.log(headers);
    console.log(this.userservice.api_token);
    return this.http.get(`${this.apiurl}SubCourts/` + this.id, config);
  }

  //LawSuit Form 
  SendLawSuit(LawSuitDetails: any): Observable<any> {
    const headers = {
      'Authorization': "Bearer " + this.userservice.api_token,
    };
    let config = {
      'headers': headers,
    };
    console.log(headers);
    console.log(this.userservice.api_token);
    return this.http.post(`${this.apiurl}LawSuit`, LawSuitDetails, config);
  }

}




