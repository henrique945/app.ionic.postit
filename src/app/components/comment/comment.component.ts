import { Component, Input } from '@angular/core';
import { CommentProxy } from 'src/app/models/proxies/comment.proxy';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent {

  @Input()
  public comment: CommentProxy;

}
