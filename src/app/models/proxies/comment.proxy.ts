import { UserProxy } from './user.proxy';
export interface CommentProxy {
  comment: string;
  user?: UserProxy;
}
