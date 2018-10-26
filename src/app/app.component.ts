import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import * as firebase from 'firebase';
import { AuthPage } from '../pages/auth/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  authPage:any = AuthPage;
  isAuth: boolean;

  @ViewChild('content') content: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,  public menuCtrl: MenuController) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      let config = {
        apiKey: "AIzaSyDHfF97WhDAHgou2VFWnhitLkjyxN5uPDw",
        authDomain: "testionic-32878.firebaseapp.com",
        databaseURL: "https://testionic-32878.firebaseio.com",
        projectId: "testionic-32878",
        storageBucket: "testionic-32878.appspot.com",
        messagingSenderId: "795229857012"
      };
      firebase.initializeApp(config);
      firebase.auth().onAuthStateChanged(
        (user) => {
          if (user) {
            this.isAuth = true;
            this.content.setRoot(TabsPage);
          } else {
            this.isAuth = false;
            this.content.setRoot(AuthPage, {mode: 'connect'});
          }
        }
      );
    });
  }
  onDisconnect() {
    firebase.auth().signOut();
    this.menuCtrl.close();
  }
  onNavigateSetting() {
    this.content.setRoot(SettingsPage);
  }
  onNavigate(page: any, data?: {}) {
    this.content.setRoot(page, data ? data : null);
    this.menuCtrl.close();
  }

  onNavigateBook() {
    this.content.setRoot(this.rootPage);
  }


}