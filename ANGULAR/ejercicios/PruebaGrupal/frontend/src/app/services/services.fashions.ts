import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Fixed import syntax
import { Observable } from 'rxjs';
import { MariaSuc } from '../models/Maria'; 
import { JoseSuc } from '../models/Jose';
import { KevinSuc } from '../models/Kevin';
import { SofiaSuc } from '../models/Sofia';
import { MateoSuc } from '../models/Mateo';  
@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private apiUrl = 'http://localhost:3000/api'; // URL base del backend

  constructor(private http: HttpClient) {}

  getMariaSuc() :  Observable<MariaSuc> {
    console.log('InvoiceService: solicitando datos del backend...');
    return this.http.get<MariaSuc>(`${this.apiUrl}/company/maria`); // 
  }

  getJoseSuc() : Observable<JoseSuc> {
    console.log('InvoiceService: solicitando datos del backend...');
    return this.http.get<JoseSuc>(`${this.apiUrl}/company/jose`); // 
  }
  getKevinSuc() : Observable<KevinSuc> {
    console.log('InvoiceService: solicitando datos del backend...');
    return this.http.get<KevinSuc>(`${this.apiUrl}/company/kevin`); // 
  }
  getSofiaSuc() : Observable<SofiaSuc> {
    console.log('InvoiceService: solicitando datos del backend...');
    return this.http.get<SofiaSuc>(`${this.apiUrl}/company/sofia`); // 
  }
  getMateoSuc() : Observable<MateoSuc> {
    console.log('InvoiceService: solicitando datos del backend...');
    return this.http.get<MateoSuc>(`${this.apiUrl}/company/mateo`); // 
  }
  checkBackendHealth(): Observable<any> {
    console.log('InvoiceService: Verificando la salud del backend ...');
    return this.http.get<any>(`${this.apiUrl}/health`);
  }
}
