import { Component, ViewEncapsulation } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { environment } from '../../../../../../environments/environment.development';
@Component({
  selector: 'app-seconde-header',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './seconde-header.component.html',
  styleUrl: './seconde-header.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SecondeHeaderComponent {
  infoMail: string = environment.email;
  supplierSa: string = environment.TalgahaSa;
  facebook: string = environment.FaceBookLink;
  InstaLink: string = environment.InstaLink;
  tiktokLink: string = environment.tiktokLink;
  TwitterLink: string = environment.TwitterLink;
  YouTube: string = environment.YouTube;
}
