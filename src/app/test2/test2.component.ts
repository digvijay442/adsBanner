import { Component, OnInit } from '@angular/core';
import {trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  // myGoal: string = "Set Goal"
  private itemCount: number;
  btnText: string = "Add an Item";
  goalText: string  ;
  goals = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.itemCount = this.goals.length;
    if(this.goalText){
      this.goals.push(this.goalText);
    }
    console.log(this.goals);
  }

  addGoal(){
    this.goals.push(this.goalText);
    this.goalText = "";
    this.itemCount = this.goals.length;
    console.log(this.goals)
  }

  navigateToNextPage(){
    this.router.navigate(['/test'])
  }

}
