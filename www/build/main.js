webpackJsonp([4],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AuthService__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(83);
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
 * Generated class for the AuthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AuthPage = /** @class */ (function () {
    function AuthPage(authService, navParams, menuCtrl, formBuilder, navCtrl) {
        this.authService = authService;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
    }
    AuthPage.prototype.ngOnInit = function () {
        this.mode = this.navParams.get('mode');
        this.initForm();
    };
    AuthPage.prototype.initForm = function () {
        this.authForm = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].email]],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
    };
    AuthPage.prototype.onToggleMenu = function () {
        this.menuCtrl.open();
    };
    AuthPage.prototype.onSubmitForm = function () {
        var _this = this;
        var email = this.authForm.get('email').value;
        var password = this.authForm.get('password').value;
        if (this.mode === 'new') {
            this.authService.signUpUser(email, password).then(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
            }, function (error) {
                _this.errorMessage = error;
            });
        }
        else if (this.mode === 'connect') {
            this.authService.signInUser(email, password).then(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
            }, function (error) {
                _this.errorMessage = error;
            });
        }
    };
    AuthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-auth',template:/*ion-inline-start:"/Users/thourayaabed/Desktop/TestIonic/exerciceIonic1/src/pages/auth/auth.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="onToggleMenu()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title *ngIf="mode === \'new\'">Nouvel utilisateur</ion-title>\n    <ion-title *ngIf="mode === \'connect\'">Connexion</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <form [formGroup]="authForm">\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Adresse mail</ion-label>\n        <ion-input type="email" formControlName="email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Mot de passe</ion-label>\n        <ion-input type="password" formControlName="password"></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button full (click)="onSubmitForm()">Soumettre</button>\n    <span ion-text color="danger">{{ errorMessage }}</span>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/thourayaabed/Desktop/TestIonic/exerciceIonic1/src/pages/auth/auth.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], AuthPage);
    return AuthPage;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CdListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_livresEtCdServices__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lend_cd_lend_cd__ = __webpack_require__(108);
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
 * Generated class for the CdListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CdListPage = /** @class */ (function () {
    function CdListPage(modalCtrl, navCtrl, menuCtrl, navParams, serviceCd) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.navParams = navParams;
        this.serviceCd = serviceCd;
        this.cdList = [];
    }
    CdListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.cdSubscription = this.serviceCd.cd$.subscribe(function (cd) {
            _this.cdList = cd.slice();
        });
        this.serviceCd.fetchListCD();
    };
    CdListPage.prototype.OnLoadCd = function (index) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__lend_cd_lend_cd__["a" /* LendCdPage */], { index: index });
        modal.present();
    };
    CdListPage.prototype.onToggleMenu = function () {
        this.menuCtrl.open();
    };
    CdListPage.prototype.ngOnDestroy = function () {
        this.cdSubscription.unsubscribe();
    };
    CdListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cd-list',template:/*ion-inline-start:"/Users/thourayaabed/Desktop/TestIonic/exerciceIonic1/src/pages/cd-list/cd-list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>cdListPage</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n  <ion-list>\n    <button ion-item *ngFor="let cd of cdList; \n      let i = index" (click)="OnLoadCd(i)">\n      {{cd.titre }} : {{cd.chanteur}}\n      <ion-icon name="power" [color]="cd.estprete ? \'secondary\' : \'danger\'">\n      </ion-icon>\n      <ion-item *ngIf="!cd.estprete"> Nom de la personne: {{cd.nomPersonne}}</ion-item>\n    </button>\n\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/thourayaabed/Desktop/TestIonic/exerciceIonic1/src/pages/cd-list/cd-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_livresEtCdServices__["a" /* livresEtCdServices */]])
    ], CdListPage);
    return CdListPage;
}());

//# sourceMappingURL=cd-list.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LendCdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_livresEtCdServices__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
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
 * Generated class for the LendCdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LendCdPage = /** @class */ (function () {
    function LendCdPage(navCtrl, viewCtrl, navParams, serviceCd, formBuilder) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.serviceCd = serviceCd;
        this.formBuilder = formBuilder;
    }
    LendCdPage.prototype.ngOnInit = function () {
        this.index = this.navParams.get('index');
        this.cd = this.serviceCd.CdList[this.index];
        this.Form = this.formBuilder.group({
            nomPersonne: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
    };
    LendCdPage.prototype.dismissModal = function () {
        this.viewCtrl.dismiss();
    };
    LendCdPage.prototype.OnToggleCD = function () {
        if (this.Form.get('nomPersonne').value == "") {
            alert("Faut saisir le nom de la personne qui va emprunté le cd");
        }
        else {
            if (this.cd.estprete == true) {
                this.serviceCd.preterLivreOuCD(this.cd);
                this.cd.nomPersonne = this.Form.get('nomPersonne').value;
                this.dismissModal();
            }
        }
    };
    LendCdPage.prototype.Onrendrecd = function () {
        if (this.cd.estprete == false) {
            this.serviceCd.preterLivreOuCD(this.cd);
            this.serviceCd.saveListS();
        }
        this.dismissModal();
    };
    LendCdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lend-cd',template:/*ion-inline-start:"/Users/thourayaabed/Desktop/TestIonic/exerciceIonic1/src/pages/lend-cd/lend-cd.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons>\n      <button ion-button clear (click)="dismissModal()">Fermer</button>\n    </ion-buttons>\n    <ion-title>LendCDPage</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-list>\n    <button ion-item [color]="cd.estprete ? \'secondary\':\'danger\'">\n      {{cd.titre}} : {{cd.chanteur}}\n    </button>\n  </ion-list> <form [formGroup]="Form">\n    <ion-item>\n      <input *ngIf="cd.estprete" type="text" formControlName="nomPersonne">\n\n    </ion-item>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n\n          <button ion-button type="button" full color="secondary" [disabled]="cd.estprete" (click)="Onrendrecd()">rendre</button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <button ion-button type="button" full color="danger" [disabled]="!cd.estprete" (click)="OnToggleCD()">preter</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n  <ion-item *ngIf="!cd.estprete">\n    Nom de la personne qui a emprunté: {{cd.nomPersonne}}\n  </ion-item>\n</ion-content>'/*ion-inline-end:"/Users/thourayaabed/Desktop/TestIonic/exerciceIonic1/src/pages/lend-cd/lend-cd.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_livresEtCdServices__["a" /* livresEtCdServices */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], LendCdPage);
    return LendCdPage;
}());

//# sourceMappingURL=lend-cd.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_livresEtCdServices__ = __webpack_require__(36);
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
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, serviceLivre, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.serviceLivre = serviceLivre;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    SettingsPage.prototype.onSaveList = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Sauvegarde en cours…'
        });
        loader.present();
        this.serviceLivre.saveData().then(function () {
            _this.serviceLivre.saveDataCD().then(function () {
                loader.dismiss();
                _this.toastCtrl.create({
                    message: 'Données sauvegardées !',
                    duration: 3000,
                    position: 'bottom'
                }).present();
            }, function (error) {
                loader.dismiss();
                _this.toastCtrl.create({
                    message: error,
                    duration: 3000,
                    position: 'bottom'
                }).present();
            });
        });
    };
    SettingsPage.prototype.onFetchList = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Récuperation en cours…'
        });
        loader.present();
        this.serviceLivre.retrieveData().then(function () {
            _this.serviceLivre.retrieveDataCD().then(function () {
                loader.dismiss();
                _this.toastCtrl.create({
                    message: 'Données récupérées !',
                    duration: 3000,
                    position: 'bottom'
                }).present();
            }, function (error) {
                loader.dismiss();
                _this.toastCtrl.create({
                    message: error,
                    duration: 3000,
                    position: 'bottom'
                }).present();
            });
        });
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/thourayaabed/Desktop/TestIonic/exerciceIonic1/src/pages/settings/settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Reglages</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n<ion-content padding>\n<ion-textarea placeholder="Settings"></ion-textarea>\n\n<ion-card>\n     \n    <ion-card-header>Données</ion-card-header>\n    <ion-card-content >\n        <button ion-button block outline (click)="onSaveList()">Enregistrer</button>\n        <button ion-button block outline (click)="onFetchList()">Récupérer</button>\n    </ion-card-content>\n</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/thourayaabed/Desktop/TestIonic/exerciceIonic1/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_livresEtCdServices__["a" /* livresEtCdServices */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/auth/auth.module": [
		296,
		3
	],
	"../pages/cd-list/cd-list.module": [
		297,
		2
	],
	"../pages/lend-cd/lend-cd.module": [
		298,
		1
	],
	"../pages/settings/settings.module": [
		299,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);

var AuthService = /** @class */ (function () {
    function AuthService() {
        var _this = this;
        this.isAuth = false;
        __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                _this.isAuth = true;
            }
            else {
                _this.isAuth = false;
            }
        });
    }
    AuthService.prototype.signUpUser = function (email, password) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().createUserWithEmailAndPassword(email, password).then(function (user) {
                resolve(user);
            }, function (error) {
                reject(error);
            });
        });
    };
    AuthService.prototype.signInUser = function (email, password) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().signInWithEmailAndPassword(email, password).then(function (user) {
                resolve(user);
            }, function (error) {
                reject(error);
            });
        });
    };
    AuthService.prototype.signOut = function () {
        __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().signOut();
    };
    return AuthService;
}());

//# sourceMappingURL=AuthService.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_livresEtCdServices__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lend_book_lend_book__ = __webpack_require__(165);
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
 * Generated class for the BookListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BookListPage = /** @class */ (function () {
    function BookListPage(modalCtrl, menuCtrl, navParams, serviceLivre) {
        this.modalCtrl = modalCtrl;
        this.menuCtrl = menuCtrl;
        this.navParams = navParams;
        this.serviceLivre = serviceLivre;
    }
    BookListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.livresSubscription = this.serviceLivre.livres$.subscribe(function (livres) {
            _this.livresList = livres.slice();
        });
        this.serviceLivre.fetchListS();
    };
    BookListPage.prototype.OnLoadBook = function (index) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__lend_book_lend_book__["a" /* LendBookPage */], { index: index });
        modal.present();
    };
    BookListPage.prototype.onToggleMenu = function () {
        this.menuCtrl.open();
    };
    BookListPage.prototype.ngOnDestroy = function () {
        this.livresSubscription.unsubscribe();
    };
    BookListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-book-list',template:/*ion-inline-start:"/Users/thourayaabed/Desktop/TestIonic/exerciceIonic1/src/pages/book-list/book-list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>BookListPage</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n  <ion-list>\n    <button ion-item icon-start *ngFor="let liv of livresList; let i = index" (click)="OnLoadBook(i)">\n      <ion-icon name="power" [color]="liv.estprete ? \'secondary\' : \'danger\'">\n      </ion-icon>\n      {{liv.titre}}:{{liv.auteur}}\n      <ion-item *ngIf="!liv.estprete"> Nom de la personne: {{liv.nomPersonne}}</ion-item>\n    </button>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/thourayaabed/Desktop/TestIonic/exerciceIonic1/src/pages/book-list/book-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_livresEtCdServices__["a" /* livresEtCdServices */]])
    ], BookListPage);
    return BookListPage;
}());

//# sourceMappingURL=book-list.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LendBookPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_livresEtCdServices__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
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
 * Generated class for the LendBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LendBookPage = /** @class */ (function () {
    function LendBookPage(navCtrl, viewCtrl, navParams, serviceLivre, formBuilder) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.serviceLivre = serviceLivre;
        this.formBuilder = formBuilder;
        this.borrowerFormInvalid = false;
    }
    LendBookPage.prototype.ngOnInit = function () {
        this.index = this.navParams.get('index');
        this.livre = this.serviceLivre.livresList[this.index];
        this.Form = this.formBuilder.group({
            nomPersonne: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
    };
    LendBookPage.prototype.dismissModal = function () {
        this.viewCtrl.dismiss();
    };
    LendBookPage.prototype.OnToggleBook = function () {
        if (this.Form.get('nomPersonne').value == "") {
            alert("Faut saisir le nom de la personne qui va emprunté le livre");
        }
        else {
            if (this.livre.estprete == true) {
                this.serviceLivre.preterLivreOuCD(this.livre);
                this.livre.nomPersonne = this.Form.get('nomPersonne').value;
                this.dismissModal();
            }
        }
    };
    LendBookPage.prototype.OnrendreBook = function () {
        if (this.livre.estprete == false) {
            this.serviceLivre.preterLivreOuCD(this.livre);
            this.serviceLivre.saveListS();
        }
        this.dismissModal();
    };
    LendBookPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lend-book',template:/*ion-inline-start:"/Users/thourayaabed/Desktop/TestIonic/exerciceIonic1/src/pages/book-list/lend-book/lend-book.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>LendBookPage</ion-title>\n    <ion-buttons end>\n      <button ion-button icon only (click)="dismissModal()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-list>\n    <button ion-item [color]="livre.estprete ? \'secondary\':\'danger\'">\n      {{livre.titre}} : {{livre.auteur}}\n    </button>\n  </ion-list>\n  <form [formGroup]="Form">\n    <ion-item>\n      <input *ngIf="livre.estprete" type="text" formControlName="nomPersonne">\n\n    </ion-item>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n\n          <button ion-button type="button" full color="secondary" [disabled]="livre.estprete" (click)="OnrendreBook()">rendre</button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <button ion-button type="button" full color="danger" [disabled]="!livre.estprete" (click)="OnToggleBook()">preter</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n  <ion-item *ngIf="!livre.estprete">\n    Nom de la personne qui a emprunté: {{livre.nomPersonne}}\n  </ion-item>\n</ion-content>'/*ion-inline-end:"/Users/thourayaabed/Desktop/TestIonic/exerciceIonic1/src/pages/book-list/lend-book/lend-book.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_livresEtCdServices__["a" /* livresEtCdServices */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], LendBookPage);
    return LendBookPage;
}());

//# sourceMappingURL=lend-book.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_book_list_book_list__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_cd_list_cd_list__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_livresEtCdServices__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_lend_cd_lend_cd__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_AuthService__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_auth_auth__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_book_list_lend_book_lend_book__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_storage__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_book_list_book_list__["a" /* BookListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_cd_list_cd_list__["a" /* CdListPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_book_list_lend_book_lend_book__["a" /* LendBookPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_lend_cd_lend_cd__["a" /* LendCdPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_auth_auth__["a" /* AuthPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/auth/auth.module#AuthPageModule', name: 'AuthPage', segment: 'auth', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cd-list/cd-list.module#CdListPageModule', name: 'CdListPage', segment: 'cd-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lend-cd/lend-cd.module#LendCdPageModule', name: 'LendCdPage', segment: 'lend-cd', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_book_list_book_list__["a" /* BookListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_cd_list_cd_list__["a" /* CdListPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_book_list_lend_book_lend_book__["a" /* LendBookPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_lend_cd_lend_cd__["a" /* LendCdPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_auth_auth__["a" /* AuthPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__services_livresEtCdServices__["a" /* livresEtCdServices */],
                __WEBPACK_IMPORTED_MODULE_13__services_AuthService__["a" /* AuthService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_auth_auth__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        this.authPage = __WEBPACK_IMPORTED_MODULE_7__pages_auth_auth__["a" /* AuthPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            var config = {
                apiKey: "AIzaSyDHfF97WhDAHgou2VFWnhitLkjyxN5uPDw",
                authDomain: "testionic-32878.firebaseapp.com",
                databaseURL: "https://testionic-32878.firebaseio.com",
                projectId: "testionic-32878",
                storageBucket: "testionic-32878.appspot.com",
                messagingSenderId: "795229857012"
            };
            __WEBPACK_IMPORTED_MODULE_6_firebase__["initializeApp"](config);
            __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().onAuthStateChanged(function (user) {
                if (user) {
                    _this.isAuth = true;
                    _this.content.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */]);
                }
                else {
                    _this.isAuth = false;
                    _this.content.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_auth_auth__["a" /* AuthPage */], { mode: 'connect' });
                }
            });
        });
    }
    MyApp.prototype.onDisconnect = function () {
        __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().signOut();
        this.menuCtrl.close();
    };
    MyApp.prototype.onNavigateSetting = function () {
        this.content.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__["a" /* SettingsPage */]);
    };
    MyApp.prototype.onNavigate = function (page, data) {
        this.content.setRoot(page, data ? data : null);
        this.menuCtrl.close();
    };
    MyApp.prototype.onNavigateBook = function () {
        this.content.setRoot(this.rootPage);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */])
    ], MyApp.prototype, "content", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/thourayaabed/Desktop/TestIonic/exerciceIonic1/src/app/app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <ion-list>\n            <button ion-button icon-start (click)="onNavigate(rootPage)" *ngIf="isAuth">\n                <ion-icon name="bookmarks"></ion-icon>\n                Books and CD\n            </button>\n            <br>\n            <button ion-button icon-start (click)="onNavigateSetting()">\n                <ion-icon name="construct"></ion-icon>\n                Settings\n            </button>\n            <button ion-button icon-start (click)="onNavigate(authPage, {mode: \'new\'})" \n            *ngIf="!isAuth">\n                <ion-icon name="person-add"></ion-icon>\n                Nouvel utilisateur\n            </button>\n            <button ion-button icon-start (click)="onNavigate(authPage, \n            {mode: \'connect\'})" *ngIf="!isAuth">\n                <ion-icon name="person"></ion-icon>\n                Connexion\n            </button>\n            <br>\n            <button ion-button icon-start (click)="onDisconnect()">\n                Deconnexion\n                <ion-icon name="person"></ion-icon>\n            </button>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content></ion-nav>'/*ion-inline-end:"/Users/thourayaabed/Desktop/TestIonic/exerciceIonic1/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/thourayaabed/Desktop/TestIonic/exerciceIonic1/src/pages/home/home.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Welcome to Ionic!</h2>\n  <p>\n\n  </p>\n  <p>\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n    update any existing page or create new pages.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/thourayaabed/Desktop/TestIonic/exerciceIonic1/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return livresEtCdServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var livresEtCdServices = /** @class */ (function () {
    function livresEtCdServices(storage) {
        this.storage = storage;
        this.livres$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this.cd$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this.livresList = [
            {
                titre: 'sauve moi',
                auteur: 'musso Guillaume',
                estprete: false,
                nomPersonne: 'cedric'
            },
            {
                titre: 'Le nouveau nom',
                auteur: 'Elena ferrante',
                estprete: false,
                nomPersonne: 'Nicolas'
            },
            {
                titre: 'Elle et lui',
                auteur: 'Mark Levy',
                estprete: true,
                nomPersonne: 'Maria'
            }
        ];
        this.CdList = [
            {
                titre: 'Cd1 Charles',
                chanteur: 'Charles aznavour',
                estprete: true,
                nomPersonne: 'cedric'
            },
            {
                titre: 'Cd1 Lara',
                chanteur: 'Lara fabien',
                estprete: false,
                nomPersonne: 'cedric'
            },
            {
                titre: 'Cd2 Michael',
                chanteur: 'Michael Jackson',
                estprete: true,
                nomPersonne: 'cedric'
            }
        ];
    }
    livresEtCdServices.prototype.preterLivreOuCD = function (x) {
        x.estprete = !x.estprete;
        this.saveListS();
        this.emitBook();
    };
    livresEtCdServices.prototype.emitBook = function () {
        this.livres$.next(this.livresList.slice());
    };
    livresEtCdServices.prototype.emitCD = function () {
        this.cd$.next(this.CdList.slice());
    };
    livresEtCdServices.prototype.saveData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('livres').set(_this.livresList).then(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    livresEtCdServices.prototype.retrieveData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('livres').once('value').then(function (data) {
                _this.livresList = data.val();
                _this.emitBook();
                resolve('Données récupérées avec succès !');
            }, function (error) {
                reject(error);
            });
        });
    };
    livresEtCdServices.prototype.saveListS = function () {
        this.storage.set('livres', this.livresList);
    };
    livresEtCdServices.prototype.fetchListS = function () {
        var _this = this;
        this.storage.get('livres').then(function (list) {
            if (list && list.length) {
                _this.livresList = list.slice();
            }
            _this.emitBook();
        });
    };
    livresEtCdServices.prototype.saveDataCD = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('CD').set(_this.CdList).then(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    livresEtCdServices.prototype.retrieveDataCD = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('CD').once('value').then(function (data) {
                _this.CdList = data.val();
                _this.emitCD();
                resolve('Données récupérées avec succès !');
            }, function (error) {
                reject(error);
            });
        });
    };
    livresEtCdServices.prototype.saveListCD = function () {
        this.storage.set('CD', this.CdList);
    };
    livresEtCdServices.prototype.fetchListCD = function () {
        var _this = this;
        this.storage.get('CD').then(function (list) {
            if (list && list.length) {
                _this.CdList = list.slice();
            }
            _this.emitCD();
        });
    };
    livresEtCdServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _a || Object])
    ], livresEtCdServices);
    return livresEtCdServices;
    var _a;
}());

//# sourceMappingURL=livresEtCdServices.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_list_book_list__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cd_list_cd_list__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__book_list_book_list__["a" /* BookListPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__cd_list_cd_list__["a" /* CdListPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'tab',template:/*ion-inline-start:"/Users/thourayaabed/Desktop/TestIonic/exerciceIonic1/src/pages/tabs/tabs.html"*/'<ion-tabs #content>\n  <ion-tab [root]="tab1Root" tabTitle="livres" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="CD" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/thourayaabed/Desktop/TestIonic/exerciceIonic1/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map