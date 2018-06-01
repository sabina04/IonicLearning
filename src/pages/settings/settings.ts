import { Component, ViewChild, ElementRef  } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage,NavController, NavParams } from 'ionic-angular';
import { IGaugeOptions } from 'ng2-gauge-with-color-band';
import { Settings } from '../../providers';


/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  // Our local settings object
  options: any;

  settingsReady = false;

  form: FormGroup;

  profileSettings = {
    page: 'profile',
    pageTitleKey: 'SETTINGS_PAGE_PROFILE'
  };

  page: string = 'main';
  pageTitleKey: string = 'SETTINGS_TITLE';
  pageTitle: string;

  subSettings: any = SettingsPage;
@ViewChild("container", { read: ElementRef }) container: ElementRef;

  gaugeOptions: IGaugeOptions = {
      valuePercent: .65,
      bandColor: ['#df4a4a', '#ff9649', '#f7d64f', '#b0df4b', '#57be4b'],
      bandPercent: [.5, .75, .1, .1, .1],
      minValue: 0,
      maxValue: 120,
      unit: 'KM/h'
    };

   
  constructor(public navCtrl: NavController,
    public settings: Settings,
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    public translate: TranslateService) {
  }

  NextLesson()
  {
     this.navCtrl.push('SearchPage');
  }
  _buildForm() {
    let group: any = {
      option1: [this.options.option1],
      option2: [this.options.option2],
      option3: [this.options.option3]
    };

    switch (this.page) {
      case 'main':
        break;
      case 'profile':
        group = {
          option4: [this.options.option4]
        };
        break;
    }
    this.form = this.formBuilder.group(group);

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.settings.merge(this.form.value);
    });
  }

  ionViewDidLoad() {
    // Build an empty form for the template to render
    this.form = this.formBuilder.group({});


  

  }

  ionViewWillEnter() {
    // Build an empty form for the template to render
    this.form = this.formBuilder.group({});

    this.page = this.navParams.get('page') || this.page;
    this.pageTitleKey = this.navParams.get('pageTitleKey') || this.pageTitleKey;

    this.translate.get(this.pageTitleKey).subscribe((res) => {
      this.pageTitle = res;
    })

    this.settings.load().then(() => {
      this.settingsReady = true;
      this.options = this.settings.allSettings;

      this._buildForm();
    });
    var userD = localStorage.getItem('userDetail');
    //console.log('Token is = ',localStorage.getItem('token'));
    //console.log('User is = ',userD);
  }

  ngOnChanges() {
    console.log('Ng All Changes');
  }




  

}
