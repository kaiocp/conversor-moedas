import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateApiService {
  public url: string = 'https://api.exchangerate.host/';

  constructor(private http: HttpClient) { }

  public getSymbols(): Observable<any> { // considerar implementar uma interface aqui
    return this.http.get(`${this.url}symbols`).pipe(
      res => res,
      error => error
      )
  }
}
