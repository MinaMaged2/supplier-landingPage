import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  TranslateService,
  TranslatePipe,
  TranslateDirective,
} from '@ngx-translate/core';
// import AOS from 'aos';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'supplier-landingpage';

  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.translate.addLangs(['en', 'ar']);
    this.translate.setDefaultLang('ar');
    this.translate.use('ar');
  }

  ngOnInit(): void {
    // if (isPlatformBrowser(this.platformId)){
    //   AOS.init();
    // }
  }
}
