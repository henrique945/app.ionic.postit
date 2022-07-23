import { Component, OnInit } from '@angular/core';
import { PostItProxy } from 'src/app/models/proxies/postit.proxy';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  public postItArray: PostItProxy[] = [
    {
      id: 0,
      title: 'Título do post0',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis imperdiet sem. Suspendisse potenti. Curabitur eget nibh sed arcu cursus venenatis.',
      color: '#D7DF6B'
    },
    {
      id: 1,
      title: 'Título do post1',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis imperdiet sem. Suspendisse potenti. Curabitur eget nibh sed arcu cursus venenatis.',
      color: '#FEF496'
    },
    {
      id: 2,
      title: 'Título do post2',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis imperdiet sem. Suspendisse potenti. Curabitur eget nibh sed arcu cursus venenatis.',
      color: '#A2C8E8'
    },
    {
      id: 3,
      title: 'Título do post3',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis imperdiet sem. Suspendisse potenti. Curabitur eget nibh sed arcu cursus venenatis.',
      color: '#C390BC'
    },
    {
      id: 4,
      title: 'Título do post4',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis imperdiet sem. Suspendisse potenti. Curabitur eget nibh sed arcu cursus venenatis.',
      color: '#F77D60'
    },
    {
      id: 5,
      title: 'Título do post4',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis imperdiet sem. Suspendisse potenti. Curabitur eget nibh sed arcu cursus venenatis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis imperdiet sem. Suspendisse potenti. Curabitur eget nibh sed arcu cursus venenatis.',
      color: '#F77D60'
    }
  ]

  ngOnInit() {
  }

}
