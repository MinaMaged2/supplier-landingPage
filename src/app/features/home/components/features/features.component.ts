import { Component , Inject, PLATFORM_ID} from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../../../../environments/environment.development';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [ButtonModule, TranslateModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesComponent {
  services: any[] = [
    {
      title: this.translate.instant('Feature1'),
      desc: this.translate.instant('Feature1Desc'),
      className: 'blue'
    },
    {
      title: this.translate.instant('Feature2'),
      desc: this.translate.instant('Feature2Desc'),
      className: 'yellow'
    },
    {
      title: this.translate.instant('Feature3'),
      desc: this.translate.instant('Feature3Desc'),
      className: 'orange'
    },
    {
      title: this.translate.instant('Feature4'),
      desc: this.translate.instant('Feature4Desc'),
      className: 'pink'
    },
    {
      title: this.translate.instant('Feature5'),
      desc: this.translate.instant('Feature5Desc'),
      className: 'blue'
    },
    {
      title: this.translate.instant('Feature6'),
      desc: this.translate.instant('Feature6Desc'),
      className: 'yellow'
    },
    {
      title: this.translate.instant('Feature7'),
      desc: this.translate.instant('Feature7Desc'),
      className: 'orange'
    },
    {
      title: this.translate.instant('Feature8'),
      desc: this.translate.instant('Feature8Desc'),
      className: 'pink'
    },
  ];

  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ){}

  getPlans(){
    if (isPlatformBrowser(this.platformId)) {
      window.location.href = environment.SupplierComSa + 'packages'
    }
  }
}
