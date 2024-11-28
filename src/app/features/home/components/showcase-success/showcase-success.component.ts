import { Component, ViewEncapsulation } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-showcase-success',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './showcase-success.component.html',
  styleUrl: './showcase-success.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ShowcaseSuccessComponent {
  numbers: any[] = [
    {
      number: '200+',
      title: 'WebsitesBuild'
    },
    {
      number: '97%',
      title: 'ClientSatisfaction'
    },
    {
      number: '34+',
      title: 'TeamMembers'
    },
    {
      number: '100+',
      title: 'AmazingClients'
    }
  ]
}
