import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { AlertController, Platform, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent  implements OnInit {
  private promptInstallEvent;
  private toast: HTMLIonToastElement;
  constructor(
    private alertCtrl : AlertController,
    private platform: Platform,
    private swUpdate: SwUpdate,
    private toastCtrl: ToastController,
  ) {}
  
  async ngOnInit() {

    this.swUpdate.available.subscribe(async event => {

      console.log('current version is', event.current);
      console.log('available version is', event.available);

      if (event.current !== event.available) {
        const alert = await this.alertCtrl.create({
          header: 'Oba, Temos Novidades!',
          subHeader: 'Há uma nova versão disponível da aplicação.',
          message: 'Deseja atualizar agora?',
          buttons: [
            'Mais tarde',
            {
              text: 'Instalar',
              handler: () => { this.swUpdate.activateUpdate(); }
            }
          ]
        });
        alert.present();
      }
    });

    await this.platform.ready();

    if (!this.isMobile) {
      this.checkForUpdate();
      if (!this.isPWAInstalled) {
        this.listenForInstallEvent();
      }
    }

  }

  private listenForInstallEvent() {
    window.addEventListener('beforeinstallprompt', async (e) => {
      e.preventDefault();
      this.promptInstallEvent = e;

      setTimeout(() => {
        this.suggestInstall();
      }, 5000);
    });
  }
  private async suggestInstall() {
    this.toast = await this.toastCtrl.create({
      message: 'Você pode usar este aplicativo offline',
      buttons: [{
        text: 'Baixar',
        handler: () => { this.installPWA(); },
      }, {
        text: '',
        icon: 'close'
      }],
      duration: 0,
    });
    this.toast.present();
  }

  private installPWA() {
    this.toast.dismiss();
    // Show the prompt
    this.promptInstallEvent.prompt();
    // Wait for the user to respond to the prompt
    this.promptInstallEvent.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        this.promptInstallEvent = null;
      });
  }

  get isMobile() {
    return this.platform.is('mobile');
  }
  get isPWAInstalled(): boolean {
    return window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone;
  }

  async checkForUpdate() {
    console.log('Check for updates');
    try {
      await this.swUpdate.checkForUpdate();
    } catch (e) {
      console.debug('service worker not available');
    }
  }
}
