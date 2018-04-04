import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { DataService } from '../data.service';
import { IVideoTest } from '../intVedioTest';
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
// import { Http, Response } from '@angular/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http'; 
//import the do function to be used with the http library.
import "rxjs/add/operator/do";
//import the map function to be used with the http library
import "rxjs/add/operator/map";

//define the constant url we would be uploading to.
const URL = 'http://localhost:5000/api/photo/';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  showProgressBar: boolean = false;

  //pass in the Url to be uploaded to, and pass the itemAlais, which would be the name of the //file input when sending the post request.
  public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});


  constructor(private _data: DataService, private http: Http, private el: ElementRef) { }

  ngOnInit() {

    //override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
    //overide the onCompleteItem property of the uploader so we are 
    //able to deal with the server response.
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
        //  console.log("ImageUpload:uploaded:", item, status, response);
     };

   }

   onUpload(){
     console.log('on upload function response');
   }


   upload() {
    //locate the file element meant for the file upload.
        let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#photo');
    //get the total amount of files attached to the file input.
        let fileCount: number = inputEl.files.length;
    //create a new fromdata instance
        let formData =  new FormData();
    //check if the filecount is greater than zero, to be sure a file was selected.
        if (fileCount > 0) { // a file was selected
          for( let i=0; i< fileCount; i++ ) {

                        //append the key name 'photo' with the first file in the element
                        formData.append('photo', inputEl.files.item(i));
                        //call the angular http method
                        this.http
                    //post the form data to the url defined above and map the response. Then subscribe //to initiate the post. if you don't subscribe, angular wont post.
                            .post(URL, formData).map((response: Response) => {
                              return response;
                          });

          }

          }
       }



  onSubmitAddVideoTest(video : IVideoTest){
    console.log(video);
    console.log("onSubmitAddVideoTest invoked");
    this._data.addVideoTest(video).subscribe(res => console.log(res))
  }

}
