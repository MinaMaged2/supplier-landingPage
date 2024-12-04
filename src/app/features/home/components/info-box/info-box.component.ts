import { isPlatformBrowser } from '@angular/common';
import { Component, Input, OnInit, } from '@angular/core';
import { SeoService } from '../../../../shared/services/seo/seo.service';

@Component({
  selector: 'app-info-box',
  standalone: true,
  imports: [],
  templateUrl: './info-box.component.html',
  styleUrl: './info-box.component.scss'
})
export class InfoBoxComponent implements OnInit{
  @Input() data: any;

  constructor(
    private seoService: SeoService
  ){}

  ngOnInit(): void {
    this.setMetaTags();
    this.setStructuredData();
    
  }


  setMetaTags() {
    // Set the title of the page
    // this.seoService.setTitle(this.data.metaTitle);

    // Add meta tags
    this.seoService.addMetaTags(this.data.metaTags);
  }

  setStructuredData() {
     // Create a script element for JSON-LD
     this.seoService.setStructuredData(this.data.schema)
  };

}
