import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { PostitModalComponent } from "./postit-modal.component";

@NgModule({
    declarations: [
        PostitModalComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule
    ],
    exports: [
        PostitModalComponent
    ],
})

export class PostItModalModule { }