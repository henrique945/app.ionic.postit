import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedPostItProxy } from '../../../models/proxies/feed-postit.proxy';
import { HelperService } from '../../../services/helper.service';
import { NoteService } from '../../../services/note.service';

@Component({
  selector: 'app-feed-detail',
  templateUrl: './feed-detail.page.html',
  styleUrls: ['./feed-detail.page.scss'],
})
export class FeedDetailPage implements OnInit {
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly helper: HelperService,
    private readonly note: NoteService
  ) {
    this.postItId = +this.activatedRoute.snapshot.params.id;
  }

  public postIt: FeedPostItProxy;
  public isLoading: boolean = false;
  public commentText: string = '';

  private postItId: number = 0;

  public ngOnInit(): void {
    this.getPostIt();
  }

  public async getPostIt(): Promise<void> {
    const [postit, message] = await this.note.get(this.postItId);

    if (message) {
      this.helper.showToast(message, 5_000);

      return void this.router.navigateByUrl('/feed');
    }

    this.postIt = postit;
  }

  public async setLikeToPostIt(): Promise<void> {
    this.isLoading = true;
    const [, errorMessage] = await this.note.setLikeOnPostit(this.postIt);
    this.isLoading = false;

    if (errorMessage)
      return this.helper.showToast(errorMessage, 5_000);

    this.postIt.hasLiked = !this.postIt.hasLiked;
  }

  public async sendComment(): Promise<void> {
    this.isLoading = true;
    const [comment, errorMessage] = await this.note.sendComment(this.postIt.id, this.commentText);
    this.isLoading = false;

    if (errorMessage)
      return this.helper.showToast(errorMessage, 5_000);

    comment.user = this.postIt.user;

    this.commentText = '';
    this.postIt.comments.push(comment);
  }
}
