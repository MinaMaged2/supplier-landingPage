import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericApi } from '../../../core/classes/generic-api';
import { EndPoints } from '../../../core/classes/endpoints';

@Injectable({
  providedIn: 'root'
})
export class VisitorMessagesService extends GenericApi<any> {

  constructor(
    private _http: HttpClient
  ) {
    super(_http, EndPoints.VISITORS)
  }
}
