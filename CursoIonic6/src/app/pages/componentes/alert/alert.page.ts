import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl : AlertController) { }

  ngOnInit() {
  }

  async alert() {

    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    }
    );

    alert.present();
  }

  async multipleButtons() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['Cancel', 'Save', 'Delete']
    });

    await alert.present();
  }

  async confirm() {
    const alert = await this.alertCtrl.create({
      header: 'Atenção!',
      message: 'Tem certeza que deseja excluir o usuário?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancelado');
          }
        }, {
          text: 'Confirmo',
          handler: () => {
            console.log('Confirmado');
          }
        }
      ]
    });

    await alert.present();
  }

  async prompt() {
    const alert = await this.alertCtrl.create({
      header: 'Acesso Restrito!',
      inputs: [
        {
          name: 'email',
          type: 'text',
          placeholder: 'Informe seu email'
        },
        {
          name: 'senha',
          type: 'password',
          placeholder: 'Informe sua senha'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (form) => {
            console.log(form);
          }
        }
      ]
    });

    await alert.present();
  }

}
