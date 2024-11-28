import { Component , Inject, PLATFORM_ID} from '@angular/core';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../../../../environments/environment.development';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [ButtonModule, TranslateModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
  providers: [TranslatePipe]
})
export class FeaturesComponent {
  services: any[] = [
    {
      title: this.translate.transform('Feature1'),
      desc: this.translate.transform('Feature1Desc'),
      className: 'blue'
    },
    {
      title: this.translate.transform('Feature2'),
      desc: this.translate.transform('Feature2Desc'),
      className: 'yellow'
    },
    {
      title: this.translate.transform('Feature3'),
      desc: this.translate.transform('Feature3Desc'),
      className: 'orange'
    },
    {
      title: this.translate.transform('Feature4'),
      desc: this.translate.transform('Feature4Desc'),
      className: 'pink'
    },
    {
      title: this.translate.transform('Feature5'),
      desc: this.translate.transform('Feature5Desc'),
      className: 'blue'
    },
    {
      title: this.translate.transform('Feature6'),
      desc: this.translate.transform('Feature6Desc'),
      className: 'yellow'
    },
    {
      title: this.translate.transform('Feature7'),
      desc: this.translate.transform('Feature7Desc'),
      className: 'orange'
    },
    {
      title: this.translate.transform('Feature8'),
      desc: this.translate.transform('Feature8Desc'),
      className: 'pink'
    },
  ];

  constructor(
    private translate: TranslatePipe,
    @Inject(PLATFORM_ID) private platformId: Object
  ){}

  getPlans(){
    if (isPlatformBrowser(this.platformId)) {
      window.location.href = environment.SupplierComSa + 'packages'
    }
  }
}
