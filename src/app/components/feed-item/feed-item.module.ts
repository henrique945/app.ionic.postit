import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { FeedItemComponent } from "./feed-item.component";

@NgModule({
    declarations: [
        FeedItemComponent,
    ],
    imports: [        
        CommonModule,
        IonicModule
    ],
    exports: [
        FeedItemComponent,
    ],
})
export class FeedItemModule { }