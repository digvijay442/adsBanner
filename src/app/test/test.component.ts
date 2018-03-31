import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  private langs: string[]= ['English', 'Hindi', 'French', 'German'];
  myform: FormGroup;
  setBgColor: boolean = true;

  onChange(event){
    console.log(event);
  }

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(res => console.log(res));
   }

  ngOnInit() {
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl()
      }),
      email: new FormControl(),
      password: new FormControl(),
      language: new FormControl()
    });

    console.log(this.myform);

  }

}
