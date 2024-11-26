import { Component } from '@angular/core';
import { InfoBoxComponent } from '../info-box/info-box.component';
import { title } from 'process';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [InfoBoxComponent],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.scss'
})
export class SolutionsComponent {
  boxInfoData: any = {
    header: 'Realtime analytics',
    desc: 'Ornare arcu dui vivamus arcu felis bibendum ut tristique et tortor condimentum lacinia quis vel eros laoreet id donec ultrices tincidunt arcu id donec ultrices tincidunt arcu ipsum dolor sit amet.'
  }
}
