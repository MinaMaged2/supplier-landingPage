import { Component } from '@angular/core';
import { url } from 'inspector';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  quickLinks: any[] = [
    {
      name: 'Home',
      url: '#'
    },
    {
      name: 'Contacts',
      url: '#'
    },
    {
      name: 'About Us',
      url: '#'
    },
    {
      name: 'Services',
      url: '#'
    }
  ]

  servicesLinks: any[] = [
    {
      name: 'FAQ',
      url: '#'
    },
    {
      name: 'Pricing',
      url: '#'
    },
  ]

}
