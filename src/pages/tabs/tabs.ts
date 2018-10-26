import { Component } from '@angular/core';

import { BookListPage } from '../book-list/book-list';
import { CdListPage } from '../cd-list/cd-list';

@Component({
  selector: 'tab',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = BookListPage;
  tab2Root = CdListPage;

  constructor() {

  }
}
