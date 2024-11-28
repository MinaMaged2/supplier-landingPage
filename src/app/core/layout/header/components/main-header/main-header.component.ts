import { Component } from '@angular/core';
import { NavItem } from '../../../../models/navItem';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MobileNavbarComponent } from '../mobile-navbar/mobile-navbar.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [RouterModule, ButtonModule, MobileNavbarComponent, TranslateModule],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss',
})
export class MainHeaderComponent {
  navItems: NavItem[] = [
    { name: 'Home', url: 'home' },
    { name: 'AboutUs', url: 'about' },
    { name: 'Services', url: 'services' },
    { name: 'ContactUs', url: 'contact' },
    { name: 'Packages', url: 'packages' },
  ];

  sidebarVisible: boolean = false;

  
}
