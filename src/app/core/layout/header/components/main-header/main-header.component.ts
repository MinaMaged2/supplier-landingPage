import { Component } from '@angular/core';
import { NavItem } from '../../../../models/navItem';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MobileNavbarComponent } from '../mobile-navbar/mobile-navbar.component';


@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [RouterModule, ButtonModule, MobileNavbarComponent],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss',
})
export class MainHeaderComponent {
  navItems: NavItem[] = [
    { name: 'Home', url: '/home' },
    { name: 'About Us', url: '/about' },
    { name: 'Services', url: '/services' },
    { name: 'Contact Us', url: '/contact' },
    { name: 'Packages', url: '/packages' },
  ];

  sidebarVisible: boolean = false;

}