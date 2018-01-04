import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BotiquinPage } from './botiquin';

@NgModule({
  declarations: [
    BotiquinPage,
  ],
  imports: [
    IonicPageModule.forChild(BotiquinPage),
  ],
})
export class BotiquinPageModule {}
