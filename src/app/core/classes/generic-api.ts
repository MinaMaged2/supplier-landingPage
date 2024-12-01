import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { ResponseAPI } from '../models/response-api';

export class GenericApi<T> {
  private _url: string = environment.API_MASTER;

  constructor(private _httpClient: HttpClient, private _endpoint: string) {}

  public create(item: T | FormData): Observable<ResponseAPI<T>> {
    return this._httpClient.post<ResponseAPI<T>>(
      `${this._url}/${this._endpoint}/Create`,
      item
    );
  }

  // public update(item: T | FormData): Observable<ResponseAPI<T>> {
  //   return this._httpClient.put<ResponseAPI<T>>(
  //     `${this._url}/${this._endpoint}/Update`,
  //     item
  //   );
  // }

  public getData(): Observable<ResponseAPI<T>> {
    return this._httpClient.get<ResponseAPI<T>>(
      `${this._url}/${this._endpoint}/Get`
    );
  }

  public getById(id: number): Observable<ResponseAPI<T>> {
    return this._httpClient.get<ResponseAPI<T>>(
      `${this._url}/${this._endpoint}/GetById`,
      {
        params: {
          id: id,
        },
      }
    );
  }

  // public delete(id: number) {
  //   return this._httpClient.delete(
  //     `${this._url}/${this._endpoint}/Delete?id=${id}`
  //   );
  // }
}
