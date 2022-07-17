import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LoginPayload } from 'src/app/models/payloads/login.payload';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(
    private readonly helper: HelperService,
  ) { }

  public loginPayload: LoginPayload = {
    email: '',
    password: '',
  }

  public isLoading: boolean = false;

  public async login(): Promise<void> {
    if (!this.canLogin())
      return;

    this.isLoading = true;

    // toast
    await this.helper.showToast('Carregando...');

    // alert
    await this.helper.showAlert('Hello', [
      {
        text: 'Ok',
        handler: () => console.log('Ok!'),
      },
      {
        text: 'Outro',
        handler: () => console.log('Outro!'),
      }
    ]);

    console.log(this.loginPayload);
  }

  public canLogin(): boolean {
    const regex = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');

    const emailIsValid = regex.test(this.loginPayload.email)

    if (emailIsValid && this.loginPayload.password.length >= 6)
      return true;

    return false;
  }

  public logoClick($event: boolean): void {
    console.log($event);
  }

}
