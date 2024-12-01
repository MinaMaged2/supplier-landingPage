import { Component, ViewEncapsulation } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { HostingComponent } from '../hosting/hosting.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main-section',
  standalone: true,
  imports: [TabViewModule, HostingComponent, TranslateModule],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class MainSectionComponent {

  // siteInfo: any = {
  //   header: 'Hosting',
  //   title: 'Premium Web Hosting for Your Website',
  //   fillBtnTitle: 'Choose your plan',
  //   fillBtnAction: 'getPlans',
  //   emptyBtnTitle: 'Contact us ',
  //   emptyBtnAction: 'getContact',
  //   des: 'Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.',
  //   img: 'assets/imgs/Image-(Replace).jpg',
  // };

  siteInfo: any = {
    title: this.translate.instant('TalgahaSystem'),
    fillBtnTitle: 'ChoosePlane',
    fillBtnAction: 'getPlans',
    emptyBtnTitle: 'ContactUsBtn',
    emptyBtnAction: 'getContact',
    des: this.translate.instant('TalgahaInfo'),
    img: 'assets/imgs/image1.png',
  };

  constructor(
    private translate: TranslateService
  ){}
}
