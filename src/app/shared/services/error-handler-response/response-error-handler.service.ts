import {  TranslateService } from '@ngx-translate/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseAPI } from '../../../core/models/response-api';

@Injectable({
  providedIn: 'root',
})
export class ResponseErrorHandlerService {

  constructor(private translate: TranslateService ) {}

  handleResponse(response: any): {
    severity: string;
    summary: string;
    detail: string;
  } {
    // default severity
    let toastMessage = {
      severity: 'info',
      summary: 'Info',
      detail: 'Operation completed.',
    };

    if (response instanceof HttpErrorResponse) {
      // Handle HTTP error responses
      console.log(response)
      toastMessage = {
        severity: 'error',
        summary: this.translate.instant('Error'),
        detail: response.error.title || this.translate.instant('An error occurred.'),
      };

      // switch (response.status) {
      //   case 400:
      //     toastMessage.detail = 'Bad Request. Please check your input.';
      //     break;
      //   case 401:
      //     toastMessage.detail = 'Unauthorized. Please log in again.';
      //     break;
      //   case 403:
      //     toastMessage.detail = 'Forbidden. You do not have access.';
      //     break;
      //   case 404:
      //     toastMessage.detail = 'Not Found. Resource unavailable.';
      //     break;
      //   case 500:
      //     toastMessage.detail = 'Internal Server Error. Try again later.';
      //     break;
      //   default:
      //     toastMessage.detail = 'Unexpected error occurred.';
      // }
    } else {
      // Handle successful responses
      toastMessage = {
        severity: 'success',
        summary: this.translate.instant('Success'),
        detail: response.message || this.translate.instant('OperationSuccess'),
      };
    }
    return toastMessage;
  }
}
