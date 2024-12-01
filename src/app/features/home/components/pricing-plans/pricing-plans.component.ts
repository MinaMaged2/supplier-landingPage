import { Component } from '@angular/core';
import { PricesTableComponent } from '../../../../shared/components/prices-table/prices-table.component';
import { ButtonModule } from 'primeng/button';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-pricing-plans',
  standalone: true,
  imports: [PricesTableComponent, ButtonModule, TranslateModule],
  templateUrl: './pricing-plans.component.html',
  styleUrl: './pricing-plans.component.scss',
})
export class PricingPlansComponent {
  mainRowHeader:   string[] = [
    '',
    'BasicPlan',
    'ProPlan',
    'PremiumPlan',
    'CustomizePlan'
  ];

  mainPlans: any[] = [
    {
      marked: false,
      name: 'Stores',
      basicPlan: '1',
      proPlan: '3',
      premiumPlan: '5',
      customizePlan: this.translate.instant('Unlimited')
    },
    {
      marked: false,
      name: 'Users',
      basicPlan: '2',
      proPlan: '4',
      premiumPlan: '6',
      customizePlan: this.translate.instant('Unlimited')
    },
    {
      marked: false,
      name: 'Products',
      basicPlan: '1000',
      proPlan: '2000',
      premiumPlan: '3000',
      customizePlan: this.translate.instant('Unlimited')
    },
    {
      marked: true,
      name: 'OnlineStore',
      basicPlan: false,
      proPlan: true,
      premiumPlan: true,
      customizePlan: true
    },
    {
      marked: true,
      name: 'UnLimitedInvoices',
      basicPlan: true,
      proPlan: true,
      premiumPlan: true,
      customizePlan: true
    },
    {
      marked: true,
      name: 'UnLimitedReports',
      basicPlan: true,
      proPlan: true,
      premiumPlan: true,
      customizePlan: true
    },
    {
      marked: true,
      name: 'CustomerService24h',
      basicPlan: true,
      proPlan: true,
      premiumPlan: true,
      customizePlan: true
    }
  ];

  descriptionRow: string[] = [
    '',
    'BasicPlan',
    'ProPlan',
    'PremiumPlan',
    'CustomizePlan'
  ];

  descriptionData: any[] = [
    {
      marked: false,
      name: 'Products',
      basicPlan: '1000',
      proPlan: '2000',
      premiumPlan: '3000',
      customizePlan: this.translate.instant('Unlimited')
    },
    {
      marked: false,
      name: 'Users',
      basicPlan: '2',
      proPlan: '4',
      premiumPlan: '6',
      customizePlan: this.translate.instant('Unlimited')
    },
    {
      marked: false,
      name: 'Stores',
      basicPlan: '1',
      proPlan: '3',
      premiumPlan: '5',
      customizePlan: this.translate.instant('Unlimited')
    },
    {
      marked: true,
      name: 'UnLimitedInvoices',
      basicPlan: true,
      proPlan: true,
      premiumPlan: true,
      customizePlan: true
    },
    {
      marked: true,
      name: 'UnLimitedClients',
      basicPlan: true,
      proPlan: true,
      premiumPlan: true,
      customizePlan: true
    },
    {
      marked: true,
      name: 'webSite',
      basicPlan: false,
      proPlan: true,
      premiumPlan: true,
      customizePlan: true
    },
    {
      marked: true,
      name: 'OnlineOrders',
      basicPlan: false,
      proPlan: true,
      premiumPlan: true,
      customizePlan: true
    },
    {
      marked: true,
      name: 'DeleveryApp',
      basicPlan: false,
      proPlan: false,
      premiumPlan: true,
      customizePlan: true
    },
    {
      marked: false,
      name: 'Prices',
      basicPlan: '180',
      proPlan: '310',
      premiumPlan: '390',
      customizePlan: 'Monthly'
    },
    {
      marked: false,
      name: 'Prices',
      basicPlan: '1900',
      proPlan: '3200',
      premiumPlan: '3950',
      customizePlan: 'Yearly'
    },
  ];
  isShowDetails: boolean = false;

  constructor(
    private translate: TranslateService
  ){}

}
