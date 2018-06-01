import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { SearchPage } from './search';
//import { Media, MediaObject } from '@ionic-native/media';


@NgModule({
  declarations: [
    SearchPage,
  ],
  imports: [

    IonicPageModule.forChild(SearchPage),
    TranslateModule.forChild()
  ],
  providers: [
  //Media,

   // Camera
   
  ],
  exports: [
    SearchPage
  ]
})
export class SearchPageModule { }
