import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateApiService {
  url: string = 'https://api.exchangerate.host/';

  constructor(private http: HttpClient) { }

  getSymbols(): Observable<any> {
    return this.http.get(`${this.url}symbols`).pipe(
      res => res,
      error => error
      )
  }

  getConversion(from: string, to: string, amount: number): Observable<any> {
    return this.http.get(`${this.url}convert?from=${from}&to=${to}&amount=${amount}`).pipe(
      res => res,
      error => error
    )
  }
}
