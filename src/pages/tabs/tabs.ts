import { Component } from '@angular/core';

import { MenuPage } from '../menu/menu';
import { RequestPage } from '../request/request';
import { ProfilePage } from '../profile/profile';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MenuPage;
  tab2Root = RequestPage;
  tab3Root = ProfilePage;

  constructor() {

  }
}
