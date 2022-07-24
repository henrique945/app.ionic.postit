import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostItColorEnum } from 'src/app/models/enums/postit-color.enum';
import { PostItProxy } from 'src/app/models/proxies/postit.proxy';

@Component({
  selector: 'app-feed-detail',
  templateUrl: './feed-detail.page.html',
  styleUrls: ['./feed-detail.page.scss'],
})
export class FeedDetailPage implements OnInit {

  constructor(
    private readonly activatedRoute: ActivatedRoute,
  ) {
    this.postItId = +this.activatedRoute.snapshot.params.id;
  }

  public postItArray: PostItProxy[] = [
    {
      id: 0,
      title: 'Título do post0',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis imperdiet sem. Suspendisse potenti. Curabitur eget nibh sed arcu cursus venenatis.',
      color: PostItColorEnum.GREEN,
      comments: [],
    },
    {
      id: 1,
      title: 'Título do post1',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis imperdiet sem. Suspendisse potenti. Curabitur eget nibh sed arcu cursus venenatis.',
      color: PostItColorEnum.YELLOW,
      comments: [],
    },
    {
      id: 2,
      title: 'Título do post2',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis imperdiet sem. Suspendisse potenti. Curabitur eget nibh sed arcu cursus venenatis.',
      color: PostItColorEnum.BLUE,
      comments: [
        {
          comment: 'Muito legal seu post',
        },
        {
          comment: 'Ótimas dicas Ana. Você faz o uso de algum app de controle financeiro da sua rotina. Já ouviu falar sobre o Mobills .Esse aplicativo de controle financeiro funciona de uma maneira simples, funcional e intuitiva. Com ele, você consegue organizar todos seus ganhos e gastos divididos por categorias.',
        }
      ],
    },
    {
      id: 3,
      title: 'Título do post3',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis imperdiet sem. Suspendisse potenti. Curabitur eget nibh sed arcu cursus venenatis.',
      color: PostItColorEnum.PURPLE,
      comments: [],
    },
    {
      id: 4,
      title: 'Título do post4',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis imperdiet sem. Suspendisse potenti. Curabitur eget nibh sed arcu cursus venenatis.',
      color: PostItColorEnum.RED,
      comments: [],
    },
    {
      id: 5,
      title: 'Título do post4',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis imperdiet sem. Suspendisse potenti. Curabitur eget nibh sed arcu cursus venenatis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis imperdiet sem. Suspendisse potenti. Curabitur eget nibh sed arcu cursus venenatis.',
      color: PostItColorEnum.PINK,      
      comments: [],
    }
  ];

  public postIt: PostItProxy;

  private postItId: number = 0;
  
  public isLiked: boolean = false;

  public ngOnInit(): void {
    this.getPostIt();
  }

  public getPostIt(): void {
    this.postIt = this.postItArray.find(post => post.id === this.postItId);
  }

  public setLikeToPostIt(): void {
    this.isLiked = !this.isLiked;
  }

}
