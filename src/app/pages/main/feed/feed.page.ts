import { Component } from '@angular/core';
import { FeedPostItProxy } from '../../../models/proxies/feed-postit.proxy';
import { HelperService } from '../../../services/helper.service';
import { NoteService } from '../../../services/note.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage {
  constructor(
    private readonly helper: HelperService,
    private readonly note: NoteService
  ) {}

  public isLoading: boolean = false;

  public postItArray: FeedPostItProxy[] = [];

  public async ionViewDidEnter(): Promise<void> {
    await this.loadFeedNotes();
  }

  public async loadFeedNotes(): Promise<void> {
    this.isLoading = true;
    const [postits, message] = await this.note.getFeedNotes();
    this.isLoading = false;

    if (message) return this.helper.showToast(message, 5_000);

    this.postItArray = postits;
  }
}
