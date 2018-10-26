import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavParams, ModalController, MenuController, LoadingController, ToastController } from 'ionic-angular';
import { livresEtCdServices } from '../../services/livresEtCdServices';
import { book } from '../../models/book';
import { Subscription } from 'rxjs/Subscription';
import { LendBookPage } from './lend-book/lend-book';

/**
 * Generated class for the BookListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})

export class BookListPage implements OnInit, OnDestroy{

  livresList: book[];
  livresSubscription: Subscription;

  constructor(
    private modalCtrl: ModalController,
    private menuCtrl: MenuController,
    public navParams: NavParams,
    private serviceLivre: livresEtCdServices,
  ) { }

  ngOnInit() {
    this.livresSubscription = this.serviceLivre.livres$.subscribe(
      (livres: book[]) => {
        this.livresList = livres.slice();
      }
    );
    this.serviceLivre.fetchListS();
  }


  OnLoadBook(index: number) {
    let modal = this.modalCtrl.create(LendBookPage, { index: index });
    modal.present();
  }
  onToggleMenu() {
    this.menuCtrl.open();
  }

  ngOnDestroy() {
    this.livresSubscription.unsubscribe();
  }



}
