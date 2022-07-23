import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { PostitComponent } from "./postit.component";

@NgModule({
    declarations: [
        PostitComponent
    ],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [
        PostitComponent
    ],
})

export class PostItModule { }