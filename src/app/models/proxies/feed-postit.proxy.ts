import { PostItProxy } from 'src/app/models/proxies/postit.proxy';
import { UserProxy } from './user.proxy';

export interface FeedPostItProxy extends PostItProxy {
  userId: number;
  hasLiked: boolean;
  user?: UserProxy;
}
