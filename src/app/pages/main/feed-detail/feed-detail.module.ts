import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FeedDetailPageRoutingModule } from './feed-detail-routing.module';
import { FeedDetailPage } from './feed-detail.page';
import { CommentModule } from 'src/app/components/comment/comment.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedDetailPageRoutingModule,
    CommentModule,
  ],
  declarations: [FeedDetailPage]
})
export class FeedDetailPageModule {}
