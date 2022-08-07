import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HelperService } from 'src/app/services/helper.service';
import { environment } from 'src/environments/environment';
import { PostItProxy } from '../../../models/proxies/postit.proxy';
import { UserProxy } from '../../../models/proxies/user.proxy';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  // host: {
  //   '(document:click)': 'onClick($event)',
  // },
})
export class ProfilePage {

  //#region Constructor
  constructor(
    private router: Router,
    private readonly authService: AuthService,
    private readonly helper: HelperService,
  ) { }

  //#endregion

  //#region Public Properties

  @Input()
  public myPostits: PostItProxy[] = [];

  public isSettingsEnabled: boolean = false;

  public myUser: UserProxy;

  public loading: boolean = false;

  //#endregion

  //#region Public Methods
  public async ionViewDidEnter(): Promise<void> {
    this.loading = true;
    // TODO: IMPLEMENTAR GETME
    const success = JSON.parse(localStorage.getItem(environment.keys.user));
    this.loading = false;

    if(!success){
      return void this.helper.showToast('Erro ao carregar usuário.')
    }

    this.myUser = success;
  }

  public async clickConfigList(index: 0 | 1 | 2 | 3): Promise<void> {
    switch (index) {
      case 1 : {
        break;
      }
      case 2 : {
        break;
      }
      case 3 : {
        localStorage.clear();
        await this.router.navigate(['/login']);
        break;
      }
    }
  }

  //#endregion

}
