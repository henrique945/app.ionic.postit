import { PostItColorEnum } from "../enums/postit-color.enum";

export interface PostItPayload {
    id?: number;
    title: string;
    annotation: string;
    color: PostItColorEnum;
}