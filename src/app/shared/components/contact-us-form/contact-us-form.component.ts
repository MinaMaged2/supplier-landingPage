import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ValidationErrorComponent } from '../validation-error/validation-error.component';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TranslateModule } from '@ngx-translate/core';
import { VisitorMessagesService } from '../../services/visitor-messages/visitor-messages.service';
import { ResponseErrorHandlerService } from '../../services/error-handler-response/response-error-handler.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-contact-us-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    ValidationErrorComponent,
    ButtonModule,
    FloatLabelModule,
    TranslateModule,
    ToastModule,
    InputNumberModule
  ],
  templateUrl: './contact-us-form.component.html',
  styleUrl: './contact-us-form.component.scss',
  providers: [MessageService, TranslateModule],
})
export class ContactUsFormComponent {
  contactForm = new FormGroup({
    ClientName: new FormControl('', Validators.required),
    ClientMobile: new FormControl(null, Validators.required),
    ClientEmail: new FormControl('', [Validators.required, Validators.email]),
    ClientMsg: new FormControl('', Validators.required),
    ClientSubject: new FormControl('From Supplier Subscription'),

  });
  visitorMsgService =  inject(VisitorMessagesService);
  responseHandler = inject(ResponseErrorHandlerService);
  messageService = inject(MessageService);

  onSubmit() {
    console.log(this.contactForm.value);

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    let fd = new FormData();
    Object.keys(this.contactForm.value).forEach(e => {
      fd.append(e, this.contactForm.get(e)?.value);
    });

    this.visitorMsgService.create(fd).subscribe({
      next: (resData) => {
        const toast = this.responseHandler.handleResponse(resData);
        this.messageService.add(toast);
        this.contactForm.reset();
      },
      error: (err) => {
        const toast = this.responseHandler.handleResponse(err);
        this.messageService.add(toast);
      }
    })
  } 
}
