import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { environment } from '../../../../environments/environment.development';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  quickLinks: any[] = [
    { name: 'Home', url: 'home' },
    { name: 'ContactUs', url: 'contact' },
    { name: 'AboutUs', url: 'about' },
    { name: 'Services', url: 'services' },
  ]

  servicesLinks: any[] = [
    {
      name: 'FAQ',
      url: '#'
    },
    { name: 'Packages', url: 'packages' },
  ]
  supplierSa: string = environment.TalgahaSa;
  facebook: string = environment.FaceBookLink;
  InstaLink: string = environment.InstaLink;
  tiktokLink: string = environment.tiktokLink;
  TwitterLink: string = environment.TwitterLink;
  YouTube: string = environment.YouTube;
  infoMail: string = environment.email

}
