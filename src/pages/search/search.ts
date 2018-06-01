import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { Media, MediaObject } from '@ionic-native/media';
import { Item } from '../../models/item';
import { Items } from '../../providers';



@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  currentItems: any = [];
 // mp3file: MediaObject ;

  constructor(public navCtrl: NavController, public navParams: NavParams, public items: Items) { 
    this.currentItems = this.items.query();
    //this.mp3file = this.media.create('assets/img/ic1.png');
   }

  ionViewDidEnter(){
    // Create a Media instance.  Expects path to this.mp3file or url as argument
      // We can optionally pass a second argument to track the status of the media


      // to listen to plugin events:

     // this.mp3file.onStatusUpdate.subscribe(status => console.log(status)); // fires when this.mp3file status changes

     // this.mp3file.onSuccess.subscribe(() => console.log('Action is successful'));

     // this.mp3file.onError.subscribe(error => console.log('Error!', error));

      // play the this.mp3file
      //this.mp3file.play();
  }
  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentItems = [];
      return;
      
    }
    this.currentItems = this.items.query({
      name: val
    });
  }


  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }

}
