import { Injectable } from '@angular/core';
import { invoice } from '../model/Invoice';
import { invoiceData } from '../data/invoice.data';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private invoice : invoice = invoiceData;

  constructor() { }

  getInvoice() : invoice {
    return this.invoice;
  }
}
