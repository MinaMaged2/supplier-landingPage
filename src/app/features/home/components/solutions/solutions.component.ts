import { Component } from '@angular/core';
import { InfoBoxComponent } from '../info-box/info-box.component';
import { title } from 'process';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [InfoBoxComponent, TranslateModule],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.scss',
  providers: [TranslatePipe]
})
export class SolutionsComponent {
  boxInfoDataOne: any = {
    header: this.translate.transform('TalgahaCasher'),
    desc: this.translate.transform('CasherDesc')
  }
  boxInfoDataTwo: any = {
    header: this.translate.transform('TalgahaWebSite'),
    desc: this.translate.transform('TalgahaWebSiteDesc')
  }
  boxInfoDataThree: any = {
    header: this.translate.transform('jumlaConnect'),
    desc: this.translate.transform('jumlaConnectDesc')
  };

  constructor(
    private translate: TranslatePipe
  ){}
}
