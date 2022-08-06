import { Injectable } from '@angular/core';
import { HttpAsyncService } from '../modules/http-async/services/http-async.service';
import { TokenProxy } from '../models/proxies/token.proxy';
import { apiRoutes } from '../../environments/api-routes';
import { environment } from '../../environments/environment.prod';
import { CreateUserPayload } from '../models/payloads/create-user.payload';
import { AsyncResult } from '../models/interfaces/async-result';
import { UserProxy } from '../models/proxies/user.proxy';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpAsyncService) {}

  public async login(
    username: string,
    password: string
  ): Promise<AsyncResult<boolean>> {
    const [token, error] = await this.http.post<TokenProxy>(apiRoutes.auth.login, {
      username,
      password,
    });

    if (error) {
      return [false, error.error.message];
    }

    localStorage.setItem(environment.keys.token, token.token);

    return [true, `Bem-vindo de volta!`];
  }

  public async register(payload: CreateUserPayload): Promise<AsyncResult<boolean>> {
    const [user, error] = await this.http.post<UserProxy>(apiRoutes.users.create, payload);

    if (error) {
      return [false, error.error.message];
    }

    localStorage.setItem(environment.keys.user, JSON.stringify(user));

    return this.login(payload.email, payload.password);
  }
}
