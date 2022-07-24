import { Component, Input, OnInit } from '@angular/core';
import { PostItProxy } from 'src/app/models/proxies/postit.proxy';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss'],
})
export class FeedItemComponent implements OnInit {

  constructor() { }

  @Input()
  public postIt: PostItProxy;

  public isLiked: boolean = false;

  ngOnInit() {
    console.log(this.postIt);
  }

  public setLikeToPostIt(): void {
    this.isLiked = !this.isLiked;
  }

}
