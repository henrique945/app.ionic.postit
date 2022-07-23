import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PostItColorEnum } from 'src/app/models/enums/postit-color.enum';
import { PostItPayload } from 'src/app/models/payloads/postit.payload';
import { PostItProxy } from 'src/app/models/proxies/postit.proxy';

@Component({
  selector: 'app-postit-modal',
  templateUrl: './postit-modal.component.html',
  styleUrls: ['./postit-modal.component.scss'],
})
export class PostitModalComponent implements OnInit {

  constructor(
    private readonly modalController: ModalController
  ) { }

  @Input()
  public color: PostItColorEnum = PostItColorEnum.BLUE;

  // public title: string = '';

  // public annotation: string = '';

  public postIt: PostItPayload = {
    id: 6,
    title: '',
    annotation: '',
    color: PostItColorEnum.BLUE
  };

  ngOnInit() {}

  public savePostIt(): void {
    this.postIt.color = this.color;

    this.modalController.dismiss(this.postIt);
  }

}
