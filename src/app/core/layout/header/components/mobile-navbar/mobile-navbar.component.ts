import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { RouterModule } from '@angular/router';
import { NavItem } from '../../../../models/navItem';

@Component({
  selector: 'app-mobile-navbar',
  standalone: true,
  imports: [SidebarModule, RouterModule],
  templateUrl: './mobile-navbar.component.html',
  styleUrl: './mobile-navbar.component.scss'
})
export class MobileNavbarComponent {
  @Input() sidebarVisible : boolean = false;

  @Output() hideSideBar = new EventEmitter();
  
  navItems: NavItem[] = [
    { name: 'Home', url: '/home' },
    { name: 'About Us', url: '/about' },
    { name: 'Services', url: '/services' },
    { name: 'Contact Us', url: '/contact' },
    { name: 'Packages', url: '/packages' },
  ];
  
}
