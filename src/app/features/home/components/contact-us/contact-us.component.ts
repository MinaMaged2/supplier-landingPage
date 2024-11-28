import { Component, ViewEncapsulation } from '@angular/core';
import { ContactUsFormComponent } from '../../../../shared/components/contact-us-form/contact-us-form.component';
import { TranslateModule } from '@ngx-translate/core';
import { environment } from '../../../../../environments/environment.development';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ContactUsFormComponent, TranslateModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ContactUsComponent {
  infoMail: string = environment.email
  TwitterLink: string = environment.TwitterLink;
  facebook: string = environment.FaceBookLink;

}
