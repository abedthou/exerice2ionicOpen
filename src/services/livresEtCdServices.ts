
import { CD } from "../models/CD";
import { Subject } from "rxjs/Subject";
import * as firebase from "firebase";
import { book } from "../models/book";
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';


@Injectable()
export class livresEtCdServices {
  constructor(private storage: Storage) {

  }

  livres$ = new Subject<book[]>();
  cd$ = new Subject<CD[]>();

  livresList: book[] = [
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

  CdList: CD[] = [
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
  preterLivreOuCD(x: any) {
    x.estprete = !x.estprete;
    this.saveListS();
    this.emitBook();

  }
  emitBook() {
    this.livres$.next(this.livresList.slice());
  }
  emitCD() {
    this.cd$.next(this.CdList.slice());
  }

  saveData() {
    return new Promise((resolve, reject) => {
      firebase.database().ref('livres').set(this.livresList).then(
        (data: firebase.database.DataSnapshot) => {
          resolve(data);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  retrieveData() {
    return new Promise((resolve, reject) => {
      firebase.database().ref('livres').once('value').then(
        (data: firebase.database.DataSnapshot) => {
          this.livresList = data.val();
          this.emitBook();
          resolve('Données récupérées avec succès !');
        }, (error) => {
          reject(error);
        }
      );
    });
  }


  saveListS() {
    this.storage.set('livres', this.livresList);
  }

  fetchListS() {
    this.storage.get('livres').then(
      (list) => {
        if (list && list.length) {
          this.livresList = list.slice();
        }
        this.emitBook();
      }
    );
  }


  saveDataCD() {
    return new Promise((resolve, reject) => {
      firebase.database().ref('CD').set(this.CdList).then(
        (data: firebase.database.DataSnapshot) => {
          resolve(data);
        },
        (error) => {
          reject(error);
        }
      );
    });

  }

  retrieveDataCD() {
    return new Promise((resolve, reject) => {
      firebase.database().ref('CD').once('value').then(
        (data: firebase.database.DataSnapshot) => {
          this.CdList = data.val();
          this.emitCD();
          resolve('Données récupérées avec succès !');
        }, (error) => {
          reject(error);
        }
      );
    });
  }
  saveListCD() {
    this.storage.set('CD', this.CdList);
  }

  fetchListCD() {
    this.storage.get('CD').then(
      (list) => {
        if (list && list.length) {
          this.CdList = list.slice();
        }
        this.emitCD();
      }
    );
  }

}
