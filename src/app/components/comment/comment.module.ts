import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { CommentComponent } from "./comment.component";

@NgModule({
    declarations: [
        CommentComponent,
    ],
    imports: [         
        CommonModule,
        IonicModule
    ],
    exports: [
        CommentComponent,
    ]
})
export class CommentModule { }