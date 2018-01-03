import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
//import { AddDevicePage } from '../../pages/add-device/add-device';
import { AddDevicePage } from '../add-device/add-device';
import { DevicesProvider } from '../../providers/devices/devices';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  devices: Array<Object>;
  
  constructor(public navCtrl: NavController, public devServices: DevicesProvider, public modalCtrl: ModalController) {

  }

  view(){
    this.devServices.getDevices().then((data) => {
      console.log(data);
      this.devices = data;
    });
  }

  addDevice(){
    let modal = this.modalCtrl.create(AddDevicePage);
    //this.devices.push(device);
    modal.onDidDismiss(device => {
      if(device){
        //testing this, is supposed to be devices.push(device)
        this.devices.push(device);
        console.log(this.devices);
        //this.this.devices.push(device);
        this.devServices.addDevice(device);
      }
    });
    modal.present();
  }

  //deleteDevice()

}
