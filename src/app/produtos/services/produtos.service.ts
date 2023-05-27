import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})

export class ProdutosService {
  private apiUrl = 'https://hmax-api-wzmzeliz4a-rj.a.run.app/api/dev-challange/products';
  private token = 'aL!HZN7Vd4xKHMxEODdf4ZkXvdKf5vDy8VjJPDl-jv244qn17NP=fXV-j=q6BMVV';

  constructor(private httpClient: HttpClient) { }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders().set('token', this.token);
  }

  getProducts(): Observable<any> {
   return this.httpClient.get<any>(this.apiUrl);
  }

  getProduct(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.get<any>(url);
  }

  createProduct(product: any): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl, product);
  }

  updateProduct(id: number, product: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.patch<any>(url, product);
  }

  deleteProduct(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.delete<any>(url);
  }
}
      // list(): Produto[] {
      //   return [
      //     { id: '1', name: 'Coca-Cola', unit:'Lata', price: 5, active: true }
      //   ];
      //}

