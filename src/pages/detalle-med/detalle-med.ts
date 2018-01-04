import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalleMedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle-med',
  templateUrl: 'detalle-med.html',
})
export class DetalleMedPage {

  fecha: String = new Date("January 15, 2018 11:13:00").toISOString();
  fecha2: String = new Date("April 30, 2018 11:13:00").toISOString();
  fecha3: String = new Date("January 30, 2018 11:13:00").toISOString();
  stock: Number = 2;
  stock2: Number = 8;
  stock3: Number = 3;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleMedPage');
  }

}
