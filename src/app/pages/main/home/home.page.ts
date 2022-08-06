import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PostitModalComponent } from 'src/app/modals/postit-modal/postit-modal.component';
import { PostItColorEnum } from 'src/app/models/enums/postit-color.enum';
import { PostItProxy } from 'src/app/models/proxies/postit.proxy';
import { HelperService } from '../../../services/helper.service';
import { NoteService } from '../../../services/note.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  constructor(
    private readonly modalController: ModalController,
    private readonly note: NoteService,
    private readonly helper: HelperService
  ) {}

  public isLoading: boolean = false;

  public postItArray: PostItProxy[] = [];

  public postItColorEnum: typeof PostItColorEnum = PostItColorEnum;

  public async ionViewDidEnter(): Promise<void> {
    await this.loadMyNotes();
  }

  public async loadMyNotes(): Promise<void> {
    this.isLoading = true;
    const [notes, errorMessage] = await this.note.getMyNotes();
    this.isLoading = false;

    if (errorMessage) return this.helper.showToast(errorMessage, 5_000);

    this.postItArray = notes;
  }

  public consoleColor(color: string): void {
    console.log('color', color);
  }

  public printPostIt(event: PostItProxy): void {
    console.log('postit', event);
  }

  public async openPostModal(postIt: PostItProxy): Promise<void> {
    const modal = await this.modalController.create({
      component: PostitModalComponent,
      cssClass: 'background-modal',
      backdropDismiss: true,
      componentProps: {
        postIt,
      },
    });

    await modal.present();

    modal.onDidDismiss().then(async ({ data }) => {
      if (data.isDeleted) {
        this.postItArray = this.postItArray.filter(
          (post) => post.id !== data.postit.id
        );
      }
    });
  }

  public async openNewPostModal(color: string): Promise<void> {
    const modal = await this.modalController.create({
      component: PostitModalComponent,
      cssClass: 'background-modal',
      backdropDismiss: true,
      componentProps: {
        color,
        create: true,
      },
    });

    await modal.present();

    modal.onDidDismiss().then(async ({ data }) => {
      if (data.postit) {
        this.postItArray.push(data.postit);
      }
    });
  }
}
