import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import {interval} from "rxjs/internal/observable/interval";
import {startWith, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  constructor(private mS:MainService) { }

  status = null;

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

  lighton(){
  	this.mS.lighton().subscribe((r:any)=>{
  		console.log(r);
  	})
  }

  lightoff(){
  	this.mS.lightoff().subscribe((r:any)=>{
  		console.log(r);
  	})
  }

}
