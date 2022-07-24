import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { FeedItemComponent } from "./feed-item.component";

@NgModule({
    declarations: [
        FeedItemComponent,
    ],
    imports: [        
        CommonModule,
        IonicModule,
        RouterModule,
    ],
    exports: [
        FeedItemComponent,
    ],
})
export class FeedItemModule { }