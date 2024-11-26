import { Component } from '@angular/core';
import { SecondeHeaderComponent } from './components/seconde-header/seconde-header.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SecondeHeaderComponent, MainHeaderComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
