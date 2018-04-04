import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'camp-view',
  templateUrl: './camp-view.component.html',
  styleUrls: ['./camp-view.component.css']
})
export class CampViewComponent implements OnInit {
  campTitle: String;
  hours = [];
  selectedHours = [];
  openHrsList: boolean = false;

  devices = [];
  selectedDevices = [];
  openDeviceList: boolean = false;

  countries = [];
  selectedCountries = [];
  openCountryList: boolean = false;

  osListDesktop = [];
  selectedOsDesktop = [];
  openOsList: boolean = false;
  osListMobile = [];
  selectedOsMobile = [];

  browserListDesktop = [];
  selectedBrowserDesktop = [];
  openBrowserList: boolean = false;
  browserListMobile = [];
  selectedBrowserMobile = [];


  constructor(private _data: DataService) {
  }

  ngOnInit() {
    // get campTitle from dataService
    this._data.currentCampTitle.subscribe(title => this.campTitle = title);

    // Get Active Hours
    this._data.getHours().subscribe(hrs => {
      this.hours = hrs;
      for (let i = 0; i < this.hours.length; i++) {
        this.selectedHours.push(this.hours[i].hr);
      }
    });

    // Get devices list
    this._data.getDeviceList().subscribe(data => {
      this.devices = data;
      for (let i = 0; i < this.devices.length; i++) {
        this.selectedDevices.push(this.devices[i].device);
      }
    });

    // Get Country list
    this._data.getCountryList().subscribe(data => {
      this.countries = data;
      for (let i = 0; i < this.countries.length; i++) {
        this.selectedCountries.push(this.countries[i].country);
      }
    });

    // get desktop OS list
    this._data.getDesktopOsList().subscribe(data => {
      this.osListDesktop = data;
      for (let i = 0; i < this.osListDesktop.length; i++) {
        this.selectedOsDesktop.push({ "desktopOs": this.osListDesktop[i].desktopOs });
      }
    });

    // get mobile OS list 

    this._data.getMobileOsList().subscribe(data => {
      this.osListMobile = data;
      for (let i = 0; i < this.osListMobile.length; i++) {
        this.selectedOsMobile.push({ "mobileOs": this.osListMobile[i].mobileOs });
      }
    });

    // Get desktop Browser List
    this._data.getDesktopBrowserList().subscribe(data => {
      this.browserListDesktop = data;
      for (let i = 0; i < this.browserListDesktop.length; i++) {
        this.selectedBrowserDesktop.push(this.browserListDesktop[i].desktopBrowser);
      }
    })

    // Get Mobile Browser List
    this._data.getMobileBrowserList().subscribe(data => {
      this.browserListMobile = data;
      for (let i = 0; i < this.browserListMobile.length; i++) {
        this.selectedBrowserMobile.push(this.browserListMobile[i].mobileBrowser);
      }
    })

  }  // *********************** ngOnInit ends here ***********************

  private selectAllBtnText: boolean = false;
  toggleSelectAll(arrayA, selectedArrayA, event, optArrayB, optSelectedArrayB) {
    if (!this.selectAllBtnText) {
      for (let i = 0; i < arrayA.length; i++) {
        arrayA[i].select = false;
      }
      selectedArrayA.splice(0, selectedArrayA.length);
      
      if(optArrayB){
        for (let i = 0; i < optArrayB.length; i++) {
          optArrayB[i].select = false;
        }
        optSelectedArrayB.splice(0, optSelectedArrayB.length);
      }
      
      this.selectAllBtnText = !this.selectAllBtnText;
    } else {
      for (let i = 0; i < arrayA.length; i++) {
        arrayA[i].select = true;
        let first;
        for (let k in arrayA[i]) {
          if (arrayA[i].hasOwnProperty(k) && typeof (k) !== 'function') {
            first = arrayA[i][k];
            break;
          }
        }
        console.log("first - " + first);
        selectedArrayA.push(first);
      }
      
      if(optArrayB){
      for (let i = 0; i < optArrayB.length; i++) {
        optArrayB[i].select = true;
        let first;
        for (let k in optArrayB[i]) {
          if (optArrayB[i].hasOwnProperty(k) && typeof (k) !== 'function') {
            first = optArrayB[i][k];
            break;
          }
        }
        console.log("first - " + first);
        optSelectedArrayB.push(first);
      }
    }



      this.selectAllBtnText = !this.selectAllBtnText;
    }
    console.log(selectedArrayA);
  }

  addHoursCheckMark(ind) {
    this.hours[ind].select = !this.hours[ind].select;
    this.selectedHours = [];
    for (let i = 0; i < this.hours.length; i++) {
      if (this.hours[i].select === true)
        this.selectedHours.push(this.hours[i].hr);
    }
    console.log(this.selectedHours);
  }

  addDeviceCheckMark(ind) {
    this.devices[ind].select = !this.devices[ind].select;
    this.selectedDevices = [];
    for (let i = 0; i < this.devices.length; i++) {
      if (this.devices[i].select === true)
        this.selectedDevices.push(this.devices[i].device);
    }
    console.log(this.selectedDevices);
  }

  addCountryCheckMark(ind) {
    this.countries[ind].select = !this.countries[ind].select;
    this.selectedCountries = [];
    for (let i = 0; i < this.countries.length; i++) {
      if (this.countries[i].select === true)
        this.selectedCountries.push(this.countries[i].country);
    }
    // console.log(this.selectedCountries);
  }

  addOsCheckMark_dstp(ind) {
    this.osListDesktop[ind].select = !this.osListDesktop[ind].select;
    this.selectedOsDesktop = this.updateList(this.selectedOsDesktop, this.osListDesktop);
  }

  addOsCheckMark_mob(ind) {
    this.osListMobile[ind].select = !this.osListMobile[ind].select;
    this.selectedOsMobile = this.updateList(this.selectedOsMobile, this.osListMobile);;
  }

  updateList(arrA, arrB) {
    arrA = [];
    for (let i = 0; i < arrB.length; i++) {
      if (arrB[i].select === true)
        arrA.push(arrB[i].desktopOs);
    }
    return arrA;
  }

  addBrowserCheckMark_dstp(ind) {
    console.log(ind);
    this.browserListDesktop[ind].select = !this.browserListDesktop[ind].select;
    this.selectedBrowserDesktop = this.updateList(this.selectedBrowserDesktop, this.browserListDesktop);
  }

  addBrowserCheckMark_mob(ind) {
    console.log(ind);
    this.browserListMobile[ind].select = !this.browserListMobile[ind].select;
    this.selectedBrowserMobile = this.updateList(this.selectedBrowserMobile, this.browserListMobile);;
  }

  openHrsListBtnClick() {
    this.openHrsList = !this.openHrsList;
    this.openDeviceList = false;
    this.openCountryList = false;
    this.openOsList = false;
    this.openBrowserList = false;
  }

  openDeviceListBtnClick() {
    this.openDeviceList = !this.openDeviceList;
    this.openHrsList = false;
    this.openCountryList = false;
    this.openOsList = false;
    this.openBrowserList = false;
  }

  openCountryListBtnClick() {
    this.openCountryList = !this.openCountryList;
    this.openDeviceList = false;
    this.openHrsList = false;
    this.openOsList = false;
    this.openBrowserList = false;
  }

  openOsListBtnClick() {
    this.openOsList = !this.openOsList;
    this.openDeviceList = false;
    this.openHrsList = false;
    this.openCountryList = false;
    this.openBrowserList = false;
  }

  openBrowserListBtnClick() {
    this.openBrowserList = !this.openBrowserList;
    this.openDeviceList = false;
    this.openHrsList = false;
    this.openCountryList = false;
    this.openOsList = false;
  }

  // updateOsList(arrA, arrB){
  //   this.selectedOs = [];
  //   for (let i = 0; i < arrA.length; i++) {
  //     if (arrA[i].select === true)
  //       this.selectedOs.push(arrA[i].desktopOs);
  //   }
  //   for (let i = 0; i < arrB.length; i++) {
  //     if (arrB[i].select === true)
  //       this.selectedOs.push(arrB[i].mobileOs);
  //   }
  // }

}

