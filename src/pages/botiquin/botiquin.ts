import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DetalleMedPage } from '../detalle-med/detalle-med';

/**
 * Generated class for the BotiquinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-botiquin',
  templateUrl: 'botiquin.html',
})
export class BotiquinPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BotiquinPage');
  }

  detalleMed(){
    this.navCtrl.push(DetalleMedPage);
  }

}
