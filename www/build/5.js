webpackJsonp([5],{

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(517);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5____ = __webpack_require__(223);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, user, toastCtrl, translateService, alertCtrl, navParams, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.formdata = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]("test.student", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]("education", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required)
        });
        this.pushMessage = navParams.get('pushMessage');
        if (this.pushMessage != "") {
            var toast = this.toastCtrl.create({
                message: this.pushMessage,
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        this.translateService.get('LOGIN_ERROR').subscribe(function (value) {
            _this.loginErrorString = value;
        });
    }
    LoginPage_1 = LoginPage;
    // Attempt to login in through our User service
    LoginPage.prototype.doLogin = function (data) {
        var _this = this;
        this.user.login(data).subscribe(function (resp) {
            if (resp['actionStatus'] == true) {
                localStorage.setItem('userDetail', JSON.stringify(resp));
                localStorage.setItem('token', resp['data']['token']);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5____["b" /* MainPage */]);
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: _this.loginErrorString,
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
        }, function (err) {
            var toast = _this.toastCtrl.create({
                message: _this.loginErrorString,
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        });
    };
    LoginPage.prototype.forgotUsername = function () {
        this.forgotUserId = true;
        this.forgotUserData = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].email
            ]))
        });
    };
    LoginPage.prototype.updateUsername = function (data) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        // setTimeout(() => {
        //   loading.dismiss();
        // }, 5000);
        this.user.forgotUsername(data).subscribe(function (resp) {
            if (resp['actionStatus'] == true) {
                _this.pushMessage = resp['message'];
                loading.dismiss();
                _this.navCtrl.push(LoginPage_1, {
                    pushMessage: _this.pushMessage
                });
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: resp['message'],
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
        });
    };
    LoginPage = LoginPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/opt/lampp/htdocs/SV-IONIC/src/pages/login/login.html"*/'\n\n<ion-content *ngIf="!forgotUserId" >\n  <div class="divCustom2"> \n   <div class="centerlogo">\n    <img src="assets/img/logo2.png"    />\n   </div>\n\n   <div class="centertext">\n    <img src="assets/img/mypage.png"  width="60%"  />\n   </div>\n  <form (submit)="doLogin(formdata.value)" [formGroup]="formdata">\n    <ion-list>\n\n      <!-- <ion-item>\n        <ion-label floating>{{ \'EMAIL\' | translate }}</ion-label>\n        <ion-input type="email" [(ngModel)]="account.email" name="email"></ion-input>\n      </ion-item> -->\n\n      <!--\n      Want to use a Username instead of an Email? Here you go:\n      -->\n      <ion-item>\n        <ion-label floating>{{ \'USERNAME\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="username" class="form-control" name="username"></ion-input>\n        <ion-label *ngIf="!formdata.controls.username.valid" class="error">Your username is required.</ion-label>\n      </ion-item>\n      \n\n      <ion-item>\n        <ion-label floating>{{ \'PASSWORD\' | translate }}</ion-label>\n        <ion-input type="password" formControlName="password" class="form-control" name="password"></ion-input>\n        <ion-label *ngIf="!formdata.controls.password.valid" class="error">Your password is required.</ion-label>\n        \n      </ion-item>\n\n      <ion-grid class="grid">\n    <ion-row class="row">\n      <ion-col class="col" col-4="">\n        <div><input type="checkbox">保存する</div>\n      </ion-col>\n      <ion-col  class="col" col-8="" >\n        <div><a href=""> パスワードを忘れた方はこちら</a></div>\n        <div><a href="#/login" (click)="forgotUsername()">Forgot Username/Password</a></div>\n      </ion-col>\n    </ion-row>\n  \n  </ion-grid>\n\n      <div padding>\n        <button ion-button [disabled]="!formdata.valid" color="login" block>{{ \'LOGIN_BUTTON\' | translate }}</button>\n        <!-- <button ion-button color="login" block>{{ \'LOGIN_BUTTON\' | translate }}</button> -->\n      </div>\n\n    </ion-list>\n  </form>\n    <div class="footer">※提携校舎では、オンラインでの予約・キャンセルはできません。各校舎にてご予約ください。</div>\n  </div>\n</ion-content>\n\n<ion-content *ngIf="forgotUserId">\n    <form (submit)="updateUsername(forgotUserData.value)" [formGroup]="forgotUserData">\n        <ion-list>\n          <ion-item>\n            <ion-label floating>{{ \'Email\' | translate }}</ion-label>\n            <ion-input type="text" formControlName="email" class="form-control" name="email"></ion-input>\n            <ion-label *ngIf="!forgotUserData.controls.email.valid" class="error">Your email is required.</ion-label>\n          </ion-item>\n          <div padding>\n              <button ion-button [disabled]="!forgotUserData.valid" color="Send" block>{{ \'Send\' | translate }}</button>\n              <!-- <button ion-button color="login" block>{{ \'LOGIN_BUTTON\' | translate }}</button> -->\n            </div>\n          </ion-list>\n    </form>    \n</ion-content>\n'/*ion-inline-end:"/opt/lampp/htdocs/SV-IONIC/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["d" /* User */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
    var LoginPage_1;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=5.js.map