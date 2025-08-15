import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'invoice-detail',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './invoice-detail.component.html',

})

export class InvoiceComponentDetail {
  invoice = {
    items: [
      { product: { idproducto: 1, name: 'Mouse', price: 25 }, quantity: 2 },
      { product: { idproducto: 2, name: 'Laptop', price: 1200 }, quantity: 3 },
    ]
  };
}
