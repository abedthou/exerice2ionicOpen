import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, MenuController } from 'ionic-angular';
import { livresEtCdServices } from '../../services/livresEtCdServices';
import { LendCdPage } from '../lend-cd/lend-cd';
import { CD } from '../../models/CD';
import { Subscription } from 'rxjs/Subscription';

/**
 * Generated class for the CdListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cd-list',
  templateUrl: 'cd-list.html',

})
export class CdListPage implements OnInit, OnDestroy {
  public cdList: CD[] = [];
  cdSubscription: Subscription;

  public cd: CD;
  constructor(public modalCtrl: ModalController, public navCtrl: NavController,
    private menuCtrl: MenuController,
    public navParams: NavParams, public serviceCd: livresEtCdServices) {
  }

  ngOnInit() {
    this.cdSubscription = this.serviceCd.cd$.subscribe(
      (cd: CD[]) => {
        this.cdList = cd.slice();
      }
    );
    this.serviceCd.fetchListCD();
  }


  OnLoadCd(index: number) {
    let modal = this.modalCtrl.create(LendCdPage, { index: index })
    modal.present();
  }


  onToggleMenu() {
    this.menuCtrl.open();
  }

  ngOnDestroy() {
    this.cdSubscription.unsubscribe();
  }

}
