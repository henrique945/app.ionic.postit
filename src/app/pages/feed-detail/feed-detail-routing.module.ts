import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedDetailPage } from './feed-detail.page';

const routes: Routes = [
  {
    path: '',
    component: FeedDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedDetailPageRoutingModule {}
