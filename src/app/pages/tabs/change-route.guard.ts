import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ChangeRouteService } from './change-route.service';
import { AlertController } from '@ionic/angular';

@Injectable()
export class ChangeRouteGuard implements CanDeactivate<ChangeRouteService> {

  constructor(
    private changeRouteService: ChangeRouteService,
    private alertController: AlertController
  ) { }

  canDeactivate() {
    if (this.changeRouteService.allowChangeRoute) {
      return true;
    } else {
      return this.confirmationAlert().then(confirm => confirm);
    }
  }

  private async confirmationAlert(): Promise<boolean> {
    let resolveFunction: (confirm: boolean) => void;
    const promise = new Promise<boolean>(resolve => resolveFunction = resolve);
    const alert = await this.alertController.create({
      message: 'Do you want to leave the page?',
      buttons: [{
        text: 'No',
        handler: () => resolveFunction(false)
      }, {
        text: 'Yes',
        handler: () => resolveFunction(true)
      }]
    });
    alert.present();
    return promise;
  }

}
