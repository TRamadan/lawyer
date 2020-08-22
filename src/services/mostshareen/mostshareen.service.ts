import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class MostshareenService {
  public apiurl = "http://al-fayroz.com/lawer/api/";

  //here is the id of the selected consultant
  public id;

  constructor(public userservice: UserService, public http: HttpClient) {
    console.log("hello from mostshareen provider");
  }

  //here is the function needed to get all consulators
  GetAllConsulators(): Observable<any> {
    const headers = {
      'Authorization': "Bearer " + this.userservice.api_token,
    };
    let config = {
      'headers': headers,
    };
    console.log(this.userservice.api_token);
    console.log(headers);
    return this.http.get(`${this.apiurl}counselors`, config);
  }

  //here is a function  needed to get the full information for a specific mostashar 
  GetSpecificConsulatorData(): Observable<any> {
    const headers = {
      'Authorization': "Bearer " + this.userservice.api_token,
    };
    let config = {
      'headers': headers,
    };
    console.log(this.userservice.api_token);
    console.log(headers);
    return this.http.get(`${this.apiurl}counselors/` + this.id, config);
  }

}
