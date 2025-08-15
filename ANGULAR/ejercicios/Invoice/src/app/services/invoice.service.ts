import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Fixed import syntax
import { Observable } from 'rxjs';
import { invoice } from '../model/Invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private apiUrl = 'http://localhost:3000/api'; // URL base del backend

  constructor(private http: HttpClient) {}

  getInvoice(): Observable<invoice> {
    console.log('InvoiceService: solicitando datos del backend...');
    return this.http.get<invoice>(`${this.apiUrl}/invoice`); // 
  }


  checkBackendHealth(): Observable<any> {
    console.log('InvoiceService: Verificando la salud del backend ...');
    return this.http.get<any>(`${this.apiUrl}/health`);
  }
}
