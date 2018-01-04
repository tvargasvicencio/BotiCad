import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BotiquinPage } from '../botiquin/botiquin';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  botiquin(){
    this.navCtrl.push(BotiquinPage);
  }

}
