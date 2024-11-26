import { Component } from '@angular/core';

@Component({
  selector: 'app-showcase-success',
  standalone: true,
  imports: [],
  templateUrl: './showcase-success.component.html',
  styleUrl: './showcase-success.component.scss'
})
export class ShowcaseSuccessComponent {
  numbers: any[] = [
    {
      number: '200+',
      title: 'Websites build'
    },
    {
      number: '97%',
      title: 'Client satisfaction'
    },
    {
      number: '34+',
      title: 'Team members'
    },
    {
      number: '100+',
      title: 'Amazing clients'
    }
  ]
}
