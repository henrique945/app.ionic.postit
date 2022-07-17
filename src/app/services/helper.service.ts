import { Injectable } from "@angular/core";
import { AlertButton, AlertController, ToastController } from "@ionic/angular";

@Injectable({
  providedIn: 'root',
})
/**
 * Serviço que me ajuda a enviar feedbacks para o usuário
 */
export class HelperService {
  constructor(
    private readonly toastController: ToastController,
    private readonly alertController: AlertController,
  ) {}

  public async showToast(message: string, duration: number = 2000): Promise<void> {
    const toast = await this.toastController.create({
      message: message,
      duration: duration,
    });
    toast.present();
  }

  public async showAlert(header: string, buttons: (AlertButton | string)[]): Promise<void> {
    const alert = await this.alertController.create({
      header,
      buttons,
    });
    alert.present();
  }
}