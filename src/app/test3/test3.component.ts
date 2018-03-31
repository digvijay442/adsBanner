import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {
  hours = [];
  selectedHours = [];
  openHrsList: boolean = false;

  devices = [];
  selectedDevices = [];
  openDeviceList: boolean = false;

  countries = [];
  selectedCountries = [];
  openCountryList: boolean = false;

  osList = [];
  selectedOs = [];
  openOsList: boolean = false;


  constructor(private _data: DataService) {
  }

  ngOnInit() {
    // this.data.getHours().subscribe(hrs => this.hours = hrs);
    this._data.getDummyHours().subscribe(hrs => this.hours = hrs);
    setTimeout(() => {
      for (let i = 0; i < this.hours.length; i++)
        this.selectedHours.push(this.hours[i].hr);
    }, 1);

    // Get devices list
    this._data.getDeviceList().subscribe(data => this.devices = data);
    setTimeout(() => {
      for (let i = 0; i < this.devices.length; i++)
        this.selectedDevices.push(this.devices[i].device);
    }, 1);

    // Get Country list
    this._data.getCountryList().subscribe(data => this.countries = data);
    setTimeout(() => {
      for (let i = 0; i < this.countries.length; i++) {
        this.selectedCountries.push(this.countries[i].country);
      }
    }, 1);

    // get desktop OS list
    this._data.getDesktopOsList().subscribe(data => this.osList = data);
    setTimeout(() => {
      for (let i = 0; i < this.osList.length; i++)
        this.selectedOs.push({ "desktopOs": this.osList[i].desktopOs });
      // console.log(this.osList);
      // console.log(this.selectedOs);
    }, 1)

    // get mobile OS list
    this._data.getMobileOsList().subscribe(data => this.osList = data);
    setTimeout(() => {
      for (let i = 0; i < this.osList.length; i++)
        this.selectedOs.push({ "mobileOs": this.osList[i].mobileOs });
      console.log(this.osList);
      console.log(this.selectedOs);
    }, 1)

  }

  addHoursCheckMark(ind) {
    this.hours[ind].select = !this.hours[ind].select;
    this.selectedHours = [];
    for (let i = 0; i < this.hours.length; i++) {
      if (this.hours[i].select === true)
        this.selectedHours.push(this.hours[i].hr);
    }
    console.log(this.selectedHours)
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
    console.log(this.selectedCountries);
  }

  addOsCheckMark(ind) {
    this.osList[ind].select = !this.osList[ind].select;
    this.selectedOs = [];
    for (let i = 0; i < this.osList.length; i++) {
      if (this.osList[i].select === true)
        this.selectedOs.push(this.osList[i].desktopOs);
    }
    console.log(this.selectedOs);
  }

  openHrsListBtnClick() {
    this.openHrsList = !this.openHrsList;
    this.openDeviceList = false;
    this.openCountryList = false;
    this.openOsList = false;
  }

  openDeviceListBtnClick() {
    this.openDeviceList = !this.openDeviceList;
    this.openHrsList = false;
    this.openCountryList = false;
    this.openOsList = false;
  }

  openCountryListBtnClick() {
    this.openCountryList = !this.openCountryList;
    this.openDeviceList = false;
    this.openHrsList = false;
    this.openOsList = false;
  }

  openOsListBtnClick() {
    this.openOsList = !this.openOsList;
    this.openDeviceList = false;
    this.openHrsList = false;
    this.openCountryList = false;
  }

}
