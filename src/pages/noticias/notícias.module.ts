import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotíciasPage } from './notícias';

@NgModule({
  declarations: [
    NotíciasPage,
  ],
  imports: [
    IonicPageModule.forChild(NotíciasPage),
  ],
})
export class NotíciasPageModule {}
