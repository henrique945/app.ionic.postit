import { Component, Input } from '@angular/core';
import { FeedPostItProxy } from '../../models/proxies/feed-postit.proxy';
import { NoteService } from '../../services/note.service';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss'],
})
export class FeedItemComponent {

  constructor(
    private readonly helper: HelperService,
    private readonly note: NoteService,
  ) { }

  @Input()
  public postIt: FeedPostItProxy;

  public isLoading: boolean = false;

  public async setLikeToPostIt(): Promise<void> {
    this.isLoading = true;
    const [, errorMessage] = await this.note.setLikeOnPostit(this.postIt);
    this.isLoading = true;

    if (errorMessage)
      return this.helper.showToast(errorMessage, 5_000);

    this.postIt.hasLiked = !this.postIt.hasLiked;
  }
}
