import { Component, Input } from '@angular/core';
import { invoiceItem } from '../../model/InvoiceItem';
import { InvoiceItemComponent } from '../invoice-item/invoice-item.component';

@Component({
  selector: 'invoice-detail',
  imports: [InvoiceItemComponent],
  templateUrl: './invoice-detail.component.html',
})
export class InvoiceDetailComponent {
  @Input() items! : invoiceItem[];
}