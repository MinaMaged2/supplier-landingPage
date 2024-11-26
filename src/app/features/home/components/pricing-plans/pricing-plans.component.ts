import { Component } from '@angular/core';
import { PricesTableComponent } from '../../../../shared/components/prices-table/prices-table.component';

@Component({
  selector: 'app-pricing-plans',
  standalone: true,
  imports: [PricesTableComponent],
  templateUrl: './pricing-plans.component.html',
  styleUrl: './pricing-plans.component.scss'
})
export class PricingPlansComponent {
  audienceRow: string[] = [
    'Audience',
    'Basic plan',
    'Pro plan',
    'Premium plan',
    'Customize plan'
  ];

  audience: any[] = [
    {
      marked: false,
      name: 'Manage subscribers',
      basicPlan: 'Up to 1,000',
      proPlan: '2,500',
      premiumPlan: 'Unlimited',
      customizePlan: 'Unlimited'
    },
    {
      marked: false,
      name: 'Create email forms',
      basicPlan: 'Up to 1,000',
      proPlan: '2,500',
      premiumPlan: 'Unlimited',
      customizePlan: 'Unlimited'
    },
    {
      marked: true,
      name: 'Customizable domain',
      basicPlan: true,
      proPlan: true,
      premiumPlan: true,
      customizePlan: true
    },
    {
      marked: true,
      name: 'Subscribers tagging',
      basicPlan: true,
      proPlan: true,
      premiumPlan: true,
      customizePlan: true
    },
    {
      marked: true,
      name: 'Newsletter referral system',
      basicPlan: false,
      proPlan: false,
      premiumPlan: true,
      customizePlan: true
    }
  ];

  automationRow: string[] = [
    'Automation & emails',
    'Basic plan',
    'Pro plan',
    'Premium plan',
    'Premium plan',
  ];

  automation: any[] = [
    {
      marked: false,
      name: 'Send email broadcast',
      basicPlan: '250/mo',
      proPlan: '500/mo',
      premiumPlan: 'Unlimited',
      customizePlan: 'Unlimited'
    },
    {
      marked: true,
      name: '100+ integrations',
      basicPlan: false,
      proPlan: true,
      premiumPlan: true,
      customizePlan: true
    },
    {
      marked: true,
      name: 'Automated email sequences',
      basicPlan: false,
      proPlan: true,
      premiumPlan: true,
      customizePlan: true
    },
    {
      marked: true,
      name: 'Automated funnels',
      basicPlan: false,
      proPlan: false,
      premiumPlan: true,
      customizePlan: true
    },
    {
      marked: true,
      name: 'Customizable emails',
      basicPlan: false,
      proPlan: false,
      premiumPlan: true,
      customizePlan: true
    },
  ]
}
