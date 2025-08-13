import { Component, Input } from '@angular/core';
import { invoiceItem } from '../../model/InvoiceItem';

@Component({
  selector: 'invoice-item',
  imports: [],
  templateUrl: './invoice-item.component.html',
})
export class InvoiceItemComponent {
  @Input() item! : invoiceItem;
}
