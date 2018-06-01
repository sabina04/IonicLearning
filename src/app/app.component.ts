import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform, MenuController, AlertController, ToastController } from 'ionic-angular';

import { FirstRunPage } from '../pages';
import { Settings } from '../providers';
import { User } from '../providers';

@Component({
  template: `<ion-menu type="reveal" [content]="content">

 <ion-content>
     <div class="menu-background">
        <img src="assets/img/ppic.png"    />
        <div class="user">梅田校 Osaka Umeda</div> 
           
        </div>
 
      <ion-list>
        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
          {{p.title}}
        </button>
      </ion-list>

     <--  <ion-list>
        <button menuClose ion-item>
        Home
          </button>
      </ion-list>
      <ion-list>
        <button menuClose ion-item>
        Lesson schedule
       </button>
      </ion-list>
      <ion-list>
        <button menuClose ion-item>
        Lesson note
       </button>
      </ion-list>
      <ion-list>
        <button menuClose ion-item>
      Text Preparation / Review Tool
     </button>
      </ion-list>
      <ion-list>
        <button menuClose ion-item> e-Learning </button>
      </ion-list>
      
      <ion-list>
      <button menuClose ion-item>Other links</button>
      </ion-list>

      <div class="sub">
      <ion-list>
        <button menuClose ion-item> User Guide (English) </button>
      </ion-list>
       <ion-list>
        <button menuClose ion-item (click)="openPage(edit)"> Edit profile</button>
      </ion-list>
       <ion-list>
        <button menuClose ion-item>Change Password </button>
      </ion-list>
       <ion-list>
       <button menuClose ion-item>  Contract contents </button>
      </ion-list>-->
      </div>
      <div class="navfooter">
      <button class="logout" (click)="logout()">  <ion-icon ios="ios-arrow-round-back" md="md-arrow-round-back"></ion-icon> LogOut </button>
      </div>
    </ion-content>

  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = FirstRunPage;

  @ViewChild(Nav) nav: Nav;  

  pages: any[] = [
    
    { title: 'Welcome', component: 'WelcomePage' },
    { title: 'Login', component: 'LoginPage' },
    { title: 'Signup', component: 'SignupPage' },
    { title: 'Master Detail', component: 'ListMasterPage' },
    { title: 'Settings', component: 'SettingsPage' },
    { title: 'Search', component: 'SearchPage' },
    { title: 'EditProfile', component: 'EditProfilePage'}
  ]

  constructor(public toastCtrl : ToastController,private user : User,private alertCtrl: AlertController, public menuCtrl : MenuController,private translate: TranslateService, platform: Platform, settings: Settings, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.initTranslate();
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      if (browserLang === 'zh') {
        const browserCultureLang = this.translate.getBrowserCultureLang();

        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          this.translate.use('zh-cmn-Hans');
        } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
          this.translate.use('zh-cmn-Hant');
        }
      } else {
        this.translate.use(this.translate.getBrowserLang());
      }
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario  
    this.nav.setRoot(page.component);

  }

  logout(){
    console.log('In Logout');
    
    //this.app.getRootNav().setRoot(LoginPage); 
    let alert = this.alertCtrl.create({
      title: 'Confirm Logout',
      message: 'Do you want to logout from this device or from all device?',
      buttons: [
        {
          text: 'This Device',
          handler: () => {
            localStorage.setItem('userDetail','');
            localStorage.setItem('token','');
            this.menuCtrl.close();
            let toast = this.toastCtrl.create({
              message: "You logged out from this devices",
              duration: 3000,
              position: 'bottom'
            });
            toast.present();    
            this.nav.setRoot(this.rootPage);
          }
        },
        {
          text: 'All Devices',
          handler: () => {
            this.user.logout().subscribe((resp)=>{
              if(resp['actionStatus'] == true){
                let toast = this.toastCtrl.create({
                  message: "You logged out from all devices",
                  duration: 3000,
                  position: 'bottom'
                });
                toast.present();    
                this.menuCtrl.close();
                this.nav.setRoot(this.rootPage);
              }
            });
          }
        }
      ]
    });
    alert.present();
  }
 
}
