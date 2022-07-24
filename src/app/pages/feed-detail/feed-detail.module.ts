import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedDetailPageRoutingModule } from './feed-detail-routing.module';

import { FeedDetailPage } from './feed-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedDetailPageRoutingModule
  ],
  declarations: [FeedDetailPage]
})
export class FeedDetailPageModule {}
