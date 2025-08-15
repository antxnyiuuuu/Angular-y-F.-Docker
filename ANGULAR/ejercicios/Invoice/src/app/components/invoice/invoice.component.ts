import { Component, OnInit } from '@angular/core';
import { invoice } from '../../model/Invoice';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { CustomerViewComponent } from '../customer-view/customer-view.component';
import { InvoiceService } from '../../services/invoice.service';
import { InvoiceComponentDetail } from "../invoice-detail/invoice-detail.component";

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CompanyViewComponent, CustomerViewComponent, InvoiceComponentDetail],
  templateUrl: './invoice.component.html',
})
export class InvoiceComponent implements OnInit {
  invoice!: invoice;

  constructor(private service: InvoiceService) {}

  ngOnInit(): void {
    this.service.getInvoice().subscribe(
      (data: invoice) => {
        this.invoice = data;
        console.log('Datos recibidos del backend:', data);
      },
      (error) => {
        console.error('Error al obtener datos del backend:', error);
        console.error('Asegúrate de que el backend esté en puerto 3000');
      }
    );
  }
}
