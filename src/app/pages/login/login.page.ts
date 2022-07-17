import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { LoginPayload } from 'src/app/models/payloads/login.payload';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(
    private readonly toastController: ToastController,
    private readonly alertController: AlertController,
  ) { }

  public loginPayload: LoginPayload = {
    email: '',
    password: '',
  }

  public isLoading: boolean = false;

  public async login(): Promise<void> {
    this.isLoading = true;

    // toast
    const toast = await this.toastController.create({
      message: 'Logando...',
      duration: 2000 //2s
    });
    toast.present();

    // alert
    const alert = await this.alertController.create({
      header: 'Hello World',
      buttons: [
        {
          text: 'OK',
          handler: () => { console.log('Ok!') }
        }
      ]
    });
    alert.present();

    console.log(this.loginPayload);
  }

  public canLogin(): boolean {
    const regex = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');

    const emailIsValid = regex.test(this.loginPayload.email)

    if (emailIsValid && this.loginPayload.password.length >= 6)
      return true;

    return false;
  }

}
