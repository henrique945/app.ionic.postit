import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpAsyncService } from './services/http-async.service';
import { BaseUrlInterceptor } from './interceptors/base-url.interceptor';

@NgModule({
  providers: [
    HttpAsyncService,
    { provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true },
  ],
})
export class HttpAsyncModule {}
