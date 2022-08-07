import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PostItColorEnum } from 'src/app/models/enums/postit-color.enum';
import { PostItPayload } from 'src/app/models/payloads/postit.payload';
import { NoteService } from '../../services/note.service';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'app-postit-modal',
  templateUrl: './postit-modal.component.html',
  styleUrls: ['./postit-modal.component.scss'],
})
export class PostitModalComponent implements OnInit {
  constructor(
    private readonly modalController: ModalController,
    private readonly note: NoteService,
    private readonly helper: HelperService
  ) {}

  @Input()
  public color: PostItColorEnum;

  @Input()
  public create: boolean = false;

  @Input()
  public postIt: PostItPayload = {
    id: 0,
    title: '',
    annotation: '',
    color: PostItColorEnum.BLUE,
    isPublic: false,
  };

  public isLoading: boolean = false;

  ngOnInit() {
    if (!this.color) {
      this.color = this.postIt.color;
    }
  }

  public async savePostIt(): Promise<void> {
    this.postIt.color = this.color;

    this.isLoading = true;

    const [postit, message] = this.postIt.id
      ? await this.note.update(this.postIt)
      : await this.note.create(this.postIt);

    this.isLoading = false;

    if (message) {
      return this.helper.showToast(message, 5_000);
    }

    this.modalController.dismiss({ postit });
  }

  public async deletePostIt(): Promise<void> {
    this.isLoading = true;
    const [, message] = await this.note.delete(this.postIt.id);
    this.isLoading = false;

    if (message) {
      return this.helper.showToast(message, 5_000);
    }

    this.modalController.dismiss({ postit: this.postIt, isDeleted: true });
  }

  public async publishPostit(): Promise<void> {
    this.isLoading = true;
    const [, message] = await this.note.publish(this.postIt);
    this.isLoading = false;

    if (message) {
      return this.helper.showToast(message, 5_000);
    }

    this.postIt.isPublic = true;

    this.modalController.dismiss({ postit: this.postIt });
  }

  public closeModal(): void {
    this.modalController.dismiss({ isDeleted: false });
  }
}
