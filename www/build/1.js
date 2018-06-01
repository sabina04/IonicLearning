webpackJsonp([1],{

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome__ = __webpack_require__(855);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var WelcomePageModule = /** @class */ (function () {
    function WelcomePageModule() {
    }
    WelcomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__welcome__["a" /* WelcomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__welcome__["a" /* WelcomePage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__welcome__["a" /* WelcomePage */]
            ]
        })
    ], WelcomePageModule);
    return WelcomePageModule;
}());

//# sourceMappingURL=welcome.module.js.map

/***/ }),

/***/ 855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    WelcomePage.prototype.login = function () {
        this.navCtrl.push('LoginPage');
    };
    WelcomePage.prototype.signup = function () {
        this.navCtrl.push('SignupPage');
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"/opt/lampp/htdocs/SV-IONIC/src/pages/welcome/welcome.html"*/'<ion-content scroll="false">\n<div class="divCustom2"> \n  <div padding >\n    <div class="centerlogo">\n    <img src="assets/img/main_logo.png" class="slide-image" width="60%"  />\n   </div>\n\n  <div class="intro_txt">\n    \n     <p class="slogan">ロゼッタストーンラーニングセンター<br/>\n マイページ でできること</p>\n  <table width="100%">\n    <tr> <td width="10%"> <img src="assets/img/ic1.png" /> </td>\n     <td> <p> <strong>24時間オンライン予約</strong><br>\nいつでもどこでも、ご都合にあわせて予約可能！\n         </p>\n       </td>\n  </tr>\n   <tr> <td> <img src="assets/img/ic2.png" /> </td>\n     <td> <p> <strong>レッスンノート</strong><br>\nレッスン中に講師が記録したノートを確認して復習できる！\n         </p>\n       </td>\n  </tr>\n   <tr> <td> <img src="assets/img/ic3.png" /> </td>\n     <td> <p> <strong>レコーディングファイルの確認</strong><br>\nレッスンノートとあわせてレッスンの録音内容を聞いてさら\nに効率アップ！\n         </p>\n       </td>\n  </tr>\n   <tr> <td> <img src="assets/img/ic4.png" /> </td>\n     <td> <p> <strong>ｅラーニング</strong><br>\nレッスン以外でもあなたの語学力アップを全面的にサポート\nいたします。\n         </p>\n       </td>\n  </tr>\n\n</table>\n<p class="slogan">他、「レッスン評価システム」など学習に役立つ\nコンテンツがございますので、是非ログインして活用しましょう！</p>\n  </div>\n   \n    <button ion-button block (click)="login()" class="login">{{ \'LOGIN\' | translate }}</button>\n\n     <!-- <a  (click)="signup()" class="link_txt">{{ \'SIGNUP\' | translate }}</a> -->\n  </div>\n\n  <div class="footer">※提携校舎では、オンラインでの予約・キャンセルはできません。各校舎にてご予約ください。</div>\n</div>\n</ion-content>\n'/*ion-inline-end:"/opt/lampp/htdocs/SV-IONIC/src/pages/welcome/welcome.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ })

});
//# sourceMappingURL=1.js.map