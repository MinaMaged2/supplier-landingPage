import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    private meta: Meta,
    private title: Title,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  // Set the title of the page
  setTitle(newTitle: string): void {
    this.title.setTitle(newTitle);
  }

  // Add meta tags
  addMetaTags(tags: { name?: string; property?: string; content: string }[]): void {
    this.meta.addTags(tags);
  }

  // Set Structured Data (JSON-LD)
  setStructuredData(schema: any) {
    if (isPlatformBrowser(this.platformId)) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }
}
