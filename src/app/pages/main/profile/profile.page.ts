import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileSettingsEnum } from 'src/app/models/enums/profile-settings.enum';
import { FeedPostItProxy } from 'src/app/models/proxies/feed-postit.proxy';
import { AuthService } from 'src/app/services/auth.service';
import { HelperService } from 'src/app/services/helper.service';
import { NoteService } from 'src/app/services/note.service';
import { environment } from 'src/environments/environment';
import { PostItProxy } from '../../../models/proxies/postit.proxy';
import { UserProxy } from '../../../models/proxies/user.proxy';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {

  //#region Constructor
  constructor(
    private router: Router,
    private readonly noteService: NoteService,
    private readonly helper: HelperService,
  ) {}

  //#endregion

  //#region Public Properties

  @Input()
  public myPostits: PostItProxy[] = [];

  public isSettingsEnabled: boolean = false;

  public myUser: UserProxy;

  public loading: boolean = false;

  public post: FeedPostItProxy[];

  public profileSettingsEnum: typeof ProfileSettingsEnum = ProfileSettingsEnum;

  //#endregion

  //#region Public Methods
  public async ionViewDidEnter(): Promise<void> {
    this.loading = true;
    const [note, message] = await this.noteService.getMyFeedNotes();

    // TODO: IMPLEMENTAR GETME
    const success = JSON.parse(localStorage.getItem(environment.keys.user));
    this.loading = false;

    if (!success) {
      this.helper.showToast('Erro ao carregar usuário.')
    }

    if (!note) {
      return void this.helper.showToast(message);
    }

    this.post = note;
    this.myUser = success;
  }

  public async clickConfigList(selectedSettings: ProfileSettingsEnum): Promise<void> {

    if(selectedSettings === ProfileSettingsEnum.EXIT){
      localStorage.clear();
      return void await this.router.navigate(['/login']);
    }

    if(selectedSettings === ProfileSettingsEnum.ABOUT_US){
      return void this.helper.showToast('Projeto Bootcamp LIGA - 2022', 5_000)
    }
  }

  //#endregion

}
