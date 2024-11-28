import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ContactUsFormComponent } from '../../../../shared/components/contact-us-form/contact-us-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hosting',
  standalone: true,
  imports: [ButtonModule, TranslateModule, DialogModule, ContactUsFormComponent],
  templateUrl: './hosting.component.html',
  styleUrl: './hosting.component.scss',
})
export class HostingComponent {
  @Input() data: any;
  showContactUs: boolean = false;

  constructor(
    private router: Router
  ){}

  getPlans(data: any) {
    this.router.navigate(['/'], {
      fragment: 'packages'
    })
  }

  getContact(data: any) {
    this.showContactUs = true
  }
}
