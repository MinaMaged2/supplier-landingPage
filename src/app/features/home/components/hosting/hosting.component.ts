import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-hosting',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './hosting.component.html',
  styleUrl: './hosting.component.scss'
})
export class HostingComponent {
  @Input() data: any;

  getPlans(data: any){

  }

  getContact(data: any){
    
  }
}
