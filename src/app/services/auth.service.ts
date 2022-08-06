import { Injectable } from '@angular/core';
import { HttpAsyncService } from '../modules/http-async/services/http-async.service';
import { TokenProxy } from '../models/proxies/token.proxy';
import { apiRoutes } from '../../environments/api-routes';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpAsyncService) {}

  public async login(
    username: string,
    password: string
  ): Promise<[isSuccess: boolean, errorMessage: string | undefined]> {
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
}
