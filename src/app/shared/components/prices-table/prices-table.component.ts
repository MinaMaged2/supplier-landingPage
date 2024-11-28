import { Component, EventEmitter, Input, Output, Inject, PLATFORM_ID } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment.development';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-prices-table',
  standalone: true,
  imports: [TableModule, ButtonModule, TranslateModule],
  templateUrl: './prices-table.component.html',
  styleUrl: './prices-table.component.scss'
})
export class PricesTableComponent {
  @Input() tablesRow!: string[];
  @Input() data!: any;
  @Input() showHeader: boolean = false;
  @Input() showFooter: boolean = false;
  @Input() showViewMore: boolean = false;
  @Output() isShowMoreClicked = new EventEmitter();

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ){}

  getFreeTrail(){
    if (isPlatformBrowser(this.platformId)) {
      window.location.href = environment.SupplierCom + 'packages'
    }
  }

  getPlans(){
    if (isPlatformBrowser(this.platformId)) {
      window.location.href = environment.SupplierComSa + 'packages'
    }
  }
}
