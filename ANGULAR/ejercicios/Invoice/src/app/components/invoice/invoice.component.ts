import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { invoice } from '../../model/Invoice';

@Component({
  selector: 'app-invoice',
  imports: [],
  templateUrl: './invoice.component.html',

})
export class InvoiceComponent implements OnInit {

  invoice! : invoice;

  constructor(private service: InvoiceService) {

  }
  ngOnInit(): void {
    this.invoice=this.service.getInvoice();
  }
}
