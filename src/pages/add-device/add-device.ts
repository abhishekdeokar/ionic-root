import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AddDevicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-device',
  templateUrl: 'add-device.html',
})
export class AddDevicePage {

  devName: any;
  devType: any;
  devOwner: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {

  }

  save(): void{
    let device = {
      //the property names here have to be the ones you defined during loopback property definition
      deviceName: this.devName,
      deviceType: this.devType,
      deviceOwner: this.devOwner
    };

    this.viewCtrl.dismiss(device);
  }

  close():void{
    this.viewCtrl.dismiss();
  }

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad AddDevicePage');
  }*/

}
