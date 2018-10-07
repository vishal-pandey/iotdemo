import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(public http:HttpClient) { }

  check(){
  	return this.http.get("https://iot.vishalpandey.xyz/");
  }

  lighton(){
  	return this.http.get("https://iot.vishalpandey.xyz/on.php");
  }
  lightoff(){
  	return this.http.get("https://iot.vishalpandey.xyz/off.php");
  }

}
