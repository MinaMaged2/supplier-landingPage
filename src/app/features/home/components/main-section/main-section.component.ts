import { Component, ViewEncapsulation } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { HostingComponent } from '../hosting/hosting.component';

@Component({
  selector: 'app-main-section',
  standalone: true,
  imports: [TabViewModule, HostingComponent],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.scss',
})
export class MainSectionComponent {
  siteInfo: any = {
    header: 'Hosting',
    title: 'Premium Web Hosting for Your Website',
    fillBtnTitle: 'Choose your plan',
    fillBtnAction: 'getPlans',
    emptyBtnTitle: 'Contact us ',
    emptyBtnAction: 'getContact',
    des: 'Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.',
    img: 'assets/imgs/Image-(Replace).jpg',
  };

  // siteInfo: any[] = [
  //   {
  //     header: 'Hosting',
  //     title: 'Premium Web Hosting for Your Website',
  //     fillBtnTitle: 'Choose your plan',
  //     fillBtnAction: 'getPlans',
  //     emptyBtnTitle: 'Contact us ',
  //     emptyBtnAction: 'getContact',
  //     des: 'Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.',
  //     img: 'assets/imgs/Image-(Replace).jpg'
  //   },
  //   {
  //     header: 'Domain',
  //     title: 'Premium Web Domain for Your Website',
  //     fillBtnTitle: 'Choose your plan',
  //     fillBtnAction: 'getPlans',
  //     emptyBtnTitle: 'Contact us ',
  //     emptyBtnAction: 'getContact',
  //     des: 'Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.',
  //     img: 'assets/imgs/Image-(Replace).jpg'
  //   },
  //   {
  //     header: 'SEO',
  //     title: 'Premium Web SEO for Your Website',
  //     fillBtnTitle: 'Choose your plan',
  //     fillBtnAction: 'getPlans',
  //     emptyBtnTitle: 'Contact us ',
  //     emptyBtnAction: 'getContact',
  //     des: 'Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.',
  //     img: 'assets/imgs/Image-(Replace).jpg'
  //   },
  //   {
  //     header: 'Email',
  //     title: 'Premium Web Email for Your Website',
  //     fillBtnTitle: 'Choose your plan',
  //     fillBtnAction: 'getPlans',
  //     emptyBtnTitle: 'Contact us ',
  //     emptyBtnAction: 'getContact',
  //     des: 'Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.',
  //     img: 'assets/imgs/Image-(Replace).jpg'
  //   }
  // ];
  activeIndex: number = 0;
}
