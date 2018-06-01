import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController,AlertController,NavParams,LoadingController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { User } from '../../providers';
import { MainPage } from '../';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  // account: { username: string, password: string } = {
  //   username: 'test.student',
  //   password: 'education'
  // };

  formdata : any;
  forgotUserId : any;
  forgotUserData : any;
  pushMessage : any;
  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    private alertCtrl: AlertController,
    public navParams : NavParams,
    public loadingCtrl: LoadingController) {
    
      
    this.formdata = new FormGroup({
      username: new FormControl("test.student",Validators.required),
      password: new FormControl("education",Validators.required)
    });
    this.pushMessage = navParams.get('pushMessage');
    if(this.pushMessage != "") {
      let toast = this.toastCtrl.create({
        message: this.pushMessage,
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    }
   

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }

  // Attempt to login in through our User service
  doLogin(data) {
    this.user.login(data).subscribe((resp) => {
      if(resp['actionStatus'] == true){
        localStorage.setItem('userDetail',JSON.stringify(resp));
        localStorage.setItem('token',resp['data']['token']);
        this.navCtrl.setRoot(MainPage);
      } else {
        let toast = this.toastCtrl.create({
          message: this.loginErrorString,
          duration: 3000,
          position: 'bottom'
        });
        toast.present();    
      }
    }, (err) => {
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    });
  }

  forgotUsername() {
    this.forgotUserId = true;
    this.forgotUserData = new FormGroup({
      email : new FormControl("",Validators.compose([
        Validators.required,Validators.email
      ]))
    });
  }
  updateUsername(data) {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
  
    // setTimeout(() => {
    //   loading.dismiss();
    // }, 5000);
   this.user.forgotUsername(data).subscribe((resp) => {
    if(resp['actionStatus'] == true) {
        this.pushMessage = resp['message'];
        loading.dismiss();
        this.navCtrl.push(LoginPage, {
          pushMessage : this.pushMessage
        });
    } else {
        let toast = this.toastCtrl.create({
          message: resp['message'],
          duration: 3000,
          position: 'top'
        });
        toast.present();
    }
   });
  }
}
