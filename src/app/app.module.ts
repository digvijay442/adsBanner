import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileSelectDirective } from 'ng2-file-upload';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DefaultComponent } from './default/default.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { CampViewComponent } from './camp-view/camp-view.component';
import { DataService } from './data.service';
import { Test3Component } from './test/test3.component';
import { BannerComponent } from './banner/banner.component';


@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    CampaignsComponent,
    CampViewComponent,
    Test3Component,
    FileSelectDirective,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule,    // no need to refister explicitly, HttpClientModule do it
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [DataService],   // Register Data service
  bootstrap: [AppComponent]
})
export class AppModule { }
