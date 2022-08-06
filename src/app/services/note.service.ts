import { Injectable } from '@angular/core';
import { apiRoutes } from '../../environments/api-routes';
import { AsyncResult } from '../models/interfaces/async-result';
import { PostItPayload } from '../models/payloads/postit.payload';
import { PostItProxy } from '../models/proxies/postit.proxy';
import { HttpAsyncService } from '../modules/http-async/services/http-async.service';
import { FeedPostItProxy } from '../models/proxies/feed-postit.proxy';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor(private readonly http: HttpAsyncService) {}

  public async getMyNotes(): Promise<AsyncResult<PostItProxy[]>> {
    const [success, error] = await this.http.get<PostItProxy[]>(
      apiRoutes.notes.me
    );

    if (error) return [[], error.error.message];

    return [success];
  }

  public async create(
    postIt: PostItPayload
  ): Promise<AsyncResult<PostItProxy>> {
    const [success, error] = await this.http.post<PostItProxy>(
      apiRoutes.notes.create,
      postIt
    );

    if (error) return [null, error.error.message];

    return [success];
  }

  public async update(
    postIt: PostItPayload
  ): Promise<AsyncResult<PostItProxy>> {
    const url = apiRoutes.notes.update.replace(
      '{noteId}',
      postIt.id.toString()
    );

    const [success, error] = await this.http.put<PostItProxy>(url, postIt);

    if (error) return [null, error.error.message];

    return [success];
  }

  public async delete(id: number): Promise<AsyncResult<boolean>> {
    const url = apiRoutes.notes.delete.replace('{noteId}', id.toString());

    const [, error] = await this.http.delete(url);

    if (error) {
      return [false, error.error.message];
    }

    return [true];
  }

  public async publish(
    postIt: PostItPayload
  ): Promise<AsyncResult<PostItProxy>> {
    return this.update({
      ...postIt,
      isPublic: true,
    });
  }

  public async getFeedNotes(): Promise<AsyncResult<FeedPostItProxy[]>> {
    const [success, error] = await this.http.get<FeedPostItProxy[]>(
      apiRoutes.notes.feed
    );

    if (error) return [[], error.error.message];

    return [success];
  }

  public async setLikeOnPostit(
    postit: FeedPostItProxy
  ): Promise<AsyncResult<boolean>> {
    const url = postit.hasLiked
      ? apiRoutes.notes.like.delete.replace('{noteId}', postit.id.toString())
      : apiRoutes.notes.like.create.replace('{noteId}', postit.id.toString());
    const [, error] = postit.hasLiked
      ? await this.http.delete(url)
      : await this.http.post(url);

    if (error) return [false, error.error.message];

    return [true];
  }
}
