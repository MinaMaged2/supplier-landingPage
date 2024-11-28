import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { RouterModule } from '@angular/router';
import { NavItem } from '../../../../models/navItem';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-mobile-navbar',
  standalone: true,
  imports: [SidebarModule, RouterModule, TranslateModule],
  templateUrl: './mobile-navbar.component.html',
  styleUrl: './mobile-navbar.component.scss'
})
export class MobileNavbarComponent {
  @Input() sidebarVisible : boolean = false;

  @Output() hideSideBar = new EventEmitter();
  
  navItems: NavItem[] = [
    { name: 'Home', url: 'home' },
    { name: 'AboutUs', url: 'about' },
    { name: 'Services', url: 'services' },
    { name: 'ContactUs', url: 'contact' },
    { name: 'Packages', url: 'packages' },
  ];
  
}
