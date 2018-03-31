import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-camp-view',
  templateUrl: './camp-view.component.html',
  styleUrls: ['./camp-view.component.css']
})

export class CampViewComponent implements OnInit {

  private hours = ['abc', 'def', 'ghi', 'klm', 'nop'];
  public activeHours = [];

  // @Input() campTitle: String;
  campTitle: String;
  message: string;

// inject the data service using constructor (creating dependency of data service)
  constructor(private route: ActivatedRoute, private data: DataService) { }

  ngOnInit() {
    // this.route
    //   .queryParams
    //   .subscribe(params => {
    //     this.campTitle = params['newCampaign'];
    //   });

      // subscribe the data service   
      this.data.currentCampTitle.subscribe(message => this.message = message);
      // this.activeHours = this.data.getActiveHours();
      // subscribe to the getActivehours and assign the observable to the local vaiable
      this.data.getHours()
                .subscribe(data => this.activeHours = data)

  }

  onChange(hour, event){
    console.log(this.activeHours);

    // if(isChecked){
    //   // this.activeHours = 
    // }

  }

}
