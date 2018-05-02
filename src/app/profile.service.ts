import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ProfileService {

  private username:string;
  private clientid = '035d36eff237eb5bf8a9';
  private clientsecret = '2321027e12d9aaf7740d7917b7e066b68c76ef34';

  constructor(private http:Http) { 
    console.log("Service in now ready!");
    this.username = 'Brayonski';
  }

  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  .map(res => res.json());
  }

  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos" + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  .map(res => res.json());
  }

  updateProfile(username:string){
    this.username = username;
  }

}
