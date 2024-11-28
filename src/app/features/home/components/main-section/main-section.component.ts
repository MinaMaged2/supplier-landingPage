import { Component, ViewEncapsulation } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { HostingComponent } from '../hosting/hosting.component';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-main-section',
  standalone: true,
  imports: [TabViewModule, HostingComponent, TranslateModule],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.scss',
  providers: [TranslatePipe],
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
    title: this.translate.transform('TalgahaSystem'),
    fillBtnTitle: this.translate.transform('ChoosePlane'),
    fillBtnAction: 'getPlans',
    emptyBtnTitle: this.translate.transform('ContactUsBtn'),
    emptyBtnAction: 'getContact',
    des: this.translate.transform('TalgahaInfo'),
    img: 'assets/imgs/image1.png',
  };

  constructor(
    private translate: TranslatePipe
  ){}
}
