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
    desc: this.translate.instant('CasherDesc')
  }
  boxInfoDataTwo: any = {
    header: this.translate.instant('TalgahaWebSite'),
    desc: this.translate.instant('TalgahaWebSiteDesc')
  }
  boxInfoDataThree: any = {
    header: this.translate.instant('jumlaConnect'),
    desc: this.translate.instant('jumlaConnectDesc')
  };

  constructor(
    private translate: TranslateService
  ){}
}
