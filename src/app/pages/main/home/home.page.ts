import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PostitModalComponent } from 'src/app/modals/postit-modal/postit-modal.component';
import { PostItColorEnum } from 'src/app/models/enums/postit-color.enum';
import { PostItProxy } from 'src/app/models/proxies/postit.proxy';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    public modalController: ModalController
  ) { }

  public postItArray: PostItProxy[] = [
    {
      id: 0,
      title: 'Título do post0',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis imperdiet sem. Suspendisse potenti. Curabitur eget nibh sed arcu cursus venenatis.',
      color: PostItColorEnum.GREEN
    },
    {
      id: 1,
      title: 'Título do post1',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis imperdiet sem. Suspendisse potenti. Curabitur eget nibh sed arcu cursus venenatis.',
      color: PostItColorEnum.YELLOW
    },
    {
      id: 2,
      title: 'Título do post2',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis imperdiet sem. Suspendisse potenti. Curabitur eget nibh sed arcu cursus venenatis.',
      color: PostItColorEnum.BLUE
    },
    {
      id: 3,
      title: 'Título do post3',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis imperdiet sem. Suspendisse potenti. Curabitur eget nibh sed arcu cursus venenatis.',
      color: PostItColorEnum.PURPLE
    },
    {
      id: 4,
      title: 'Título do post4',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis imperdiet sem. Suspendisse potenti. Curabitur eget nibh sed arcu cursus venenatis.',
      color: PostItColorEnum.RED
    },
    {
      id: 5,
      title: 'Título do post4',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis imperdiet sem. Suspendisse potenti. Curabitur eget nibh sed arcu cursus venenatis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis imperdiet sem. Suspendisse potenti. Curabitur eget nibh sed arcu cursus venenatis.',
      color: PostItColorEnum.PINK
    }
  ];

  public postItColorEnum: typeof PostItColorEnum = PostItColorEnum;

  ngOnInit() {
    console.log('postItColorEnum', this.postItColorEnum);
  }

  public consoleColor(color: string): void{
    console.log("color", color);
  }

  public printPostIt(event: PostItProxy): void {
    console.log('postit', event);
  }

  public async openPostModal(postIt: PostItProxy): Promise<void> {

    const modal = await this.modalController.create({
      component: PostitModalComponent,
      cssClass: 'background-modal',
      componentProps: {
        postIt
      }
    });

    await modal.present();

    modal.onDidDismiss().then(async ({ data: postIt }) => {
      // let index = this.postItArray.findIndex(post => post.id == postIt.id);
      // this.postItArray[index] = postIt;
      console.log('postIt', postIt);
      console.log('postItArray', this.postItArray);
    });
  }

  public async openNewPostModal(color: string): Promise<void> {

    const modal = await this.modalController.create({
      component: PostitModalComponent,
      cssClass: 'background-modal',
      componentProps: {
        color,
        create: true
      }
    });

    await modal.present();

    modal.onDidDismiss().then(async ({ data: postIt }) => {
      if (postIt) {
        this.postItArray.push(postIt);
      }
    });

  }

}
