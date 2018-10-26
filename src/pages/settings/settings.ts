import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { livresEtCdServices } from '../../services/livresEtCdServices';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public serviceLivre: livresEtCdServices,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController, ) {
  }

  onSaveList() {
    let loader = this.loadingCtrl.create({
      content: 'Sauvegarde en cours…'
    });
    loader.present();
    this.serviceLivre.saveData().then(
      () => {
        this.serviceLivre.saveDataCD().then(
          () => {
            loader.dismiss();
            this.toastCtrl.create({
              message: 'Données sauvegardées !',
              duration: 3000,
              position: 'bottom'
            }).present();
          },
          (error) => {
            loader.dismiss();
            this.toastCtrl.create({
              message: error,
              duration: 3000,
              position: 'bottom'
            }).present();
          }
        );
      });
  }

  onFetchList() {
    let loader = this.loadingCtrl.create({
      content: 'Récuperation en cours…'
    });
    loader.present();
    this.serviceLivre.retrieveData().then(
      () => {
        this.serviceLivre.retrieveDataCD().then(
          () => {
            loader.dismiss();
            this.toastCtrl.create({
              message: 'Données récupérées !',
              duration: 3000,
              position: 'bottom'
            }).present();
          },
          (error) => {
            loader.dismiss();
            this.toastCtrl.create({
              message: error,
              duration: 3000,
              position: 'bottom'
            }).present();
          }
        );
      }
    );
  }

}
