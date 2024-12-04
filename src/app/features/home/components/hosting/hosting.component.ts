import {
  Component,
  Inject,
  Input,
  OnInit,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ContactUsFormComponent } from '../../../../shared/components/contact-us-form/contact-us-form.component';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hosting',
  standalone: true,
  imports: [
    ButtonModule, 
    TranslateModule,
    DialogModule,
    ContactUsFormComponent,
  ],
  templateUrl: './hosting.component.html',
  styleUrl: './hosting.component.scss',
})
export class HostingComponent implements OnInit {
  @Input() data: any;
  showContactUs: boolean = false;

  constructor(
    private router: Router,
    private titleService: Title,
    private metaService: Meta,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.setMetaTags();
    if (isPlatformBrowser(this.platformId)) {
      this.setStructuredData();
    }
  }

  getPlans(data: any) {
    this.router.navigate(['/'], {
      fragment: 'packages',
    });
  }

  getContact(data: any) {
    this.showContactUs = true;
  }

  setMetaTags() {
    // this.titleService.setTitle('نظام تلقائي لتبسيط إدارة نشاطك التجاري');
    this.metaService.addTags([
      {
        name: 'description',
        content: 'نظام تلقائي شامل لتبسيط إدارة الأنشطة التجارية.',
      },
      {
        name: 'keywords',
        content: 'نظام إدارة, نشاط تجاري, برامج الكاشير, إدارة المخزون',
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      {
        property: 'og:title',
        content: 'نظام تلقائي لتبسيط إدارة نشاطك التجاري',
      },
      {
        property: 'og:description',
        content: 'نظام شامل لتبسيط الأنشطة التجارية.',
      },
    ]);
  }
  setStructuredData() {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Talgaha',
      url: 'https://talgaha.com',
      description: 'نظام شامل لإدارة الأنشطة التجارية.',
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  }
}
