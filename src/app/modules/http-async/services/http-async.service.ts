import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class HttpAsyncService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  public async get<T>(url: string): Promise<[T | null, HttpErrorResponse | null]> {
    return this.http.get<T>(url).toPromise()
      .then(success => [success, null])
      .catch(error => [null, error])
      .then((result: [T | null, HttpErrorResponse | null]) => result);
  }

  public async post<T>(url: string, body?: any): Promise<[T | null, HttpErrorResponse | null]> {
    return this.http.post<T>(url, body).toPromise()
      .then(success => [success, null])
      .catch(error => [null, error])
      .then((result: [T | null, HttpErrorResponse | null]) => result);
  }

  public async put<T>(url: string, body?: any): Promise<[T | null, HttpErrorResponse | null]> {
    return this.http.put<T>(url, body).toPromise()
      .then(success => [success, null])
      .catch(error => [null, error])
      .then((result: [T | null, HttpErrorResponse | null]) => result);
  }

  public async delete<T>(url: string): Promise<[T | null, HttpErrorResponse | null]> {
    return this.http.delete<T>(url).toPromise()
      .then(success => [success, null])
      .catch(error => [null, error])
      .then((result: [T | null, HttpErrorResponse | null]) => result);
  }
}
