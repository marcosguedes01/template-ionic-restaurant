import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the MenuPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  showCheckbox() {

    let alert = this.alertCtrl.create();
    alert.setTitle('O que você deseja filtrar?');

    alert.addInput({
      type: 'checkbox',
      label: 'Almoços',
      value: 'almocos',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Petiscos',
      value: 'petiscos'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Lanches',
      value: 'lanches'
    });

    alert.addButton('CANCELAR');
    alert.addButton({
      text: 'APLICAR',
      handler: data => {
        console.log('Checkbox data:', data);
        //console.log('Checkbox data:', data[0]);
        //console.log('Checkbox data:', data[0]=="almocos");
        //this.testCheckboxOpen = false;
        //this.testCheckboxResult = data;
      }
    });
    alert.present();
  }

}
