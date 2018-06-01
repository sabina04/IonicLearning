import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { User } from '../../providers';
/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
 token = "";
 formdata : any;
 userDetail : any;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private formBuilder:FormBuilder,
     private alertCtrl: AlertController,
     public user: User) {
    this.token = localStorage.getItem("token");
    this.userDetail = JSON.parse(localStorage.getItem('userDetail'));
    this.formdata = this.formBuilder.group({
      username: new FormControl(this.userDetail.data.username,Validators.required),
      email_one: new FormControl(this.userDetail.data.CrmProspect.email_one,Validators.required),
  });
    
  }

  ionViewDidLoad() {
    
  }

  updateUsername(userName) {
    let alert = this.alertCtrl.create({
      title: 'Confirm Username update',
      message: 'Do you want to update username to ' + userName,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            //console.log('Cancel clicked');
          }
        },
        {
          text: 'Update',
          handler: () => {
             console.log('Update clicked');
          }
        }
      ]
    });
    alert.present();
  }


}
