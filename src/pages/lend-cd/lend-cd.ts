import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { CD } from '../../models/CD';
import { livresEtCdServices } from '../../services/livresEtCdServices';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the LendCdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lend-cd',
  templateUrl: 'lend-cd.html',
})
export class LendCdPage implements OnInit {

  cd: CD;
  index: number;
  Form: FormGroup;

  constructor(public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public serviceCd: livresEtCdServices,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index')
    this.cd = this.serviceCd.CdList[this.index];
    this.Form = this.formBuilder.group({
      nomPersonne: ['', Validators.required]
    });
  }
  dismissModal() {
    this.viewCtrl.dismiss();
  }

  OnToggleCD() {
    if (this.Form.get('nomPersonne').value == "") {
      alert("Faut saisir le nom de la personne qui va emprunté le cd");
    } else {
      if (this.cd.estprete == true) {
        this.serviceCd.preterLivreOuCD(this.cd);
        this.cd.nomPersonne = this.Form.get('nomPersonne').value;
        this.dismissModal();

      }
    }
  }



  Onrendrecd() {
    if (this.cd.estprete == false) {
      this.serviceCd.preterLivreOuCD(this.cd);
      this.serviceCd.saveListS();

    }

    this.dismissModal();

  }

}


