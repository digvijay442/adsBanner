import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  public selectedValue = [];
  private isSelected: boolean = true;
  activeHours= [];


  selectChange(event){
    this.selectedValue= [];
    for(let i=0; i < event.target.selectedOptions.length; i++){
      this.selectedValue.push(event.target.selectedOptions[i].value)
    }
    this.isSelected = true;
    console.log(this.selectedValue)
  }

  selectAll(){
    this.isSelected=true;    
    this.selectedValue = [];
    this.selectedValue.push(this.activeHours.length);
    console.log(this.selectedValue);
  }
  deSelectAll(){
    this.isSelected=false;
    this.selectedValue = [];
    this.selectedValue.push(this.activeHours.length);
    console.log(this.selectedValue)
  }

  constructor(private data: DataService) {
    this.selectedValue.push(this.activeHours.length);
   }

  ngOnInit() {

    this.data.getHours()
                .subscribe(data => this.activeHours = data)

    console.log("hello");

    this.selectedValue.push(this.activeHours.length);

  }

}
