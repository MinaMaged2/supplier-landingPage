import { Component } from '@angular/core';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { PricingPlansComponent } from './components/pricing-plans/pricing-plans.component';
import { FeaturesComponent } from './components/features/features.component';
import { ShowcaseSuccessComponent } from './components/showcase-success/showcase-success.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MainSectionComponent,
    SolutionsComponent,
    PricingPlansComponent,
    FeaturesComponent,
    ShowcaseSuccessComponent,
    ContactUsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
