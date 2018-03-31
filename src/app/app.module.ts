import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DefaultComponent } from './default/default.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { CampViewComponent } from './camp-view/camp-view.component';
import { DataService } from './data.service';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';


@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    CampaignsComponent,
    CampViewComponent,
    TestComponent,
    Test2Component,
    Test3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule,    // no need to refister explicitly, HttpClientModule do it
    BrowserAnimationsModule
  ],
  providers: [DataService],   // Register Data service
  bootstrap: [AppComponent]
})
export class AppModule { }
