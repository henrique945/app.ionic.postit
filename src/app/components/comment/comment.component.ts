import { Component, Input, OnInit } from '@angular/core';
import { CommentProxy } from 'src/app/models/proxies/comment.proxy';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {

  constructor() { }

  @Input()
  public comment: CommentProxy;

  ngOnInit() {}

}
