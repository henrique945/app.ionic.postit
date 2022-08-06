import { NgModule } from "@angular/core";
import { HttpAsyncService } from './services/http-async.service';

@NgModule({
  providers: [
    HttpAsyncService,
  ],
})
export class HttpAsyncModule {}
