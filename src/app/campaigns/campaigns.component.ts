import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.css']
})
export class CampaignsComponent implements OnInit {

  createCampBtn: Boolean = true;
  newCampInput: string = '';  
  message: string;

  onCampInput(event: any){
    this.createCampBtn = false;
  }

  campView(){
    this.data.changeMessage(this.newCampInput);
    // this.router.navigate(['camp-view'], { queryParams: { newCampaign: this.newCampInput } });
    this.router.navigate(['camp-view']);
  }

  newMessage(){
    this.data.changeMessage("Hello from sibling");
  }

// inject data service
  constructor( private router: Router, private data: DataService ) { }

  ngOnInit() {
    // subscribe the data service
    this.data.currentCampTitle.subscribe(message => this.message = message);
  }

}
