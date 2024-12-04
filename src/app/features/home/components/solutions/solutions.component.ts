import { Component } from '@angular/core';
import { InfoBoxComponent } from '../info-box/info-box.component';
import { title } from 'process';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [InfoBoxComponent, TranslateModule],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.scss',
})
export class SolutionsComponent {
  boxInfoDataOne: any = {
    header: this.translate.instant('TalgahaCasher'),
    desc: this.translate.instant('CasherDesc'),
    metaTitle: "نظام الكاشير من تلقاها (POS)",
    metaTags : [
      { name: 'description', content: 'نظام نقاط البيع من تلقاها أو نظام الكاشير هو المسؤول عن إدارة نشاطك التجاري، من بيع وشراء، وإدارة مخزون وحسابات، وإصدار الفواتير وربطها مع هيئة الزكاة.' },
      { name: 'keywords', content: 'نظام كاشير, تلفاها, إدارة الموقع الإلكتروني, زيادة المبيعات' },
      { name: 'author', content: 'تلفاها' },
      { property: 'og:title', content: 'برنامج الكاشير من تلفاها' },
      { property: 'og:description', content: 'نظام شامل لإدارة الأنشطة التجارية مع حلول الكاشير المتكاملة.' },
      { property: 'og:url', content: 'https://talgaha.com' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'برنامج الكاشير من تلفاها',
      description: 'برنامج شامل لإدارة الأنشطة التجارية مع حلول توصيل الكاشير',
      provider: {
        '@type': 'Organization',
        name: 'تلفاها',
        url: 'https://telfaha.com',
      },
    }
  }
  boxInfoDataTwo: any = {
    header: this.translate.instant('TalgahaWebSite'),
    desc: this.translate.instant('TalgahaWebSiteDesc'),
    metaTitle: "برنامج التوصيل من تلفاها | حلول متكاملة لإدارة موقع",
    metaTags : [
      { name: 'description', content: 'نظام شامل لإدارة الأنشطة التجارية مع حلول التوصيل المتكاملة.' },
      { name: 'keywords', content: 'توصيل, تلفاها, إدارة الموقع الإلكتروني, زيادة المبيعات' },
      { name: 'author', content: 'تلفاها' },
      { property: 'og:title', content: 'برنامج التوصيل من تلفاها' },
      { property: 'og:description', content: 'نظام شامل لإدارة الأنشطة التجارية مع حلول التوصيل المتكاملة.' },
      { property: 'og:url', content: 'https://talgaha.com' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'برنامج التوصيل من تلفاها',
      description: 'برنامج شامل لإدارة الأنشطة التجارية مع حلول توصيل متكاملة',
      provider: {
        '@type': 'Organization',
        name: 'تلفاها',
        url: 'https://telfaha.com',
      },
    }
  }
  boxInfoDataThree: any = {
    header: this.translate.instant('jumlaConnect'),
    desc: this.translate.instant('jumlaConnectDesc'),
    metaTitle: "الربط بالجملة",
    metaTags : [
      { name: 'description', content: "هو أحد أهم الأشياء في 'تلقاها' هو الربط مع تجار الجملة للتسهيل علي الأنشطة التجارية طلب البضائع من خلال النظام." },
      { name: 'keywords', content: 'جملة, تلفاها, إدارة الموقع الإلكتروني, زيادة المبيعات' },
      { name: 'author', content: 'تلفاها' },
      { property: 'og:title', content: 'برنامج الجملة من تلفاها' },
      { property: 'og:description', content: "هو أحد أهم الأشياء في 'تلقاها' هو الربط مع تجار الجملة للتسهيل علي الأنشطة التجارية طلب البضائع من خلال النظام." },
      { property: 'og:url', content: 'https://talgaha.com' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'برنامج الجملة من تلفاها',
      description: 'برنامج شامل لإدارة الأنشطة التجارية مع حلول الجملة المتكاملة',
      provider: {
        '@type': 'Organization',
        name: 'تلفاها',
        url: 'https://telfaha.com',
      },
    }
  };

  constructor(
    private translate: TranslateService
  ){}
}
