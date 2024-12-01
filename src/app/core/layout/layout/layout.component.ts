import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { ScrollTopModule } from 'primeng/scrolltop';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet, ScrollTopModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit{

  @ViewChild('scrollUp') scrollUp!: ElementRef;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}


  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)){
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          this.scrollUp.nativeElement.style.display = "block"; // Show the div
        } else {
          this.scrollUp.nativeElement.style.display = "none"; // Hide the div
        }
      })
    }
  }

  goTop(){
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Smooth scrolling effect
    });
  }

}
