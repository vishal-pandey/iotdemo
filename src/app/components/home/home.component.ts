import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import {interval} from "rxjs/internal/observable/interval";
import {startWith, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private mS:MainService) { }

  status = false;

  ngOnInit() {

  	interval(500).subscribe(()=>{
  		// console.log("Hllo");
	  	this.mS.check().subscribe((r:any)=>{
	  		console.log(r);
	  		if (r=='1') {
	  			this.status = true;
	  		}
	  		if (r=='0') {
	  			this.status = false;
	  		}
	  	})
  	})
 

  }

}
