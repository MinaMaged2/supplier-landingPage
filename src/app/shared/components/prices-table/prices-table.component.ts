import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-prices-table',
  standalone: true,
  imports: [TableModule, ButtonModule],
  templateUrl: './prices-table.component.html',
  styleUrl: './prices-table.component.scss'
})
export class PricesTableComponent {
  @Input() tablesRow!: string[];
  @Input() data!: any;
  @Input() showHeader: boolean = false;
  @Input() showFooter: boolean = false;

}
