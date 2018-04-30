import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ProfileService {

  private username:string;
  // private clientid = '';
  // private clientsecret = '';

  constructor(private http:Http) { 
    console.log("Service in now ready!");
    this.username = 'Brayonski';
  }

  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username)
  .map(res => res.json());
  }

  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos")
  .map(res => res.json());
  }

  updateProfile(username:string){
    this.username = username;
  }

}
