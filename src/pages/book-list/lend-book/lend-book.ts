import { Component, OnInit, Input } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController, LoadingController } from 'ionic-angular';
import { book } from '../../../models/book';
import { livresEtCdServices } from '../../../services/livresEtCdServices';
import { FormBuilder, Validators, FormGroup, NgForm, FormControl } from '@angular/forms';

/**
 * Generated class for the LendBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@Component({
  selector: 'page-lend-book',
  templateUrl: 'lend-book.html',
})
export class LendBookPage implements OnInit {

  livre: book;
  index: number;
  public Form: FormGroup;

  constructor(public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    private serviceLivre: livresEtCdServices,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.index = this.navParams.get('index')
    this.livre = this.serviceLivre.livresList[this.index];
    this.Form = this.formBuilder.group({
      nomPersonne: ['', Validators.required]
    });
  }



  dismissModal() {
    this.viewCtrl.dismiss();
  }

  borrowerFormInvalid: boolean = false;

  OnToggleBook() {
    if (this.Form.get('nomPersonne').value == "") {
      alert("Faut saisir le nom de la personne qui va emprunté le livre");
    } else {
      if (this.livre.estprete == true) {
        this.serviceLivre.preterLivreOuCD(this.livre);
        this.livre.nomPersonne = this.Form.get('nomPersonne').value;
        this.dismissModal();

      }
    }
  }

  OnrendreBook() {
    if (this.livre.estprete == false) {
      this.serviceLivre.preterLivreOuCD(this.livre);
      this.serviceLivre.saveListS();

    }

    this.dismissModal();

  }

}
